const makeRegExpStr = (s) => new RegExp(`^(${s})(([-_]\\w+)|\\W|$)`, 'g');

const replacer = (selector, blocks, { suffix = '', prefix = '' }) => {
    const regExps = blocks.map((block) => makeRegExpStr(block));
    let [first, ...classParts] = selector.split('.');

    for (let blockRegExp of regExps) {
        classParts = classParts.map((classPart) => {
            if (!blockRegExp.test(classPart)) return classPart;

            return classPart.replace(blockRegExp, (_, block, after) => {
                return `${prefix && `${prefix}-`}${block}${
                    suffix && `-${suffix}`
                }${after}`;
            });
        });
    }

    return [first, ...classParts].join('.');
};

module.exports = replacer;
