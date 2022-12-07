import { Wrapper } from "./Intro.style.js";
import bbq from "../../Asset/bbq_small.png";
import bed from "../../Asset/bed.png";
import elect from "../../Asset/electricity.png";
import gift from "../../Asset/gift_small.png";
import health from "../../Asset/health_care.png";
import spa from "../../Asset/spa_small.png";

const Intro = () => {
  return (
    <Wrapper id="home">
      <div className="intro__details">
        <h1>
          Enjoy discounts and savings <span>all year round</span>
        </h1>

        <p>
          From local services to distant adventures to everyday services,
          Plazzaa is your one stop shop to find the best deals for every
          occasion.
        </p>
      </div>
      <div className="intro__img">
        <div className="img__container-1 small_img">
          <img src={bbq} alt="bbq" />
        </div>
        <div className="img__container-2 small_img">
          <img src={spa} alt="plaza card" />
        </div>
        <div className="img__container-3  small_img">
          <img src={elect} alt="plaza card" />
        </div>
        <div className="img__container-4 small_img">
          <img src={gift} alt="plaza card" />
        </div>
        <div className="img__container-5 small_img">
          <img src={health} alt="plaza card" />
        </div>
        <div className="img__container-6 big_img">
          <img src={bed} alt="plaza card" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Intro;
