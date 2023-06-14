import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsChatSquareDots, BsTelephone } from 'react-icons/bs';
import astroCards from "../../Images/astrologer cards";

import './AstrologerCard.css';

const AstroCard = ({ astro, active }) => {

    return (
        <div className="astrocard">
            <div className="astrocard__img">
                <img src={astro.image} />
                <div>
                    <p className="a__exp">{astro.experience}+ Years</p>

                    <div className="a__online">
                        <div></div>
                        {
                            astro.isOnline ? (
                                <p>Online</p>
                            ) : (
                                <p>Offline</p>
                            )
                        }
                    </div>
                </div>


                <div className="a__info">
                    <div className="a__rate">
                        <AiFillStar className="a__rateStar" />
                        <span>{astro.rating}</span>
                    </div>
                    <h2>Astrologer Name</h2>
                    <p className="a__Shead">Specialties</p>
                    <p>Love, Business, Life</p>
                    <p className="a__Shead">Skills</p>
                    <p>Vedic Astrology, Kundali,</p>
                </div>

                <div className="a__price">
                    <p>Price</p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <h2>₹{astro.price}</h2>
                        <p>/min</p>

                    </div>

                </div>
            </div>

            <div className="astrocard__live">
                <img src={astroCards.live}
                    style={astro.islive ? null : { opacity: 0.6 }}
                />
            </div>

            <div className="astrocard__contact">
                <div className="a__chat">
                    <BsChatSquareDots />
                    <p>Chat</p>
                </div>
                <div className="a__call">
                    <BsTelephone />
                    <p>Call</p>
                </div>
            </div>
        </div>
    );
};

export default AstroCard;
