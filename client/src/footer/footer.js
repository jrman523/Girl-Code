import React from 'react';
import './footer.css';

const gray = {
    color: 'gray'
}
const Footer = () => {
    return (
        <div>
            <footer className="page-footer">
                <div className="container"></div>
                <div className="footer-copyright">
                    <div className="container" align="center">
                        <p style={gray}> GirlCode © Copyright 2019 - All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Footer;