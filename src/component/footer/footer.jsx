import React from 'react'
import commonImg from "../../Images";
import socialLogos from "../../Images/footer/socials";
import pay from "../../Images/footer/trustedSeals";

import './footer.css'


function footer() {
    const socialIcons = [
        socialLogos.facebook,
        socialLogos.instaI,
        socialLogos.twitter,
        socialLogos.yt,
    ];
    const payment = [pay.razorpay, pay.paytm, pay.stripe];
    return (
        <div className='f_Container'>
            <div className="f_description">
                <div className="f_SocialIcon">
                    <img src={commonImg.gurujiLogo} alt='logo' />
                    <h2>Guruji</h2>
                </div>
                <article>
                    About Guruji s2 to 3 lines what guruji do and how it works About
                    Guruji s2 to 3 lines what guruji do and how it works
                </article>
                <div className="f_Social">
                    {socialIcons.map((icon, i) => (
                        <img src={icon} key={i} alt='icon' />
                    ))}
                </div>
                <div className="f_Pay">
                    <p>Trusted & Seals</p>
                    {payment.map((pay, i) => (
                        <img src={pay} key={i} />
                    ))}
                </div>
            </div>
            <div className="f_Center">
                <div>
                    <h3>Company</h3>
                    <div>
                        <p>Home</p>
                        <p>Privacy Policy</p>
                        <p>T & C</p>
                        <p>Varied Payment</p>
                    </div>
                </div>
                <div>
                    <h3>Collaborate</h3>
                    <div>
                        <p>Clever Tap</p>
                        <p>Exotel </p>
                        <p>Facebook</p>
                        <p> Quora</p>
                        <p> Google</p>
                        <p> Youtube</p>
                    </div>
                </div>
                <div>
                    <h3>Support</h3>
                    <div>
                        <p>Home</p>
                        <p>Privacy Policy</p>
                        <p>T & C</p>
                        <p>Varied Payment</p>
                    </div>
                </div>
                <div>
                    <h3>Important Link</h3>
                    <div>
                        <p>Tarot Reader</p>
                        <p>Vedic Astrology</p>
                        <p>Palmistry</p>
                        <p>Gemology</p>
                        <p>Vastu</p>
                        <p>Numerology</p>
                    </div>
                </div>
            </div>

            <div className="f_Contact">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Mail Id" />
                <textarea type="text" placeholder="Write Query" />
                <input type="button" value="Submit" className="footer_btn  btn" />
            </div>
        </div>
    )
}
export default footer;
