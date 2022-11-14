import { footerLinks } from "../../utils";
import { Wrapper } from "./Footer.style";
import {
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer__container">
        <ul className="footer__links">
          {footerLinks.map((footerLink) => (
            <li key={footerLink.id}>{footerLink.name}</li>
          ))}
        </ul>
        <div className="footer__socials">
          <div className="footer__logo">
            <h1>Plazzaa</h1>
            <p>Plazzaa inc. All rights reserved</p>
          </div>
          <div className="socials">
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillTwitterSquare />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
