import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Banner.css'
import { FaPlay } from 'react-icons/fa';
import { useState } from "react";
import Video from "../../../ulitis/Video/Video";

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [isVideo, setIsVideo] = useState(false)
    return (
        <div className="">
            <div className="banner-page">
                <Slider {...settings} className="">
                    <div className="slide-bg lg:px-20 md:px-16 sm:px-12 px-12 py-12">
                        <div className="relative py-20 z-10">
                            <h2 className="lg:text-6xl md:text-6xl sm:text-4xl text-3xl font-extrabold leading-none text-[#081839] head-text">Changing Health <br></br>Care for Good.</h2>
                            <p className="py-3 font-medium">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolore earum obcaecati<br></br> iure eum nam tenetur. Repellendus ut debitis sed.
                            </p>
                            <div className="flex items-center pt-6  gap-6 flex-wrap">
                                <button className="py-4 px-8 bg-[#1BBDE4] text-white head-text font-medium text-sm">Discover More</button>
                                <div className="flex items-center space-x-2">
                                    <button onClick={() => setIsVideo(true)} className="px-5 py-5 bg-[#fff] rounded-full text-[#1BBDE4] hover:bg-[#1BBDE4] hover:text-white duration-300"><span><FaPlay></FaPlay></span></button>
                                    <p className="head-text font-bold text-sm text-[#081839]">See Our Video</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="slide-bg2 lg:px-20 md:px-16 sm:px-12 px-12 py-12">
                        <div className="relative py-20 z-10">
                            <h2 className="lg:text-6xl md:text-6xl sm:text-4xl text-3xl font-extrabold leading-none text-[#081839] head-text">A Family of Hospital <br></br>for Your family</h2>
                            <p className="py-3 font-medium">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolore earum obcaecati<br></br> iure eum nam tenetur. Repellendus ut debitis sed.
                            </p>
                            <div className="flex items-center pt-6  gap-6 flex-wrap">
                                <button className="py-4 px-8 bg-[#1BBDE4] text-white head-text font-medium text-sm">Discover More</button>
                                <div className="flex items-center space-x-2">
                                    <button onClick={() => setIsVideo(true)} className="px-5 py-5 bg-[#fff] rounded-full text-[#1BBDE4] hover:bg-[#1BBDE4] hover:text-white duration-300"><span><FaPlay></FaPlay></span></button>
                                    <p className="head-text font-bold text-sm text-[#081839]">See Our Video</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>

            <div>
                {
                    isVideo ? <><Video setIsVideo={setIsVideo}></Video></> : <></>
                }
            </div>
        </div>
    );
};

export default Banner;