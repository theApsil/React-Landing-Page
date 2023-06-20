import React from "react";

const Footer = () => {
    const handleEmailClick = () => {
        console.log("Email clicked");
    };

    const handlePhoneClick = () => {
        console.log("Phone number clicked");
    };

    return (
        <div className="footer-wrapper">
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>Гарантии</span>
                    <span>Справочная служба</span>
                    <span>Турпакеты</span>
                </div>
                <div className="footer-section-columns">
                    <span onClick={handleEmailClick}>quality@traveltojapan.com</span>
                    <span onClick={handlePhoneClick}>+7-994-108-25-46</span>
                    <span>tours@traveltojapan.com</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
