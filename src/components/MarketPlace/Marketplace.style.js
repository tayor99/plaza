import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 40px;
  .open__shop {
    display: flex;
    background-color: #1f1f1f;
    justify-content: space-between;
    align-items: center;
    height: 500px;
    .content {
      color: #ffffff;
      width: 35%;
      margin: 0 auto;

      h1 {
        font-family: var(--primary-font);
        font-style: normal;
        font-weight: 700;
        font-size: 1.9rem;
        margin-bottom: 20px;
      }
      p {
        font-family: var(--primary-font);
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 24px;
        letter-spacing: 0.5px;
        color: #d2d2c8;
        margin-bottom: 60px;
      }
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 24px;
        gap: 8px;
        width: 139px;
        height: 48px;
        background: #a70e0d;
        border-radius: 10px;
        font-family: var(--primary-font);
        font-style: normal;
        font-weight: 700;
        font-size: 0.85rem;
        letter-spacing: 0.1px;
        color: #ffffff;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }
    .img__container {
      width: 50%;
      height: 100%;
      > img {
        width: 100%;
        height: 100%;
        /* border-top-left-radius: 25px; */
      }
    }
  }

  .countries {
    width: 60%;
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

  @media (max-width: 880px) {
    .open__shop {
      flex-direction: column;
      height: fit-content;
      padding: 40px;
    }
    .img__container {
      width: 100%;
      > img {
        border-radius: 10px !important;
      }
    }
  }
  @media (max-width: 680px) {
    .open__shop {
      padding: 20px;
      .img__container {
        width: 100%;
      }
    }
    .content {
      h1 {
        font-size: 1.4rem;
      }
      p {
        font-size: 0.8rem;
        margin-bottom: 20px !important;
      }
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
