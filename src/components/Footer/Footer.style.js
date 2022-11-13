import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100%;
  background: #0a0a00;
  .footer__container {
    width: 95%;
    margin: 0 auto;
    .footer__links {
      display: flex;
      padding-top: 30px;
      padding-bottom: 10px;
      border-bottom: 0.1px solid #ffffff;
      li {
        font-family: var(--primary-font);
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        color: #bebeb4;
        list-style: none;
        margin-right: 38px;
      }
    }
    .footer__socials {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 15px;
      .footer__logo {
        display: flex;
        align-items: baseline;
        > h1 {
          font-family: var(--primary-font);
          font-style: normal;
          font-weight: 700;
          font-size: 3.5rem;
          color: #ffffff;
          margin-right: 40px;
        }
        > p {
          font-family: var(--primary-font);
          font-style: normal;
          font-weight: 400;
          font-size: 1rem;
          color: #96968c;
        }
      }
      .socials {
        > svg {
          color: #ffffff;
          font-size: 3.2rem;
          margin-left: 15px;
          border-radius: 20px;
        }
      }
    }
  }
`;
