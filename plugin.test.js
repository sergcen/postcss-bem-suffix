const postcss = require('postcss');

const { it, describe } = require('@jest/globals');
const plugin = require('./index');

describe('plugin', () => {
    it('base', async () => {
        const res = await postcss([
            plugin({
                blocks: ['Button', 'Select'],
                prefix: 'mysuffix',
            }),
        ]).process('.Select .Button-Text { color: black }', { from: '.' });

        expect(
            res.css
        ).toBe('.mysuffix-Select .mysuffix-Button-Text { color: black }');
    });
});
