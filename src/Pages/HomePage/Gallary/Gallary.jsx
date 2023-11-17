import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Gallary.css'
import { useState } from "react";
import { useEffect } from "react";
import { GiHospitalCross } from 'react-icons/gi';

const Gallary = () => {

    const [gallerys, setGallerys] = useState([])
    useEffect(() => {
        fetch('gallary.json')
            .then(res => res.json())
            .then(data => {
                setGallerys(data)
            })
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade:false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className="lg:px-20 md:px-16 sm:px-12 px-12 py-12">
                <p className="text-[#1BBDE4] head-text font-bold py-1">Meet Our Team</p>
                <h2 className="text-3xl font-extrabold head-text">Look at gallery for details</h2>
            </div>

            <div className="">

                <Slider {...settings} className="">
                    {
                        gallerys.map((gallery, index) => <div className="gallary-box" key={gallery.index}>
                            <div className="w-full">
                                  <img className="w-full" src={gallery.image} alt="" />
                                  <div className="bottom-12 left-12 absolute text-white info-gallary">
                                    <div className="text-2xl">
                                         <p>+</p>
                                    </div>
                                        <p className="text-sm">{gallery.subTitle}</p>
                                        <h2 className="font-bold text-xl head-text">{gallery.title}</h2>
                                  </div>
                            </div>
                        </div>)
                    }
                </Slider>

            </div>

            <div className="lg:px-20 md:px-16 sm:px-12 px-12 py-12 bg-[#081839]">
                 <div className="flex items-center flex-wrap lg:gap-0 gap-4 justify-between">

                     
                        <div className="flex items-center flex-wrap gap-6">
                            <p className="text-[#1BBDE4] text-6xl"><GiHospitalCross></GiHospitalCross></p>
                            <p className="lg:text-xl md:text-xl text-lg font-extrabold head-text text-white">
                            Looking for professinal & trusted medical healthcare?<br></br> <span className="text-[#1BBDE4]">dont hasitate to contact us.</span>
                            </p>
                        </div>
                      

                      <div>
                        <button className="px-6 py-3 text-sm head-text bg-[#1BBDE4] text-white hover:text-[#262626] hover:bg-white duration-300">Make Appoinment</button>
                      </div>
                 </div>
            </div>
        </div>
    );
};

export default Gallary;
