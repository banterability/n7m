const n7m = require('./index');

const EXAMPLES = [
  ['internationalization', 'i18n'],
  ['Kubernetes', 'K8s'],
  ['accessibility', 'a11y'],
  ['globalization', 'g11n'],
  ['localization', 'l10n'],
  ['personalization', 'p13n'],
  ['supercalifragilisticexpialidocious', 's32s']
];

describe('n7m', () => {
  describe("handles well-known numeronyms", () => {
    EXAMPLES.forEach(([input, output]) => {
      test(`handles ${input}`, () => {
        expect(n7m(input)).toEqual(output);
      })
    })
  });
});
