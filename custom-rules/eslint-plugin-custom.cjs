/**
 * DeepSeek (19.09.25)
 */
module.exports = {
  rules: {
    'no-jsx-adjacent-empty-lines': {
      meta: {
        type: 'layout',
        fixable: 'whitespace',
        schema: [],
        messages: {
          afterOpen: 'Empty line after opening tag is not allowed.',
          beforeClose: 'Empty line before closing tag is not allowed.',
        },
      },
      create(context) {
        const sourceCode = context.getSourceCode();

        function hasEmptyLines(text) {
          const lines = text.split(/\r?\n/);

          if (lines.length < 3) return false;
          for (let i = 1; i < lines.length - 1; i++) {
            if (lines[i].trim() === '') return true;
          }

          return false;
        }

        function getIndentation(line) {
          return line.match(/^\s*/)[0];
        }

        function checkJSXElement(node) {
          if (!node.closingElement) return;

          const children = node.children.filter((child) => {
            if (child.type === 'JSXText') {
              return child.value.trim() !== '';
            }

            return true;
          });

          if (children.length === 0) return;

          const firstChild = children[0];
          const lastChild = children[children.length - 1];

          const openingEnd = node.openingElement.range[1];
          const firstChildStart = firstChild.range[0];
          const textAfterOpening = sourceCode.text.slice(openingEnd, firstChildStart);

          if (hasEmptyLines(textAfterOpening)) {
            context.report({
              node,
              messageId: 'afterOpen',
              loc: {
                start: sourceCode.getLocFromIndex(openingEnd),
                end: sourceCode.getLocFromIndex(firstChildStart),
              },
              fix(fixer) {
                const firstChildLine = sourceCode.lines[firstChild.loc.start.line - 1];
                const indent = getIndentation(firstChildLine);

                return fixer.replaceTextRange([openingEnd, firstChildStart], `\n${indent}`);
              },
            });
          }

          const lastChildEnd = lastChild.range[1];
          const closingStart = node.closingElement.range[0];
          const textBeforeClosing = sourceCode.text.slice(lastChildEnd, closingStart);

          if (hasEmptyLines(textBeforeClosing)) {
            context.report({
              node,
              messageId: 'beforeClose',
              loc: {
                start: sourceCode.getLocFromIndex(lastChildEnd),
                end: sourceCode.getLocFromIndex(closingStart),
              },
              fix(fixer) {
                const closingLine = sourceCode.lines[node.closingElement.loc.start.line - 1];
                const indent = getIndentation(closingLine);

                return fixer.replaceTextRange([lastChildEnd, closingStart], `\n${indent}`);
              },
            });
          }
        }

        function checkJSXFragment(node) {
          const children = node.children.filter((child) => {
            if (child.type === 'JSXText') {
              return child.value.trim() !== '';
            }

            return true;
          });

          if (children.length === 0) return;

          const firstChild = children[0];
          const lastChild = children[children.length - 1];

          const openingEnd = node.openingFragment.range[1];
          const firstChildStart = firstChild.range[0];
          const textAfterOpening = sourceCode.text.slice(openingEnd, firstChildStart);

          if (hasEmptyLines(textAfterOpening)) {
            context.report({
              node,
              messageId: 'afterOpen',
              loc: {
                start: sourceCode.getLocFromIndex(openingEnd),
                end: sourceCode.getLocFromIndex(firstChildStart),
              },
              fix(fixer) {
                const firstChildLine = sourceCode.lines[firstChild.loc.start.line - 1];
                const indent = getIndentation(firstChildLine);

                return fixer.replaceTextRange([openingEnd, firstChildStart], `\n${indent}`);
              },
            });
          }

          const lastChildEnd = lastChild.range[1];
          const closingStart = node.closingFragment.range[0];
          const textBeforeClosing = sourceCode.text.slice(lastChildEnd, closingStart);

          if (hasEmptyLines(textBeforeClosing)) {
            context.report({
              node,
              messageId: 'beforeClose',
              loc: {
                start: sourceCode.getLocFromIndex(lastChildEnd),
                end: sourceCode.getLocFromIndex(closingStart),
              },
              fix(fixer) {
                const closingLine = sourceCode.lines[node.closingFragment.loc.start.line - 1];
                const indent = getIndentation(closingLine);

                return fixer.replaceTextRange([lastChildEnd, closingStart], `\n${indent}`);
              },
            });
          }
        }

        return {
          JSXElement: checkJSXElement,
          JSXFragment: checkJSXFragment,
        };
      },
    },
  },
};
