import React from 'react'
import Link from 'next/link'
import GFLink from '../components/gfLink'


export default class AppHeader extends React.Component {
    render() {
        return (
            
            <header id="header" className="fixed-top ">
              <div className="container-fluid d-flex align-items-center justify-content-between">
          
                <h1 className="logo"><a href="/">gofru</a></h1>
               
                <div className="logo_part">
                    <div className="container">
                        <a href="/" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>
                    </div>
                </div>

          
                <nav className="nav-menu d-none d-lg-block">
                  <ul>
                    
                    {/* <li><Link href="/">Home</Link></li> */}
                    <GFLink href="/" children={<li className=""><a>Home</a></li>}></GFLink>
                    <GFLink href="/about.html" children={<li className=""><a>About</a></li>}></GFLink>
                    
                    {/* <li><a href="#about">About</a></li> */}
                    <GFLink href="/services.html" children={<li className=""><a>Services</a></li>}></GFLink>
                    
                    {/* <li><a href="#services">Services</a></li> */}
                    <GFLink href="/portfolio.html" children={<li className=""><a>Portfolio</a></li>}></GFLink>
                   
                    {/* <li><a href="#portfolio">Portfolio</a></li> */}
                    <GFLink href="/team.html" children={<li className=""><a>Team</a></li>}></GFLink>
                   
                    {/* <li><a href="#team">Team</a></li> */}
                    <li className="drop-down"><a href="">Drop Down</a>
                      <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li className="drop-down"><a href="#">Deep Drop Down</a>
                          <ul>
                            <li><a href="#">Deep Drop Down 1</a></li>
                            <li><a href="#">Deep Drop Down 2</a></li>
                            <li><a href="#">Deep Drop Down 3</a></li>
                            <li><a href="#">Deep Drop Down 4</a></li>
                            <li><a href="#">Deep Drop Down 5</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Drop Down 2</a></li>
                        <li><a href="#">Drop Down 3</a></li>
                        <li><a href="#">Drop Down 4</a></li>
                      </ul>
                    </li>
                    <GFLink href="/contact.html" children={<li className=""><a>Contact</a></li>}></GFLink>
                    
                    {/* <li><a href="#contact">Contact</a></li> */}
          
                  </ul>
                </nav>
          
                <a href="/about.html" className="get-started-btn scrollto">Get Started</a>
          
              </div>
            </header>
            
        )
        
    }
}