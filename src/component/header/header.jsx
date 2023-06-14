import React, { useState, useEffect } from 'react';
import Images from '../../Images'
import HeaderImages from "../../Images/header";
import './header.css'
import { BsCircleFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { RxCrossCircled } from 'react-icons/rx'

const BgImg = {
    firstImg: HeaderImages.headerBg1,
    secondImg: HeaderImages.headerBg2,
    thirdImg: HeaderImages.headerBg3,
}

function header() {
    const [backgroundImage, setBackgroundImage] = useState(BgImg.firstImg);
    const [activeCircle, setActiveCircle] = useState(1);
    const [slidebaricon, setSlidebaricon] = useState(false);
    const [slidebar, setSlidebar] = useState(false);

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth <= 768) {
                setSlidebaricon(true);
            } else {
                setSlidebaricon(false)
            }
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    const handleSlidbar = () => {
        setSlidebar(!slidebar)
    }

    //Handle Image Sliding
    const handleCircleClick = (image, circleNumber) => {
        setBackgroundImage(image);
        setActiveCircle(circleNumber);
    };
    return (
        <div className="headerContainer" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {/* <img src={HeaderImages.headerBg} alt="" /> */}
            <div className='sidebar' style={{ display: slidebar ? "block" : "none" }}>
                <RxCrossCircled
                    onClick={handleSlidbar}
                />
            </div>
            <div className="headerNavContainer">
                <div style={{ display: slidebaricon ? "block" : "none" }}>
                    <FaBars
                        onClick={handleSlidbar}
                    />
                </div>
                <div className="headerlogo">
                    <img src={Images.gurujiLogo} alt="logo" />
                    <p>Guruji</p>
                </div>
                <div className="headerNav" style={{ display: slidebaricon ? 'none' : 'flex' }}>
                    <p>Home</p>
                    <p>Call with Astrologer</p>
                    <p>Live(Coming Soon)</p>
                </div>
                <div className="headerProfile">
                    <img src={HeaderImages.profile} alt="user_profile" />
                </div>
            </div>
            <div className="headerBody">
                <p>"Astrology for Clarity"</p>
                <article>Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra
                    Theraphy
                </article>
            </div>
            <div className="headerButton">
                <button className='headerBtn btn'>Consult Now</button>
            </div>
            <div className="headerFooterNav">
                <div className="headerService">
                    <img src={HeaderImages.customer} alt="customer-care" />
                    <p>24 X 7 Customer Support </p>
                </div>
                <div className="headerService">
                    <img src={HeaderImages.refund} alt="customer-care" className="refund" />
                    <p>100% Refund if Unsatisfied</p>
                </div>
                <div className="headerService">
                    <img src={HeaderImages.privat} alt="customer-care" />
                    <p>Private & Confidential</p>
                </div>
                <div className="headerService">
                    <img src={HeaderImages.verified} alt="customer-care" />
                    <p>
                        Verified <br /> Astrologer
                    </p>
                </div>
                <div className="headerService">
                    <img src={HeaderImages.secure} alt="customer-care" />
                    <p>
                        Secure <br /> Payment
                    </p>
                </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
                <BsCircleFill
                    className={activeCircle === 1 ? 'active' : ''}
                    onClick={() => handleCircleClick(BgImg.firstImg, 1)}
                />
                <BsCircleFill
                    className={activeCircle === 2 ? 'active' : ''}
                    onClick={() => handleCircleClick(BgImg.secondImg, 2)}
                />
                <BsCircleFill
                    className={activeCircle === 3 ? 'active' : ''}
                    onClick={() => handleCircleClick(BgImg.thirdImg, 3)}
                />
            </div>

        </div>
    )
}

export default header;