// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu(
    {
      // ...@antfu/eslint-config options
      vue: true,
      typescript: true,
      unocss: true,
      formatters: true,
    },
    {
      ignores: [
        '.github/**',
      ],
    },
  ),
  // Your custom configs here
)
