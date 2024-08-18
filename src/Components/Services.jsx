import services from "../Data/services.json";
import herobg from "/assets/hero/bg.jpg";

const Services = () => {
  return (
    <>
      <div
        className="shadow-inner h-fit lg:h-[100vh] flex flex-col items-center justify-evenly w-full p-10  text-white bg-center  bg-fixed"
        id="services1"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <h2 className="max-w-xl text-primary text-4xl font-bold tracking-tight  sm:text-5xl">
          WHAT WE DO
        </h2>

        <div className="flex gap-5 justify-center flex-col lg:flex-row">
          {services.map((data) => (
            <>
              <div
                key={data.id}
                className="lg:w-[30%]  bg-black bg-opacity-85 hover:bg-gray-900 hover:bg-opacity-100  rounded-xl p-5 items-center justify-center flex flex-col gap-2"
              >
                <div className="">
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  />
                </div>

                <div className="card-body text-center">
                  <h1 className="text-2xl text-primary font-bold">
                    {data.title}
                  </h1>
                  <p className="card-text">{data.description}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
