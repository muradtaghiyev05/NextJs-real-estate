import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import NProgress from 'nprogress'
import Head from 'next/head'
import Router from 'next/router'
import '../node_modules/nprogress/nprogress.css'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {

  NProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  })

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  })

  Router.events.on('routeChangeError', () => {
    NProgress.done();
  })

  return (
    <>
      <Head>
        
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
