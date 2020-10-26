'use strict';
const postcss = require('postcss');
const replacer = require('./replacer');

module.exports = postcss.plugin('postcss-bem-suffix', bemSuffix);

function bemSuffix({ suffix, blocks }) {
  return function(root) {

    root.walkRules(function (rule) {
      if (!rule.selectors){
        return rule;
      }

      rule.selectors = rule.selectors.map(function(selector) {
        if (!hasClassSelector(selector)) {
            return selector;
        }

        return replacer(selector, blocks, suffix);
      });
    });
  };
}

/**
 * Determine if selector is a class
 *
 * @param {string} selector
 */
function hasClassSelector(selector) {
  return selector.includes('.');
}
