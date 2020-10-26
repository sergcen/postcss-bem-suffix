const makeRegExpStr = s => new RegExp(`(\\.)(${s})(([-_]\\w+)|\\s|$)`, 'g');

const replacer = (selector, blocks, suffix) => {
    const regExps = blocks.map((block) => makeRegExpStr(block));

    for (let blockRegExp of regExps) {
        if (!blockRegExp.test(selector)) continue;

        selector = selector.replace(blockRegExp, (_, before, block, after) => {
            return `${before}${block}-${suffix}${after}`;
        })
    }

    return selector;
};

module.exports = replacer;
