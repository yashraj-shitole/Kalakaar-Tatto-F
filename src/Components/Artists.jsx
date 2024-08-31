import AImg from '/assets/artistimg.jpg'


const Artists = () => {
  return (
    <div className="bg-black py-4 z-0 ">
      <div className="p-5">
        <div className="mx-auto w-full flex flex-col items-center justify-center lg:mx-0">
        <h2 className="max-w-xl text-primary text-4xl font-bold tracking-tight  sm:text-5xl"> MEET OUR ARTISTS</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Our Artists Are Highly Experienced, Best Reviewed and Creative</p>
        </div>
        <ul
          role="list"
          className="flex  lg:flex-row flex-col items-center justify-center gap-10"
        >
            <li>
              <ul role="list" className="mt-3 flex gap-x-3">
                <div className="m-2 space-y-2">
                  <div
                    className="group flex flex-col gap-1 rounded-lg p-5 text-gray"
                    tabIndex="1"
                  >
                    <div  className="group relative m-0 flex w-full rounded-xl ring-primary sm:mx-auto sm:max-w-lg">
                      <div className="z-0 h-96 w-full overflow-hidden rounded-xl border border-primary opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-primary dark:opacity-70">
                        <img
                          src={AImg}
                          className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                          alt=""
                        />
                      </div>
                      <div
                        className=" bg-primary p-3 rounded-xl opacity-60 absolute bottom-0 z-0 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100"
                      >
                        <h1 className="text-lg font-bold text-white">Khushal Waghela</h1>
                        <h2 className="text-m font-light text-gray-200">Owner & Artist</h2>
                      </div>
                    </div>
                    
                    <div className="invisible h-auto max-h-0 p-5 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                      <p style={{ fontSize: '.9em' }}></p>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Artists;
