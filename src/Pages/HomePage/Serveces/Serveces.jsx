import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { useEffect } from "react";
import './Services.css'

const Serveces = () => {

    const [services,setServices] = useState([])
    useEffect(() =>{
        fetch("services.json")
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            setServices(data)
        })
    },[])
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: false,
        slidesToShow: 4,
        slidesToScroll: 2,
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
        <div className="lg:px-20 md:px-16 sm:px-12 px-12 py-16">
            <div className="text-center">
                <p className="head-text  font-bold text-[#1BBDE4] py-2">Choose your services</p>
                <h2 className="head-text text-4xl text-[#081839] font-extrabold">Department of medical health care</h2>
            </div>

            <div className="my-8 services-page">
                <Slider {...settings} className="">
                    
                    {
                        services.map((service,index) =><div className="group cursor-pointer" key={service.index}>
                                <div className="border border-[#eeeded] flex items-center justify-center flex-col px-6 py-6 text-center group-hover:bg-[#1BBDE4] duration-300">
                                     <div className="px-6"><img className=" rounded-full" src={service.images.img1} alt="" /></div>
                                     <div>
                                         <h2 className="text-xl font-bold py-4 head-text group-hover:text-white duration-300">{service.name}</h2>
                                         <p className="text-[#4a4a4a] group-hover:text-[#efeded] duration-300">{service.description.slice(0,125)} <span className="text-[red] text-sm">[read more]</span></p>
                                     </div>
                                </div>
                        </div>)
                    }

                </Slider>
            </div>
        </div>
    );
};

export default Serveces;