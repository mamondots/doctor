import logo from '../../assets/img/doctors.png'
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { FiPhoneCall } from 'react-icons/fi';
import { BsCart2 } from 'react-icons/bs';
import { BsCalendar2Week } from 'react-icons/bs';
import { HiOutlineMenu} from 'react-icons/hi';
import { AiOutlineClose} from 'react-icons/ai';

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const navLink = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/',
        title: 'About us'
    },
    {
        path: '/',
        title: 'Services'
    },
    {
        path: '/',
        title: 'Our Doctors'
    },
    {
        path: '/',
        title: 'Blogs'
    },
    {
        path: '/',
        title: 'Contact'
    },
]

const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false)
    const [changeColor, setChangeColor] = useState()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 90) setChangeColor(true);
            else setChangeColor(false);
        })
    }, [])

    return (
        <div className="">
            <div className='flex items-center justify-between gap-4 xl:px-20 lg:px-12 md:px-12 sm:px-12 px-12 py-2 bg-[#FFFFFF] border-b'>
                <div className='flex items-center text-center'>
                    <div><img className='' src={logo} alt="" /></div>
                    <div>
                        <h2 className='text-xl font-extrabold text-[#081839]'>SYDUR RAHMAN</h2>
                        <p className='text-[#acabab]'>Lorem, ipsum dolor</p>
                    </div>
                </div>

                <div className='lg:flex items-center xl:space-x-8 lg:space-x-4 hidden'>

                    <div className='flex items-center space-x-3'>
                        <p className='text-3xl'><TfiHeadphoneAlt></TfiHeadphoneAlt></p>
                        <div>
                            <p className='text-sm text-[#666565]'>24 X 7 online support</p>
                            <h2 className='text-[#1BBDE4] font-bold text-base'>mamonrabin@gmail.com</h2>
                        </div>
                    </div>

                    <div className='flex items-center space-x-3'>
                        <p className='text-3xl'><FiPhoneCall></FiPhoneCall></p>
                        <div>
                            <p className='text-sm text-[#666565]'>Contact Us Free</p>
                            <h2 className='text-[#1BBDE4] font-bold text-base'>+8801646770324</h2>
                        </div>
                    </div>

                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <p className='px-3 py-3 bg-[#3B5998] text-white hover:bg-[#6894f4] duration-300'><FaFacebookF></FaFacebookF></p>
                        <p className='px-3 py-3 bg-[#55ACEE] text-white hover:bg-[#6198c1] duration-300'><FaInstagram></FaInstagram></p>
                        <p className='px-3 py-3 bg-[#007BB5] text-white hover:bg-[#6ec7f0] duration-300'><FaTwitter></FaTwitter></p>
                        <p className='px-3 py-3 bg-[#BB0000] text-white hover:bg-[#ea5454] duration-300'><FaLinkedinIn></FaLinkedinIn></p>
                    </div>

                </div>
                <div onClick={() => setIsOpen(true)} className='lg:hidden'>
                    <p className='px-2 py-2 text-2xl border border-[#1BBDE4] text-[#1BBDE4] hover:bg-[#1BBDE4] hover:text-white duration-300 cursor-pointer'><HiOutlineMenu /></p>
                </div>
            </div>

           <div className='fixed top-[125px] w-full z-50 duration-300'>
           <div className={`flex items-center justify-between gap-4 xl:px-[85px] lg:px-12 z-50 md:px-12 sm:px-12 px-12 duration-300 bg-[#F1F6F7]  ${changeColor ? "top-[-125px] absolute w-full duration-300" : ""}`}>
                <div className='lg:flex items-center justify-between w-full hidden relative'>

                    <div className='flex items-center xl:space-x-14 lg:space-x-8 text-[#202426] font-bold navbar'>
                        {
                            navLink.map((nav, index) => <li className='flex' key={nav.index}>
                                <Link>
                                    <div className='flex items-center space-x-1'>
                                        <p>{nav.title}</p>
                                        <p className='mt-1 text-[#1BBDE4]'>+</p>
                                    </div>
                                </Link>
                            </li>)
                        }
                    </div>

                    <div className='lg:flex items-center space-x-6 '>
                        <div className='flex items-center relative cursor-pointer'>
                            <p className='text-2xl'><BsCart2></BsCart2></p>
                            <p className=' text-[12px] px-[6px] bg-[#081839] text-white rounded-full inline-block absolute right-[-8px] top-[-6px]'>1</p>
                        </div>
                        <div className='h-full  bg-[#1BBDE4] px-4 py-4 inline-block hover:bg-[#081839] duration-200 cursor-pointer'>
                            <button className='flex items-center space-x-2 text-sm text-white '><span><BsCalendar2Week /></span><span>MAKE APPOINTMENT</span></button>
                        </div>
                    </div>

                </div>
            </div>
           </div>

            {/* for mobile device */}

            <div className={`lg:hidden fixed top-0 z-10 right-0 w-[60%] h-screen duration-500 bg-[#222222]  py-8 ${isOpen ? "right-0":"right-[100%]"}`}>
                 <div onClick={() => setIsOpen(false)} className='right-8 absolute px-2 py-2 text-white bg-[#1BBDE4] text-2xl cursor-pointer'><AiOutlineClose></AiOutlineClose></div> 

                 <div className='pt-20 space-y-3 '>
                    {
                        navLink.map((nav,index) =><li className='list-none border-b border-[#4544448f] py-2' key={nav.index}>
                                <Link>
                                    <div className='flex items-center justify-between text-white px-8 font-bold'>
                                        <p>{nav.title}</p>
                                        <p className='mt-1 text-[#1BBDE4]'>+</p>
                                    </div>
                                </Link>
                        </li>)
                    }
                 </div> 
            </div>
        </div>
    );
};

export default Navbar;