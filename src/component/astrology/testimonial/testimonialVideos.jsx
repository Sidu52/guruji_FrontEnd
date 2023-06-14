// import React, { useEffect, useState } from 'react';
// import testimonial from "../../../Images/carsouel";
// import { BsCircleFill, BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
// import { AiOutlineRightCircle, AiOutlineLeftCircle } from 'react-icons/ai'
// import './testimonialVideos.css';

// const videos = [
//     {
//         id: 0,
//         video: 'https://player.vimeo.com/external/502527979.sd.mp4?s=7c0a54cbdda6e19ea63cf0fcc8d551f055f1258b&profile_id=165&oauth2_token_id=57447761',
//         thumbnail: 'https://images.unsplash.com/photo-1560011316-90b2677df5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGltZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
//         active: true
//     },
//     {
//         id: 1,
//         video: 'https://player.vimeo.com/external/502527979.sd.mp4?s=7c0a54cbdda6e19ea63cf0fcc8d551f055f1258b&profile_id=165&oauth2_token_id=57447761',
//         thumbnail: 'https://images.unsplash.com/photo-1560011316-90b2677df5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGltZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
//         active: false
//     },
//     {
//         id: 2,
//         video: 'https://player.vimeo.com/external/502527979.sd.mp4?s=7c0a54cbdda6e19ea63cf0fcc8d551f055f1258b&profile_id=165&oauth2_token_id=57447761',
//         thumbnail: 'https://images.unsplash.com/photo-1560011316-90b2677df5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGltZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
//         active: false
//     },
//     {
//         id: 3,
//         video: 'https://player.vimeo.com/external/502527979.sd.mp4?s=7c0a54cbdda6e19ea63cf0fcc8d551f055f1258b&profile_id=165&oauth2_token_id=57447761',
//         thumbnail: 'https://images.unsplash.com/photo-1560011316-90b2677df5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGltZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
//         active: false
//     },
//     {
//         id: 4,
//         video: 'https://player.vimeo.com/external/502527979.sd.mp4?s=7c0a54cbdda6e19ea63cf0fcc8d551f055f1258b&profile_id=165&oauth2_token_id=57447761',
//         thumbnail: 'https://images.unsplash.com/photo-1560011316-90b2677df5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGltZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
//         active: false
//     }
// ];

// function TestimonialVideos() {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [isPlaying, setIsPlaying] = useState();
//     const [i, setI] = useState(0);
//     const [data, setData] = useState(videos)

//     const handlePrevVideo = () => {
//         setActiveIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
//         setIsPlaying(false);
//         setI((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
//         console.log("Ssssssss", i)
//     };

//     const handleNextVideo = () => {
//         setActiveIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
//         setIsPlaying(false);
//         setI((prevIndex) => (videos.length - 1 ? 0 : prevIndex + 1));
//         console.log("Ssssssss", i)
//     };

//     const handlePlayPause = () => {
//         setIsPlaying((prevIsPlaying) => !prevIsPlaying);
//         const currentVideo = document.getElementById(`video-${activeIndex}`);
//         if (currentVideo) {
//             if (isPlaying) {
//                 currentVideo.pause();
//             } else {
//                 currentVideo.play();
//             }
//         }
//     };

//     return (
//         <div className='mainContainer'>
//             <div className="container">
//                 <div className="head">
//                     <img src={testimonial.sun} alt="Sun" className='sunImage' />
//                     <div className="heading">
//                         <img src={testimonial.star} alt="Star" />
//                         <span>User Testimonial</span>
//                         <img src={testimonial.star} alt="Star" />
//                     </div>
//                 </div>
//                 <div className="videoContainer">
//                     <div className="videoSlider">
//                         {/* Videos show here as a sliding carousel */}
//                         {console.log("gee", i)}
//                         {videos.map((video, index) => (
//                             console.log(video.id, "==", i),
//                             // give i=0 and i++ increased when i !=length i=length i=0 reaagain start always start fron curent vieo\

//                             <div className={`videoSlide videoSlide${index}`} key={video.id}>

//                                 {index === activeIndex ? (
//                                     <div style={{ width: "100%", height: "100%" }}>
//                                         <video id={`video-${index}`} src={video.video} muted />
//                                         {isPlaying ? (
//                                             <button className="customButton" onClick={handlePlayPause}>
//                                                 <BsPauseCircle />
//                                             </button>
//                                         ) : (
//                                             <button className="customButton" onClick={handlePlayPause}>
//                                                 <BsPlayCircle />

//                                             </button>
//                                         )}
//                                     </div>
//                                 ) : (
//                                     <img src={video.thumbnail} alt="Video Thumbnail" />
//                                 )}
//                             </div>
//                         ))}

