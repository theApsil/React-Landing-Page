import React, { useState } from "react";

const Contact = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = () => {
        // Обработка отправки формы
        console.log('Submitted:', email);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    };

    return (
        <div className="contact-page-wrapper">
            <h1 className="primary-heading">Остались вопросы?</h1>
            <h1 className="primary-heading">Мы вам поможем!</h1>
            <div className="contact-form-container">
                <input
                    type="text"
                    placeholder="yourmail@gmail.com"
                    value={email}
                    onChange={handleEmailChange}
                />
                <button className="secondary-button" onClick={handleSubmit}>
                    {isSubmitted ? "Отправлено" : "Отправить"}
                </button>
            </div>
        </div>
    );
};

export default Contact;
