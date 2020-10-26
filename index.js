'use strict';
var postcss = require('postcss');

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

        const [before, classes] = selector.split('.');

        const classesWithSuffix = classes.map(function(className){
            return replacer(className, blocks, suffix);
        });

        return [before, ...classesWithSuffix].join('.');
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
