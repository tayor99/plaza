import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 40px;

  .marketplace__container {
    display: flex;
    position: relative;
    align-items: center;
  }
  .img__container {
    width: 48%;
    height: 350px;
    z-index: 1;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  .marketplace__detials {
    background: #ffd6d5;
    border-radius: 20px;
    width: 62%;
    position: absolute;
    right: 0;
    clip-path: polygon(0 14%, 100% 0, 100% 100%, 0 86%);
    .marketplace__info {
      width: 52%;
      margin: 0 auto;
      height: 420px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      > h1 {
        font-family: var(--primary-font);
        font-weight: 700;
        font-size: 2rem;
        color: #000000;
        margin-bottom: 15px;
      }
      > p {
        font-family: var(--primary-font);
        font-weight: 400;
        font-size: 1rem;
        color: #5a5a50;
        margin-bottom: 20px;
      }
      button {
        width: 180px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: #a70e0d;
        border-radius: 10px;
        font-family: var(--primary-font);
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        color: #ffffff;
        cursor: pointer;
      }
    }
  }
  .countries {
    width: 70%;
    margin: 0 auto;
    margin-top: 100px;
    h1 {
      margin: 25px 0;
      text-align: center;
      font-family: var(--primary-font);
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      color: var(--clr-black);
    }
    .flag__image {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .flag {
      width: 45%;
      img {
        width: 100%;
      }
      > p {
        text-align: center;
        margin-top: 25px;
        font-family: var(--primary-font);
        font-weight: 400;
        font-size: 1.4rem;
        color: #000000;
      }
    }
  }
  @media (max-width: 1300px) {
    width: 90%;
  }
  @media (max-width: 680px) {
    .marketplace__container {
      position: static;
    }
    .img__container {
      display: none;
    }
    .marketplace__detials {
      width: 100%;
      position: static;
      clip-path: none;
      text-align: center;
      .marketplace__info {
        align-items: center;
        width: 80%;
      }
    }
    .countries {
      width: 90%;
    }
  }
`;
