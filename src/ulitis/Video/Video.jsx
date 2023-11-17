import video from '../../assets/img/bannerVideo.mp4'
import './Video.css'
import { MdClose } from 'react-icons/md';
const Video = ({setIsVideo}) => {
    return (
        <div className="fixed w-full z-50 h-screen bg-[#000000b8] left-0 top-0">
            <div className='video-clip relative'>
                 <video src={video} autoPlay loop muted controls type='video'></video>
                 <p onClick={() =>setIsVideo(false)} className='px-3 py-3 absolute top-[-20px] right-[-20px] bg-[#1BBDE4] text-white inline-block text-xl rounded-full cursor-pointer hover:bg-[red] duration-300 '><MdClose></MdClose></p>
            </div>
        </div>
    );
};

export default Video;