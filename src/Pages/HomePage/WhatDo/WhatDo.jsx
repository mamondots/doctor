import img from '../../../assets/img/whatdo.jpg'
import { FaCheck } from 'react-icons/fa';

const WhatDo = () => {
    return (
        <div className="py-12">
            <div className="grid lg:grid-cols-2 lg:gap-0 gap-6">

                <div className='w-full'>
                    <img className='w-full' src={img} alt="" />
                </div>

                <div className='bg-[#081839] lg:px-16 md:px-16 sm:px-12 px-12 py-20 text-white'>
                    <div>
                        <p className='text-[#1BBDE4] font-bold head-text py-4'>What we do</p>
                        <h2 className='head-text text-4xl font-bold'>A great place for medico hospital center & health care</h2>
                        <p className='py-2 text-[#ebebeb]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                        <div className='flex items-center lg:space-x-8 md:space-x-8 sm:space-x-8 flex-wrap lg:gap-0 gap-4 mt-6'>

                            <div className='space-y-2'>
                                <p className='flex items-center text-[#1BBDE4] font-bold'><FaCheck></FaCheck><span className='px-2 text-white'>Standards of Treatment</span></p>
                                <p className='flex items-center text-[#1BBDE4] font-bold'><FaCheck></FaCheck><span className='px-2 text-white'>Quality of Care Services</span></p>
                                <p className='flex items-center text-[#1BBDE4] font-bold'><FaCheck></FaCheck><span className='px-2 text-white'>Well Communication</span></p>
                            </div>

                            <div className='space-y-2'>
                                <p className='flex items-center text-[#1BBDE4] font-bold'><FaCheck></FaCheck><span className='px-2 text-white'>Infection Prevention</span></p>
                                <p className='flex items-center text-[#1BBDE4] font-bold'><FaCheck></FaCheck><span className='px-2 text-white'>Patient Experience</span></p>
                                <p className='flex items-center text-[#1BBDE4] font-bold'><FaCheck></FaCheck><span className='px-2 text-white'>Quality of Care Services</span></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhatDo;