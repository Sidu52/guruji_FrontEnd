import React from "react";
import data from "./data";
import centerAn from "../../Images/animation logos";
import testimonial from "../../Images/carsouel";

import './P.css';

function ManyProblemOneSolution() {
    return (

        <div className="p_MainContainer">
            <div className='p_Contaier'>
                <div className="p_Head">
                    <img src={testimonial.star} />
                    <span>Many Problem one Solution</span>
                    <img src={testimonial.star} />
                </div>

                <div className="ps_Conatiner">
                    <div className="p_left p_All">
                        {data.left.map((item, i) => (
                            <img key={i} src={item} />
                        ))}
                    </div>
                    <div className="p_Center">
                        <img src={centerAn.rotate} className="p_Roter" />
                        <img src={centerAn.sun} className="p_Sun" />
                    </div>
                    <div className="p_Right p_All">
                        {data.right.map((item, i) => (
                            <img key={i} src={item} />
                        ))}
                    </div>
                </div>
            </div>

        </div >
    )
}
export default ManyProblemOneSolution;
