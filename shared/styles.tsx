import { css, Global, keyframes } from '@emotion/react'

export const globalStyles = (
  <Global
    styles={css`
      html {
        font-family: -apple-system, system-ui, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans,
          sans-serif, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB',
          'Microsoft YaHei', Arial;
        word-break: break-word;
        text-rendering: optimizeLegibility;
      }
      body {
        margin: 0;
      }
    `}
  />
)
