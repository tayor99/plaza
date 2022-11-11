import { Wrapper } from "./Marketplace.style";
import Shop from "../../Asset/shop.png";
const Marketplace = () => {
  return (
    <Wrapper>
      <div className="marketplace">
        <div className="img__container">
          <img src={Shop} alt="" />
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
    </Wrapper>
  );
};

export default Marketplace;
