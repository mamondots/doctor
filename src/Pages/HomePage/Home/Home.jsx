import Banner from "../Banner/Banner";
import FrontAbout from "../FrontAbout/FrontAbout";
import FrontBook from "../FrontBook/FrontBook";
import Gallary from "../Gallary/Gallary";
import Serveces from "../Serveces/Serveces";
import Testiminal from "../Testiminal/Testiminal";
import WhatDo from "../WhatDo/WhatDo";


const Home = () => {
    return (
        <div className="overflow-hidden">
            <Banner></Banner>
            <FrontBook></FrontBook>
            <FrontAbout></FrontAbout>
            <Serveces></Serveces>
            <WhatDo></WhatDo>
            <Gallary></Gallary>
            <Testiminal></Testiminal>
        </div>
    );
};

export default Home;