import React from 'react'
import Footer from '../components/Footer';

const ParallaxSection1 = ({image, title, text, imageStyle}) => {
  return (
    <div className="relative flex items-center justify-center text-[#FAF9F6] bg-[#E63946] py-20 mt-1">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-stretch">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <img className={`w-full h-auto object-cover rounded-lg ${imageStyle}`} src={image} alt="Parallax Image" />
        </div>

        <div className="lg:w-1/2 lg:ml-16 text-center lg:text-left mt-10">
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className="text-lg mb-4 mt-4">{text}</p>
        </div>
      </div>
    </div>
  );
};

const ParallaxSection2 = ({image, title, text, imageStyle}) => {
  return (
    <div className="relative flex items-center justify-center bg-[#FAF9F6] text-[#E63946] py-20 mt-1">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-stretch">
        <div className="lg:w-1/2 lg:ml-16 text-center lg:text-left mt-10">
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className="text-lg mb-4 mt-4">{text}</p>
        </div>
        
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <img className={`w-full h-auto object-cover rounded-lg ${imageStyle}`} src={image} alt="Parallax Image" />
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <ParallaxSection1
        image="/images/about-pic.jpg"
        title="About Formula One"
        text= "Formula One, often abbreviated as F1, stands as the pinnacle of motorsport, captivating enthusiasts worldwide with its unique blend of speed, technology, and skill. This premier racing series showcases cutting-edge, aerodynamically advanced cars maneuvering through iconic tracks across the globe. Beyond the exhilarating races, Formula One is a captivating fusion of engineering brilliance and sporting prowess, where elite teams and drivers compete for victory, pushing the boundaries of automotive innovation. The sport's rich history, glamorous events, and dedicated fanbase make Formula One a dynamic and globally celebrated spectacle, embodying the relentless pursuit of excellence on and off the racetrack."
        imageStyle="pl-24 custom-sm-pl-0 " 
      />
      <ParallaxSection2
        image="/images/image2.jpg"
        title="About Formula One"
        text="Sed auctor elit at arcu varius, ac tincidunt metus dignissim. Quisque vel libero eu dolor gravida eleifend."
      />
      <ParallaxSection1
        image="/images/image3.jpg"
        title="About Formula One"
        text="Vivamus dapibus, odio eu posuere scelerisque, purus leo consequat dolor, et feugiat ligula nunc vel ex."
      />
      <ParallaxSection2
        image="/images/image4.jpg"
        title="About Formula One"
        text="Fusce auctor eu metus eu convallis. Vestibulum vel erat euismod, tincidunt arcu vitae, scelerisque turpis."
      />
      <div className='mt-1'>
        <Footer />
      </div>
    </div>
  );
};

export default About