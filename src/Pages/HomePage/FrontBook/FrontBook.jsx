
import './FrontBook.css'
import { PiHeadsetFill } from 'react-icons/pi';
const FrontBook = () => {
    return (
        <div className="lg:px-20 md:px-16 sm:px-12 px-12 py-16 bg-[#EBEEF3]">
            <div className="flex flex-wrap lg:flex-nowrap gap-8">

                <div className="lg:w-1/3 border">
                    <div className='box-img'>
                        <div className='z-10 relative py-10 px-6'>
                            <div className='flex items-center space-x-2'>
                                <p className='text-6xl text-[#1BBDE4]'><PiHeadsetFill></PiHeadsetFill></p>
                                <div>
                                    <p className='text-white text-lg'>Emergency Cases</p>
                                    <p className='text-[#1BBDE4] text-xl font-semibold head-text pt-1'>+8801746770324</p>
                                </div>
                            </div>

                            <div className='py-6 text-white mt-6'>
                                    <p className='pb-6 text-[#cfcfcf]'>Sed do eiusmod tempor minim ur incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud.</p>
                                    <button className='py-3 mt-6 text-center w-full border border-[#1BBDE4] text-white head-text text-sm font-semibold hover:bg-[#1BBDE4] duration-300'>Contact us</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="lg:w-3/4 bg-[#FFFFFF] px-8 py-10">
                        <h2 className='text-2xl font-bold text-[#1BBDE4] head-text'>Book Appoinment Toady!</h2>

                        <div className='py-6 gap-6 space-y-6'>
                            <div className='w-full flex items-center gap-6'>
                                <div className='w-full'>
                                    <select className='w-full border py-3 px-2 text-[#8a8989]'>
                                        <option value="">Select Problem</option>
                                        <option value="">Plastic Surgery</option>
                                        <option value="">Hematology</option>
                                        <option value="">Neurology</option>
                                        <option value="">Gastrologic</option>
                                        <option value="">Orthopedic</option>
                                        <option value="">Pharmacology</option>
                                        <option value="">Dermatology</option>
                                        <option value="">Cardiology</option>
                                        <option value="">Pulmonology</option>
                                    </select>
                                </div>

                                <div className='w-full'>
                                <select className='w-full border py-3 px-2 text-[#8a8989]'>
                                        <option value="">Select Doctor</option>
                                        <option value="">Dr.Hossain</option>
                                        <option value="">Dr.Rahul</option>
                                        <option value="">Dr.Rimon</option>
                                        <option value="">Dr.Khurul</option>
                                        <option value="">Dr.Riaz</option>
                                        <option value="">Dr.Robul</option>
                                        <option value="">Dr.Sakib</option>
                                        <option value="">Dr.Noyon</option>
                                        <option value="">Dr.Polas</option>
                                    </select>
                                </div>

                                <div className='flex items-center w-full gap-2'>
                                <div className='w-full'>
                                    <input className='w-full border py-3 px-2' type="text" name="" id="" placeholder='Select Date' />
                                </div>

                                <div className='w-full'>
                                    <input className='w-full border py-3 px-2' type="text" name="" id="" placeholder='Select Time' />
                                </div>
                                </div>

                            </div>

                            <div className='w-full flex items-center gap-6'>
                                <input className='w-full border py-3 px-2 text-[#8a8989]' type="text" placeholder='Enter Name' />
                                <input className='w-full border py-3 px-2 text-[#8a8989]' type="text" placeholder='Enter Phone' />
                                <input className='w-full border py-3 px-2 text-[#8a8989]' type="email" placeholder='Enter Email' />
                            </div>
                            
                            <div>
                                 <button className='px-11 py-4 bg-[#1BBDE4] text-white font-medium head-text text-sm'>MAKE APPOINTMENT</button>
                            </div>
                        </div>
                </div>

            </div>
        </div>
    );
};

export default FrontBook;