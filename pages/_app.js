import '../styles/globals.css'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <title>Child Psychiatric Clinic</title>
      <Component {...pageProps} />
    </React.Fragment>
  ) 
}

export default MyApp
