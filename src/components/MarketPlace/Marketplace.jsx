import { Wrapper } from "./Marketplace.style";
import demo from "../../Asset/demo.png";
import nigeria from "../../Asset/nig.png";
import cameroon from "../../Asset/cam.png";

const Marketplace = () => {
  return (
    <Wrapper id="marketplace">
      <div className="open__shop">
        <div className="content">
          <h1>Want to open up shop with us ?</h1>
          <p>
            Ever wanted to start your own franchise? This is your chance – we're
            taking on new franchise partners!
          </p>
          <button>Open Up Shop</button>
        </div>
        <div className="img__container">
          <img src={demo} alt="demo" />
        </div>
      </div>
      <div className="marketplace">
        <div className="countries">
          <h1>Available in</h1>
          <div className="flag__image">
            <div className="flag">
              <img src={nigeria} alt="nigeria flag" />
              <p>Nigeria</p>
            </div>
            <div className="flag">
              <img src={cameroon} alt="cameroon flag" />
              <p>Cameroon</p>
            </div>
          </div>
          <h1>And many more coming soon !!!</h1>
        </div>
      </div>
    </Wrapper>
  );
};

export default Marketplace;
