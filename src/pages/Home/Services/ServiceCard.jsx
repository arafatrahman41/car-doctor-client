import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="service image" className="rounded-xl h-52" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-orange-500 font-bold text-lg">Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-warning btn-circle">
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
