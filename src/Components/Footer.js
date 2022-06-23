import React from "react"
import logo from "../images/logo.png"
import { Icon } from '@iconify/react';


const Footer= () => {
    return (
      <footer className="footer_content pt-3">
        <div className="container">
            <div className="footer_info1 row pb-3">
                <img src={logo} className="footer-logo col-4 col-md-4" alt="footer-logo" />
                {/* footer links */}
                <div className="footer_links col-4 col-md-4">
                    <ul className="foot_links d-flex">
                        <li className="links">
                            <a href="#">Home</a>
                        </li>
                        <li className="links">
                            <a href="#">About</a>
                        </li>
                        <li className="links">
                            <a href="#">Services</a>
                        </li>
                        <li className="links">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                {/* social media */}
                <div className="footer_media col-4 col-md-4 d-flex">
                    <Icon className="media" icon="jam:twitter-square" />
                    <Icon className="media" icon="brandico:facebook-rect" />
                    <Icon className="media" icon="akar-icons:instagram-fill" />
                    <Icon className="media" icon="logos:google-gmail" />
                    
                </div>
            </div> 
            <div className="footer_info1 row">
                <div className="col-4">
                    <div className="d-flex align-items-center">
                        <Icon icon="cil:location-pin" />
                        <div className="lh-sm">
                            <p>Address</p>
                            <p>Lagos, Nigeria.</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="d-flex align-items-center">
                        <Icon icon="akar-icons:phone" />
                        <div className="lh-sm">
                            <p>Phone</p>
                            <p>08168043634, 08167078665</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="d-flex align-items-center">
                        <Icon icon="fluent:mail-16-filled" />
                        <div className="lh-sm">
                            <p>Email</p>
                            <p>akinehinsarah@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
      </footer>
    )
}


export default Footer
