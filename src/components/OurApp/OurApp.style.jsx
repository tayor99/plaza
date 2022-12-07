import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #ffffff;
  background-size: cover;
  -webkit-background-size: cover;
  margin-top: 130px;
  width: 100%;
  /* height: 800px; */
  overflow: hidden;
  position: relative;
  z-index: -10;
  /*below show how it works*/
  &:after {
    content: "";
    width: 200%;
    height: 0;
    padding-top: 200%;
    border-radius: 100%;
    background: rgba(248, 160, 160, 0.12);
    position: absolute;
    top: 16%;
    left: 50%;
    transform: translateX(-50%);
    z-index: -10;
  }
  .ourApp__container {
    display: flex;
    width: 80%;
    margin: 20px auto;
    padding-bottom: 60px;
    > .img__container {
      margin-right: 100px;
      width: 42%;
      img {
        width: 100%;
      }
    }
    .content {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 240px;
      > img {
        width: 20rem;
      }
      h2 {
        font-family: var(--primary-font);
        font-weight: 700;
        font-size: 1.9rem;
        color: #000000;
        margin-top: 30px;
        margin-bottom: 10px;
      }
      p {
        font-family: var(--primary-font);
        font-style: normal;
        font-weight: 400;
        font-size: 1.1rem;
        line-height: 1.5;
        margin-bottom: 5px;
      }
      h4 {
        font-family: var(--primary-font);
        font-style: normal;
        font-weight: 700;
        font-size: 1.7rem;
        line-height: 40px;
        color: #272443;
      }
      > form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        width: 100%;
        > input {
          background-color: transparent;
          border: 1px solid #000000;
          border-radius: 10px;
          height: 55px;
          width: 100%;
          color: rgba(0, 0, 0, 0.5);
          padding-left: 20px;
        }
        > button {
          width: 160px;
          height: 55px;
          color: #ffffff;
          background: #000000;
          border-radius: 13.4796px;
          margin-top: 20px;
          cursor: pointer;
        }
      }
    }
  }
  @media (max-width: 1250px) {
    .content {
      margin-top: 100px !important;
      > img {
        width: 15rem !important;
      }
      p {
        margin-bottom: 5px !important;
      }
    }
  }
  @media (max-width: 900px) {
    .content {
      width: 50% !important;
      > img {
        width: 10rem !important;
      }
    }
  }
  @media (max-width: 780px) {
    margin-top: 20px !important;
    .ourApp__container {
      flex-direction: column-reverse;
      align-items: center;
      margin: 0 auto !important;
    }
    .img__container {
      margin-top: 40px;
      margin-right: 0 !important;
      width: 50%;
      > img {
        width: 100%;
      }
    }
    .content {
      align-items: center;
      width: 80% !important;
    }
    h2 {
      font-size: 1.4rem !important;
    }
    p {
      text-align: center;
      font-size: 0.8rem !important;
    }
    h4 {
      font-size: 1rem !important;
    }
  }
`;
