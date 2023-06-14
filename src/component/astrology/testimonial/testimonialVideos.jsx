
import React, { useState } from 'react';
import testimonial from "../../../Images/carsouel";
import { BsCircleFill, BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
import { AiOutlineRightCircle, AiOutlineLeftCircle } from 'react-icons/ai'
import './testimonialVideos.css';

const videos = [
    {
        id: 0,
        video: 'https://player.vimeo.com/external/502527979.sd.mp4?s=7c0a54cbdda6e19ea63cf0fcc8d551f055f1258b&profile_id=165&oauth2_token_id=57447761',
        thumbnail: '1',
        active: 1
    },
    {
        id: 1,
        video: 'https://player.vimeo.com/progressive_redirect/playback/825265334/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=20a6dcbd97ea4cc70457ef1674006be7da68f297c122fe26d2018232eb60fe3f',
        thumbnail: '2',
        active: 2
    },
    {
        id: 2,
        video: 'https://player.vimeo.com/progressive_redirect/playback/752422879/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=03893fc0391b5c591df634d1966332a96dce3c949a7a491c8679208da6540639',
        thumbnail: '3',
        active: 3
    },
    {
        id: 3,
        video: 'https://player.vimeo.com/external/610751704.hd.mp4?s=4b3fc16fde4780ea1e126e5e963513335dbf19dc&profile_id=174&oauth2_token_id=57447761',
        thumbnail: '4',
        active: 4
    },
    {
        id: 4,
        video: 'https://player.vimeo.com/external/587457948.sd.mp4?s=20f203ac92e01cd2edf90b12ee55aa7f7b9b64cf&profile_id=165&oauth2_token_id=57447761',
        thumbnail: '5',
        active: 5
    }
];

const BgImg = {
    firstImg: testimonial.banner1,
    secondImg: testimonial.banner2,
    thirdImg: testimonial.banner3,
    fourthImg: testimonial.banner4,
    fifthImg: testimonial.banner5,
    sixthImg: testimonial.banner6,

}


function TestimonialVideos() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState();
    const [data, setData] = useState(videos);
    const [backgroundImage, setBackgroundImage] = useState(BgImg.firstImg);

    console.log(data)
    const handlePrevVideo = (e) => {
        e.preventDefault();
        let newArr = [...data]
        let temp = newArr[0];
        newArr[0] = newArr[videos.length - 1];
        for (let i = 2; i < 6; i++) {
            if (i === 5) {
                newArr[i - 1] = temp;
            }
            else {
                newArr[i - 1] = newArr[videos.length - i];
            }
        }
        setActiveIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
        setData([...newArr]);
        setIsPlaying(false);
    };

    //Handle Image Sliding
    const handleCircleClick = (image, circleNumber) => {
        setBackgroundImage(image);
        setActiveIndex(circleNumber);
    };


    const handleNextVideo = (e) => {
        e.preventDefault();
        let newArr = [...data]
        let temp = newArr[0];
        newArr[0] = newArr[1];
        for (let i = 2; i < 6; i++) {
            if (i === 5) {
                newArr[i - 1] = temp;
            }
            else {
                newArr[i - 1] = newArr[i];
            }

        }
        setActiveIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
        setData([...newArr]);
        setIsPlaying(false);
    };

    const handlePlayPause = () => {
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
        const currentVideo = document.getElementById(`video-${activeIndex}`);
        if (currentVideo) {
            if (isPlaying) {
                currentVideo.pause();
            } else {
                currentVideo.play();
            }
        }
    };

    return (
        <div className='mainContainer'>
            <div className="container">
                <div className="head">
                    <img src={testimonial.sun} alt="Sun" className='sunImage' />
                    <div className="heading">
                        <img src={testimonial.star} alt="Star" />
                        <span>User Testimonial</span>
                        <img src={testimonial.star} alt="Star" />
                    </div>
                </div>
                <div className="videoContainer">
                    <div className="videoSlider">

                        {data.map((video, index) => (
                            <div className={`videoSlide videoSlide${index}`} key={video.id}>
                                <div style={{ width: "100%", height: "100%" }}>
                                    <video id={`video-${video.id}`} src={video.video} muted />
                                    {isPlaying ? (
                                        <button className="customButton" onClick={handlePlayPause}>
                                            <BsPauseCircle />
                                        </button>
                                    ) : (
                                        <button className="customButton" onClick={handlePlayPause}>
                                            <BsPlayCircle />

                                        </button>
                                    )}
                                </div>

                            </div>
                        ))}

                    </div>
                    <div className="arrow">
                        <AiOutlineLeftCircle onClick={(e) => handlePrevVideo(e)} />
                        <AiOutlineRightCircle onClick={(e) => handleNextVideo(e)} />
                    </div>
                </div>
                <div className="imageTemplate">
                    <img src={backgroundImage} alt="Banner" />
                </div>
                <div className="circlesContainer">
                    {Object.values(BgImg).map((image, index) => (
                        <BsCircleFill
                            key={index}
                            className={index === activeIndex ? 'active' : ''}
                            onClick={() => handleCircleClick(image, index)}
                        />
                    ))}
                </div>
            </div>
        </div >
    );
}

export default TestimonialVideos;
