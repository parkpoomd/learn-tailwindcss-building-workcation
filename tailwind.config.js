module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      padding: {
        '5/6': '83.3333333%'
      }
    },
    customForms: theme => ({
      default: {
        'select, radio, checkbox': {
          borderColor: 'transparent'
        },
        'radio, checkbox': {
          width: theme('spacing.6'),
          height: theme('spacing.6'),
          '&:checked': {
            backgroundColor: theme('colors.indigo.500')
          }
        },
        select: {
          lineHeight: theme('lineHeight.snug'),
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.700'),
          iconColor: theme('colors.white'),
          '&:focus': {
            borderColor: 'transparent',
            boxShadow: 'none'
          }
        },
        checkbox: {
          borderRadius: theme('borderRadius.lg')
        }
      }
    })
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')]
};
