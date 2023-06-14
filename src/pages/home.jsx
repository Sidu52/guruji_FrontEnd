import React from "react";
import Header from "../component/header/header";
import TestimonialVideos from "../component/astrology/testimonial/testimonialVideos";
import Astrologers from "../component/astrologers/Astrologers";
import ManyProblemOneSolution from "../component/manyPOS/ManyProblemOneSolution";
import Review from "../component/review/Review";
import Footer from "../component/footer/footer";
import './home.css'
function Home() {
    return (
        <div>
            <Header />
            <TestimonialVideos />
            <Astrologers />
            <ManyProblemOneSolution />
            <Review />
            <Footer />
        </div>
    )
}

export default Home
