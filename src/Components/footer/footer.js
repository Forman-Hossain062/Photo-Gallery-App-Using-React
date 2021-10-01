import React from 'react'
import './footer.css'
// import FooterLink from './FooterLink';

const Footer = () => {
    return (
        <div style={{
            position: 'fixed',
            bottom: '0',
            paddingTop: '10px',
            width: '100%',

        }}>
            {/* <FooterLink /> */}
            <div className="footer" style={{ position: 'fixed', }} style={{ backgroundColor: "#93B5C6", textAlign: 'center', height: '70px', color: 'white' }}>
                <p style={{ padding: '20px' }}>Photo Gallery &#169; Copyright 2021 ; <span style={{ color: 'black' }}> Developed By: Forman Hossain ;</span> </p>
            </div>
        </div>
    )
}

export default Footer;