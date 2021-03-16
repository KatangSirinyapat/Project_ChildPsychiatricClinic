import '../styles/globals.css'
import styles from "../styles/Bar.module.css"
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const renderBar = () => {
    return (
      <div>
          <nav className = {styles.title}>
                <div className = {styles.head1}>
                    <p>HATYAI HOSPITAL</p>
                    <hr className = {styles.line}></hr>
                    <p>Child Psychiatric Clinic</p>  
                </div>

                <hr className = {styles.line2}></hr>
                
                <div>
                    <input className = {styles.search} type="text" placeholder="Search.." name="search" />
                    {/* <button type="submit"><i class="fa fa-search"></i></button> */}
                </div>

                <hr className = {styles.line2}></hr>
          </nav>
      </div>

)}

  return (
    <React.Fragment>
     
        <title>Hospital</title>
        {renderBar()}
  
      <Component {...pageProps} />
    </React.Fragment>
  ) 
}

export default MyApp
