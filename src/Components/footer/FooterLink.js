import React from 'react'
import './footer.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

const FooterLink = () => {
    return (
        <div style={{ textAlign: "center" }}>

            <div class="social-container">
                <h3 style={{ color: "white", paddingBottom: "10px" }}>Connect With Us</h3>
                <a href="https://www.youtube.com/channel/UCNICyk04pqQLeDcDn8lLhNA"
                    className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.facebook.com/groups/bidyasagor01"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>

                <a href="/" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="/"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>

        </div>

    )
}

export default FooterLink;