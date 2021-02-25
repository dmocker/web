import { globalStyles } from '../shared/styles'
import { Fragment } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps }) => (
  <Fragment>
    {globalStyles}
    <Component {...pageProps} />
  </Fragment>
)

export default App
