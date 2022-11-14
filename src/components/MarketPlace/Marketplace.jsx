import { Wrapper } from "./Marketplace.style";
import Shop from "../../Asset/shop.png";
import nigeria from "../../Asset/nigeria.png";
import cameroon from "../../Asset/cameroon.png";
const Marketplace = () => {
  return (
    <Wrapper id="marketplace">
      <div className="marketplace">
        <div className="marketplace__container">
          <div className="img__container">
            <img src={Shop} alt="shops" />
          </div>
          <div className="marketplace__detials">
            <div className="marketplace__info">
              <h1>Want to open up shop with us ?</h1>
              <p>
                Ever wanted to start your own franchise? This is your chance –
                we're taking on new franchise partners!
              </p>
              <div className="btn">
                <button>Open up shop</button>
              </div>
            </div>
          </div>
        </div>
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
