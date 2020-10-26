
// 'Button' === true
// 'Button ' === true
// 'Button2' === true
// 'Button2 .Exam' === true
// 'ButtonExam' === false
// 'Button2Variant' === false
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
