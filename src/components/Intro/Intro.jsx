import { Wrapper } from "./Intro.style.js";
import plazaCard from "../../Asset/plazacard.png";

const Intro = () => {
  return (
    <Wrapper>
      <div className="intro__details">
        <h1>
          Your one stop shop for <br /> <span>all services</span>
        </h1>
        <p>
          Finding a good plumber, painter or electrician can be a hassle.
          Between low competition, long wait times and shoddy service, the
          process can often be a letdown. So to handle this important service
          for you, we've created a one-stop shop for service providers - short
          listing the best professionals available and matching them to you
          according to your needs. Now you can solicit bids from contractors
          with the click of a button, from the safety of your home or at the
          office!
        </p>
      </div>
      <div className="intro__img">
        <div className="img__container">
          <img src={plazaCard} alt="plaza card" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Intro;
