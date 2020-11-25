'use strict';
const replacer = require('./replacer');

/**
 * Determine if selector is a class
 *
 * @param {string} selector
 */
function hasClassSelector(selector) {
    return selector.includes('.');
}

module.exports = ({ suffix, prefix, blocks } = {}) => {
    return {
        postcssPlugin: 'postcss-bem-suffix',
        Rule(rule) {
            if (!rule.selectors) {
                return rule;
            }

            rule.selectors = rule.selectors.map(function (selector) {
                if (!hasClassSelector(selector)) {
                    return selector;
                }

                return replacer(selector, blocks, { suffix, prefix });
            });
        },
    };
};

module.exports.postcss = true;
