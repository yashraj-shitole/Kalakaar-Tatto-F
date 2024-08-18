import services from "../Data/services.json";



const Services = () => {

    
  return (
    <>
      <div className="shadow-inner h-fit lg:h-[100vh] flex flex-col items-center justify-evenly w-full p-10  text-white bg-center " id="services1" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1567071208639-716c1009517d?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`   }}>
        <h2 className="font-bold text-center text-3xl text-primary p-10">
          WHAT WE DO
        </h2>

        <div className="flex gap-5 justify-center flex-col lg:flex-row">
          {services.map((data) => (
            <>
              <div key={data.id} className="lg:w-[30%]  bg-black bg-opacity-85  rounded-xl p-5 items-center justify-center flex flex-col gap-2">
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
                    <h1 className="text-2xl text-primary font-bold">{data.title}</h1>
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
