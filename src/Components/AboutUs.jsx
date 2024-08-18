/* eslint-disable react/no-unescaped-entities */
import about from "../Data/about.json";

const AboutUs = () => {
  return (
    <div id="gallery" className="h-fit lg:h-[100vh] flex flex-col items-center justify-evenly  w-full p-10 bg-black text-white">
      <h1 className="font-bold text-center text-3xl text-primary p-10">About US</h1>

      <div className="flex flex-col lg:px-20 lg:flex-row gap-5">
        <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
          <img src={`/assets/${about.imgSrc}`} alt="hero" />
        </div>

        <div className="" id="about us">
          <div className="about">
            <p className="P1">
              GoogleWelcome to Kalakaar Tattoo, where art is more than just a
              passion—it's a way of life. Located in the vibrant city of
              Bombay,our studio is a haven for tattoo enthusiasts and
              first-timers alike. We pride ourselves on delivering top-notch
              tattooing and body art services that blend creativity, precision,
              and professionalism.
            </p>
            <h2 className="font-bold  text-xl text-primary p-2">Our Story</h2>
            <p className="P1">
              Kalakaar Tattoo was born out of a love for the art of tattooing
              and a desire to create a space where individuals can express
              themselves through unique, custom designs. Over the years, we have
              built a reputation as one of Bombay’s premier tattoo studios,
              known for our exceptional artistry, commitment to quality, and
              dedication to customer satisfaction.
            </p>
            <h2 className="font-bold  text-xl text-primary p-2">Our Mission</h2>
            <p className="P1">
              Our Mission Our mission is simple: to transform your ideas and
              emotions into stunning works of art. We believe that every tattoo
              tells a story, and we are here to help you share yours. Whether
              you're looking for a small, meaningful piece or a large, intricate
              design, our team of skilled artists is ready to bring your vision
              to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
