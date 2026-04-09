import { h } from 'vue'
import type { Theme } from 'vitepress'
import horizonTheme from '@roidmc/horizon-theme'
import 'virtual:uni-icons.css'
import './custom/style/index.scss'

export default {
  ...horizonTheme,
  Layout: () => {
    return h(horizonTheme.Layout, null, {})
  }
} satisfies Theme