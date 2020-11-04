const { it, describe } = require('@jest/globals');
const replacer = require('./replacer');

const blocks = ['Button', 'Select', 'Divider'];

describe('replacer', () => {
    it('base', () => {
        expect(replacer('.Button', blocks, { suffix: 'suffix' })).toBe('.Button-suffix');
    });

    it('element', () => {
        expect(replacer('.Button-Text .Select .Other', blocks, { suffix: 'suffix' })).toBe(
            '.Button-suffix-Text .Select-suffix .Other'
        );
    });

    it('mod', () => {
        expect(replacer('.Button_mod .Button_modValue.Button_mod_Value .Other', blocks, { suffix: 'suffix' })).toBe(
            '.Button-suffix_mod .Button-suffix_modValue.Button-suffix_mod_Value .Other'
        );
    });

    it('base prefix', () => {
        expect(replacer('.Button', blocks, { prefix: 'prefix' })).toBe('.prefix-Button');
    });

    it('attributes and pseudo', () => {
        expect(replacer('.Button[ab] .Select::before', blocks, { prefix: 'prefix' })).toBe('.prefix-Button[ab] .prefix-Select::before');
    });
});
