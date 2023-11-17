import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";

const Testiminal = () => {
    const [testimonals, setTestimonals] = useState([])
    useEffect(() => {
        fetch("testimonal.json")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTestimonals(data)
            })
    }, [])
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: false,
        slidesToShow: 3,
        slidesToScroll: 3,
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
        <div className="lg:px-20 md:px-16 sm:px-12 px-12 py-8">
            <div className="flex items-center justify-between">

                <div className="">
                    <p className="text-[#1BBDE4] font-bold head-text py-2">Testimonials</p>
                    <h2 className="text-2xl font-extrabold head-text">What people say about medical health care</h2>
                </div>

                <div className="flex items-center gap-4">
                    <div className='px-4 py-6 border-4 rounded-full border-[#1BBDE4]'>
                        <p className='text-2xl font-extrabold head-text'>84%</p>
                    </div>
                    <div>
                        <h2 className="head-text text-2xl font-bold text-[#1BBDE4]">Happy Patients</h2>
                        <p className="font-medium text-[#434343]">Best medical facilities and loving staff.</p>
                    </div>
                </div>

            </div>

            <div className="my-10">
                <Slider {...settings} className="">

                    {
                        testimonals.map((testimonal, index) => <div className="group cursor-pointer  px-2" key={testimonal.index}>
                            <div className="border px-6 py-6">
                                <p><Rating
                                    style={{ maxWidth: 80 }}
                                    value={testimonal.rating}
                                    readOnly
                                /></p>
                                <p>{testimonal.description}</p>
                                <div>
                                     <div><img src={testimonal.user.image} alt="" /></div>
                                     <div>
                                         <h2>{testimonal.user.name}</h2>
                                         <p>{testimonal.user.job}</p>
                                     </div>
                                </div>
                            </div>
                        </div>)
                    }

                </Slider>
            </div>
        </div>
    );
};

export default Testiminal;