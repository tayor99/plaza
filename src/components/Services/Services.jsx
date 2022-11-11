import { Wrapper } from "./Services.style";
import bqq from "../../Asset/bqq.png";
import { services } from "../../utils";

const Services = () => {
  return (
    <Wrapper>
      <h1>Our Services</h1>
      <div className="service__carousel">
        <div className="img__container">
          <img src={bqq} alt="" />
        </div>
      </div>
      <div className="services">
        <ul>
          {services.map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </div>
      <div className="service__marketplace">
        <h1>And so much more !!!</h1>
        <div className="btn">
          <button>Go to marketplace</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;