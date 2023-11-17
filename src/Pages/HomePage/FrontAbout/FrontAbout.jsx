import about from '../../../assets/img/aboutdown.png'
import about2 from '../../../assets/img/m2.png'

const FrontAbout = () => {
    return (
        <div className="lg:px-20 md:px-16 sm:px-12 px-12 py-14 bg-[#EBEEF3]">
            <div className="w-full flex">

                <div className="lg:w-3/4">
                        <div>
                             <p className="text-[#1BBDE4] font-semibold head-text py-2">Introduction</p>
                             <h2 className="text-4xl font-extrabold head-text">A great place of medical hospital <br></br>center & health care</h2>
                             <p className="text-lg font-semibold py-4">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis exercitation laboris nisi ut aliquip.</p>

                             <p className="text-[#666666]">
                             Quis ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna ipsum ultrices gravida risus commodo viverra mae cenas accumsan lacus vel. facilisis uspendissei dolor.
                             </p>
                        </div>

                        <div className='py-4 mt-2 flex items-center space-x-4'>
                             <div><img src={about2} alt="" /></div>
                             <div className='head-text'>
                                <h2 className='text-lg font-bold head-text'>Richard Muldoone</h2>
                                <p className='text-[#1BBDE4] font-bold head-text text-sm'>CEO & FOUNDER</p>
                             </div>
                        </div>
                </div>

                <div className="lg:w-2/4 lg:px-16 space-y-8">
                    <div className='flex items-center space-x-4 px-4'>
                         <div className='px-4 py-6 border-4 rounded-full border-[#1BBDE4]'>
                            <h2 className='text-2xl font-extrabold head-text'>67%</h2>
                         </div>
                         <div>
                             <h2 className='text-xl font-bold py-2'>Qualified Doctors</h2>
                             <p className='text-[#262626d5]'>Lorem ipsum dolor sit amet consectetur</p>
                         </div>
                    </div>

                    <div className='flex items-center space-x-4 bg-[#fff] py-4 px-4'>
                         <div className='px-4 py-6 border-4 rounded-full border-[#1BBDE4]'>
                            <h2 className='text-2xl font-extrabold head-text'>84%</h2>
                         </div>
                         <div>
                             <h2 className='text-xl font-bold py-2'>Allergy Medicine</h2>
                             <p className='text-[#262626d5]'>Lorem ipsum dolor sit amet consectetur</p>
                         </div>
                    </div>


                    <div className='flex items-center space-x-4  py-4 px-4'>
                         <div className='px-4 py-6 border-4 rounded-full border-[#1BBDE4]'>
                            <h2 className='text-2xl font-extrabold head-text'>78%</h2>
                         </div>
                         <div>
                             <h2 className='text-xl font-bold py-2'>Emergency Services</h2>
                             <p className='text-[#262626d5]'>Lorem ipsum dolor sit amet consectetur</p>
                         </div>
                    </div>

                </div>

            </div>

            <div className='mt-0 w-full relative'>
                 <img className='w-full' src={about} alt="" />
            </div>
        </div>
    );
};

export default FrontAbout;