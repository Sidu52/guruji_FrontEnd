import React from "react";
import testimonial from "../../Images/carsouel";
import card from "./data";
import AstroCard from "../astrologercard/AstrologerCard";

import './Astrologer.css'
import commonImg from "../../Images";

const Astrologers = () => {
    return (
        <div className="astroContainer">
            <div className="astrologers">
                <div className="astologerContainer">
                    <div className="astrologerHead">
                        <div className="cardHead">
                            <img src={testimonial.star} />
                            <span>Premium Astrologers</span>
                            <img src={testimonial.star} />
                        </div>
                    </div>

                    <div className="astrologerCard">
                        <div className="astrologerCard1">
                            {card.cardSection1.map((astrologer, i) => (
                                <AstroCard
                                    key={i}
                                    astro={astrologer}
                                    active={astrologer.islive}
                                />
                            ))}
                        </div>
                        <div className="astrologerCard2" style={{ marginTop: "35px" }}>
                            {card.cardSection2.map((astrologer, i) => (
                                <AstroCard
                                    key={i}
                                    astro={astrologer}
                                    active={astrologer.islive}
                                />
                            ))}
                        </div>
                        <div className="astrologerCard3">
                            {card.cardSection3.map((astrologer, i) => (
                                <AstroCard
                                    key={i}
                                    astro={astrologer}
                                    active={astrologer.islive}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="astrologerBottom">
                        <img src={commonImg.endRef} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Astrologers;
