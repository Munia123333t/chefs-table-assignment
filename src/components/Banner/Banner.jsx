const Banner = () => {
    return (
      <div>
        <div className="card bg-base-100 image-full w-full shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co.com/0KPD8JC/tortilla-wrap-with-falafel-fresh-salad-vegan-tacos-vegetarian-healthy-food.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex items-center justify-center">
            <div className="text-center flex flex-col gap-y-2">
              <h2 className="card-title text-[25px] md:text-[52px] font-[700] md:leading-[75px]">
                Discover an exceptional cooking <br></br> class tailored for
                you!
              </h2>
              <p>
                Learn and Master Basic Programming, Data Structures, Algorithm,
                OOP, Database and solve 500+ coding <br></br> problems to become
                an exceptionally well world-class Programmer.
              </p>
              <div className="card-actions mt-4 items-center justify-center">
                <button className="btn btn-primary">Explore Now</button>
                <button className="btn btn-outline border-white text-white">
                  Our Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center flex-col mt-5 text-center'>
          <h1 className='text-[40px] font-[700]'>Our Recipes</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus.<br></br> Eget urna volutpat curabitur
            elementum mauris aenean neque.{" "}
          </p>
        </div>
      </div>
    );
};


export default Banner;