import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-16">
      <div className="flex flex-col lg:flex-row lg:gap-20">
        <div className="lg:w-2/3 relative">
          <img className="rounded-xl w-5/6" src={person} />
          <img className="w-1/2 absolute top-64 right-16 border-8 border-white rounded-xl" src={parts} />
        </div>
        <div className="lg:w-1/2 mt-24 lg:mt-0">
          <h3 className="text-xl text-orange-500 font-bold">About Us</h3>
          <h1 className="text-3xl md:text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className="btn btn-warning">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
