import styled from "styled-components";

export const Wrapper = styled.div`
  width: 88%;
  margin: 25px auto;
  display: flex;
  justify-content: space-between;
  .intro__details {
    width: 47%;

    h1 {
      margin-top: 35px;
      font-family: var(--primary-font);
      font-style: normal;
      font-weight: 700;
      font-size: 3.1rem;
      color: var(--clr-black);
      > span {
        background: #dbd8f7;
        display: block;
        width: 250px;
        padding: 10px 15px;
        border-radius: 10px;
        clip-path: polygon(0 0, 100% 28%, 100% 77%, 0 100%);
      }
    }
    .img_container {
      width: 100%;
      display: none;
      img {
        width: 100%;
      }
    }
    p {
      text-align: justify;
      margin-top: 35px;
      font-family: var(--primary-font);
      font-style: normal;
      font-weight: 400;
      font-size: 1.1rem;
      color: #5a5a50;
    }
  }
  .intro__img {
    width: 47%;
    .img__container {
      width: 100%;
      height: 400px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  @media (max-width: 1200px) {
    .intro__details {
      h1 {
        font-size: 2.5rem;
      }
    }
  }
  @media (max-width: 860px) {
    .intro__details {
      width: 100%;
      h1 {
        span {
          display: inline-block;
        }
      }
      .img_container {
        display: block;
      }
    }
    .intro__img {
      display: none;
    }
  }
`;
