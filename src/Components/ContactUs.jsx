
const ContactUs = () => {
  return (
    <div
      id="contactus"
      className="h-fit lg:h-fit flex flex-col gap-20 items-center justify-evenly  w-full p-10 bg-black text-primary"
    >
      <h2 className="max-w-xl text-primary text-4xl font-bold tracking-tight  sm:text-5xl">
        Contact US
      </h2>

      <div className="flex lg:flex-row flex-col-reverse  items-center justify-evenly gap-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1880.807345597154!2d72.80372917516104!3d19.472172519085273!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7abfffc595c8f%3A0x92fd71077a2b12c3!2sEvershine%20Amavi!5e0!3m2!1sen!2sin!4v1724012697346!5m2!1sen!2sin"
          width="fit"
          height="300"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <form
          className="w-[100%] lg:w-[60%]"
          action="https://formspree.io/f/mkgwwawz"
          method="POST"
        >
          <div className="mb-4">
            <div className="relative w-full min-w-[200px] h-11 ">
              <input
                type="text"
                name="name"
                className="peer w-full h-full bg-transparent text-primary font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-primary disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-primary placeholder-shown:border-t-primary border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-primary focus:border-primary"
                placeholder=" "
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-primary0 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-primary0 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[&#x27; &#x27;] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[&#x27; &#x27;] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-primary before:border-primary peer-focus:before:!border-primary after:border-primary peer-focus:after:!border-primary">
                Enter your name{" "}
              </label>
            </div>
          </div>
          <div className="mb-4">
            <div className="relative w-full min-w-[200px] h-11">
              <input
                type="email"
                name="Email"
                className="peer w-full h-full bg-transparent text-primary font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-primary disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-primary placeholder-shown:border-t-primary border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-primary focus:border-primary"
                placeholder=" "
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-primary0 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-primary0 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[&#x27; &#x27;] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[&#x27; &#x27;] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-primary before:border-primary peer-focus:before:!border-primary after:border-primary peer-focus:after:!border-primary">
                Enter your email{" "}
              </label>
            </div>
          </div>
          <div className="mb-4">
            <div className="relative w-full min-w-[200px] h-11 ">
              <input
                type="tel"
                name="Phone Number"
                className="peer w-full h-full bg-transparent text-primary font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-primary disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-primary placeholder-shown:border-t-primary border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-primary focus:border-primary"
                placeholder=" "
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-primary0 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-primary0 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[&#x27; &#x27;] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[&#x27; &#x27;] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-primary before:border-primary peer-focus:before:!border-primary after:border-primary peer-focus:after:!border-primary">
                Enter your phone number{" "}
              </label>
            </div>
          </div>
          <div className="mb-4">
            <div className="relative w-full min-w-[200px] h-11 ">
              <input
                type="textarea"
                name="Message"
                className="peer w-full h-full bg-transparent text-primary font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-primary disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-primary placeholder-shown:border-t-primary border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-primary focus:border-primary"
                placeholder=" "
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-primary0 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-primary0 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[&#x27; &#x27;] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[&#x27; &#x27;] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-primary before:border-primary peer-focus:before:!border-primary after:border-primary peer-focus:after:!border-primary">
                Enter your message{" "}
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-primary text-white shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full mt-6"
          >
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
