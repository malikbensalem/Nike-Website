import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import animationBeauty from '@animation/tailwind-animationbeauty'
import tailwindConfig from './tailwind.config.js'

export default {
  plugins: [
    tailwindcss({
      ...tailwindConfig,
      plugins: [...(tailwindConfig.plugins ?? []), animationBeauty],
    }),
    autoprefixer(),
  ],
}
