const { it, describe } = require('@jest/globals');
const replacer = require('./replacer');

const blocks = ['Button', 'Select', 'Divider'];

describe('replacer', () => {
    it('base', () => {
        expect(replacer('.Button', blocks, 'suffix')).toBe('.Button-suffix');
    });

    it('element', () => {
        expect(replacer('.Button-Text .Select .Other', blocks, 'suffix')).toBe(
            '.Button-suffix-Text .Select-suffix .Other'
        );
    });

    it('mod', () => {
        expect(replacer('.Button_mod .Button_modValue.Button_mod_Value .Other', blocks, 'suffix')).toBe(
            '.Button-suffix_mod .Button-suffix_modValue.Button-suffix_mod_Value .Other'
        );
    });
});
