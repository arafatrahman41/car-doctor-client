import img1 from "../../../assets/images/homeCarousel/1.jpg";
import img2 from "../../../assets/images/homeCarousel/2.jpg";
import img3 from "../../../assets/images/homeCarousel/3.jpg";
import img4 from "../../../assets/images/homeCarousel/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full my-16">
      {/* slide 1 */}
      <div id="slide1" className="carousel-item relative w-full h-[600px]">
        <img
          src={img1}
          className="w-full rounded-xl object-cover object-center"
        />
        <div className="absolute h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white space-y-4 rounded-xl flex flex-col justify-center pl-12 md:w-1/2">
          <h2 className="text-2xl md:text-5xl font-bold ">
            Affordable Price For Car Servicing
          </h2>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4">
            <button className="btn btn-error">Discover More</button>
            <button className="btn btn-outline">Latest Project</button>
          </div>
        </div>
        <div className="absolute right-10 bottom-5 gap-4 flex -translate-y-1/2 transform">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* slide 2 */}
      <div id="slide2" className="carousel-item relative w-full h-[600px]">
        <img
          src={img2}
          className="w-full rounded-xl object-cover object-center"
        />
        <div className="absolute h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white space-y-4 rounded-xl flex flex-col justify-center pl-12 md:w-1/2">
          <h2 className="text-2xl md:text-5xl font-bold ">
            Affordable Price For Car Servicing
          </h2>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4">
            <button className="btn btn-error">Discover More</button>
            <button className="btn btn-outline">Latest Project</button>
          </div>
        </div>
        <div className="absolute right-10 bottom-5 gap-4 flex -translate-y-1/2 transform">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* slide 3 */}
      <div id="slide3" className="carousel-item relative w-full h-[600px]">
        <img
          src={img3}
          className="w-full rounded-xl object-center object-cover"
        />
        <div className="absolute h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white space-y-4 rounded-xl flex flex-col justify-center pl-12 md:w-1/2">
          <h2 className="text-2xl md:text-5xl font-bold ">
            Affordable Price For Car Servicing
          </h2>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4">
            <button className="btn btn-error">Discover More</button>
            <button className="btn btn-outline">Latest Project</button>
          </div>
        </div>
        <div className="absolute right-10 bottom-5 gap-4 flex -translate-y-1/2 transform">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* slide 4 */}
      <div id="slide4" className="carousel-item relative w-full h-[600px]">
        <img
          src={img4}
          className="w-full rounded-xl object-cover object-center" 
        />
        <div className="absolute h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white space-y-4 rounded-xl flex flex-col justify-center pl-12 md:w-1/2">
          <h2 className="text-2xl md:text-5xl font-bold ">
            Affordable Price For Car Servicing
          </h2>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4">
            <button className="btn btn-error">Discover More</button>
            <button className="btn btn-outline">Latest Project</button>
          </div>
        </div>
        <div className="absolute right-10 bottom-5 gap-4 flex -translate-y-1/2 transform">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
