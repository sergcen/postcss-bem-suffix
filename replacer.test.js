const { it, describe } = require('@jest/globals');
const replacer = require('./replacer');

const blocks = ['Button', 'Button2', 'Select', 'Divider', 'Popup2', 'Text'];

describe('replacer', () => {
    it('base', () => {
        expect(replacer('.Button', blocks, { suffix: 'suffix' })).toBe(
            '.Button-suffix'
        );
    });

    it('element', () => {
        expect(
            replacer('.Button-Text', blocks, {
                suffix: 'suffix',
            })
        ).toBe('.Button-suffix-Text');
    });

    it('element extended', () => {
        expect(
            replacer('.Button-Text .Select .Other', blocks, {
                suffix: 'suffix',
            })
        ).toBe('.Button-suffix-Text .Select-suffix .Other');
    });

    it('mod', () => {
        expect(
            replacer(
                '.Button_mod .Button_modValue.Button_mod_Value .Other',
                blocks,
                { suffix: 'suffix' }
            )
        ).toBe(
            '.Button-suffix_mod .Button-suffix_modValue.Button-suffix_mod_Value .Other'
        );
    });

    it('base prefix', () => {
        expect(replacer('some.Button', blocks, { prefix: 'prefix' })).toBe(
            'some.prefix-Button'
        );
    });

    it('element as block', () => {
        expect(
            replacer('.Button2-Text ', blocks, {
                prefix: 'prefix',
            })
        ).toBe('.prefix-Button2-Text ');
    });

    it('attributes and pseudo', () => {
        expect(
            replacer('.Button[ab] .Select::before', blocks, {
                prefix: 'prefix',
            })
        ).toBe('.prefix-Button[ab] .prefix-Select::before');
    });

    it('Block + mod concated', () => {
        expect(
            replacer('.Popup2.Popup2_view_default', blocks, {
                prefix: 'prefix',
            })
        ).toBe('.prefix-Popup2.prefix-Popup2_view_default');
    });
});
