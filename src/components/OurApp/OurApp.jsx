import { Wrapper } from "./OurApp.style";
import SamsungPhone from "../../Asset/iphone-10.png";
import Logo from "../../Asset/logo1.png";

const OurApp = () => {
  return (
    <Wrapper>
      <div className="ourApp__container">
        <div className="img__container">
          <img src={SamsungPhone} alt="" />
        </div>
        <div className="content">
          <img src={Logo} alt="" />
          <h2>Download our app</h2>
          <p>
            Discover and book awesome deals easily on our mobile app with the
            plazzaa app on both Android and IOS
          </p>
          <h4>Coming soon !!!</h4>
        </div>
      </div>
    </Wrapper>
  );
};

export default OurApp;