//                     </div>
//                     <div className="arrow">
//                         <AiOutlineLeftCircle onClick={handlePrevVideo} />
//                         <AiOutlineRightCircle onClick={handleNextVideo} />
//                     </div>
//                 </div>
//                 <div className="imageTemplate">
//                     <img src={testimonial.banner} alt="Banner" />
//                 </div>
//                 <div className="circlesContainer">
//                     {/* Render circles for each video */}
//                     {videos.map((video, index) => (
//                         <BsCircleFill key={video.id} className={index === activeIndex ? 'active' : ''} />
//                     ))}
//                 </div>
//             </div>
//         </div >
//     );
// }

// export default TestimonialVideos;


import React, { useEffect, useState } from 'react';
import testimonial from "../../../Images/carsouel";
import { BsCircleFill, BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
import { AiOutlineRightCircle, AiOutlineLeftCircle } from 'react-icons/ai'
import './testimonialVideos.css';

const videos = [
    {
        id: 0,
        video: 'https://player.vimeo.com/external/502527979.sd.mp4?s=7c0a54cbdda6e19ea63cf0fcc8d551f055f1258b&profile_id=165&oauth2_token_id=57447761',
        thumbnail: 'https://images.unsplash.com/photo-1560011316-90b2677df5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGltZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        active: true
    },
    {
        id: 1,
        video: 'https://player.vimeo.com/progressive_redirect/playback/825265334/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=20a6dcbd97ea4cc70457ef1674006be7da68f297c122fe26d2018232eb60fe3f',
        thumbnail: 'https://images.unsplash.com/photo-1551021794-03be4ddaf67d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        active: false
    },
    {
        id: 2,
        video: 'https://player.vimeo.com/progressive_redirect/playback/752422879/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=03893fc0391b5c591df634d1966332a96dce3c949a7a491c8679208da6540639',
        thumbnail: 'https://images.unsplash.com/photo-1536748212969-6f77feeff225?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
        active: false
    },
    {
        id: 3,
        video: 'https://player.vimeo.com/external/610751704.hd.mp4?s=4b3fc16fde4780ea1e126e5e963513335dbf19dc&profile_id=174&oauth2_token_id=57447761',
        thumbnail: 'https://images.unsplash.com/photo-1623504248122-747b98df5f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        active: false
    },
    {
        id: 4,
        video: 'https://player.vimeo.com/external/587457948.sd.mp4?s=20f203ac92e01cd2edf90b12ee55aa7f7b9b64cf&profile_id=165&oauth2_token_id=57447761',
        thumbnail: 'https://images.unsplash.com/photo-1579865346865-9223701ba92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        active: false
    }
];


function TestimonialVideos() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState();
    const [i, setI] = useState(0);
    const [data, setData] = useState(videos)

    console.log(data)
    const handlePrevVideo = (e, index) => {

        e.preventDefault();

        console.log("ss", index)
        if (index == 0) {
            index = videos.length - 1;
            return;
        }
        let newArr = [...data]
        let temp = newArr[index];

        newArr[index] = newArr[index - 1];
        newArr[index - 1] = temp;
        setData([...newArr]);
        setActiveIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
        setIsPlaying(false);
        setI((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
        // console.log("Ssssssss", i)
    };

    const handleNextVideo = (e, index) => {
        e.preventDefault();
        console.log("ss", index)
        if (index == videos.length - 1) {
            return;
        }
        let newArr = [...data]
        for (let i = 0; i < array.length - 1; i++) {
            return;

        }
        // let temp = newArr[index];
        // let a=newArr
        // newArr[index] = newArr[index + 1];

        // newArr[index + 1] = temp;

        setData([...newArr]);
        setActiveIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
        setIsPlaying(false);
        setI((prevIndex) => (videos.length - 1 ? 0 : prevIndex + 1));
        // console.log("Ssssssss", i)
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
                        {/* Videos show here as a sliding carousel */}
                        {console.log("gee", i)}
                        {data.map((video, index) => (
                            console.log(video.id, "==", index),
                            // give i=0 and i++ increased when i !=length i=length i=0 reaagain start always start fron curent vieo\
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
                        <AiOutlineLeftCircle onClick={(e) => handlePrevVideo(e, activeIndex)} />
                        <AiOutlineRightCircle onClick={(e) => handleNextVideo(e, activeIndex)} />
                    </div>
                </div>
                <div className="imageTemplate">
                    <img src={testimonial.banner} alt="Banner" />
                </div>
                <div className="circlesContainer">
                    {/* Render circles for each video */}
                    {videos.map((video, index) => (
                        <BsCircleFill key={video.id} className={index === activeIndex ? 'active' : ''} />
                    ))}
                </div>
            </div>
        </div >
    );
}

export default TestimonialVideos;
