import '../styles/globals.css';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function MyApp({ Component, pageProps }) {
 
  return(
    <>
    <Header/>
    <div style={{marginTop:"80px"}}/>
    <Component {...pageProps} />
    <Footer/>
  </>
  )
}

export default MyApp
