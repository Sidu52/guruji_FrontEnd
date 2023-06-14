import React from 'react'
import testimonial from "../../Images/carsouel";
import commonImg from "../../Images";

import './Review.css'
function Review() {
    return (
        <div className="r_MainConatiner">
            <div className='r_Container'>
                <div className="r_HeadContainer">
                    <div className="r_heading">
                        <img src={testimonial.star} alt='star' />
                        <span>User Review</span>
                        <img src={testimonial.star} alt='star' />
                    </div>

                    <div className="slider">
                        <img src={commonImg.review} alt='' />
                    </div>
                </div>
                <div className="r_footer">
                    <img src={commonImg.userbottom} alt='Design' />
                </div>

            </div>
        </div>

    )
}
export default Review;