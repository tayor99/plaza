import styled from "styled-components";

export const Wrapper = styled.div`
  /* width: 88%; */
  margin-top: 80px;
  margin-left: 90px;
  display: flex;
  justify-content: space-between;
  height: 800px;
  overflow-x: clip;
  .intro__details {
    width: 47%;

    h1 {
      margin-top: 80px;
      font-family: var(--primary-font);
      font-style: normal;
      font-weight: 700;
      font-size: 3.1rem;
      color: var(--clr-black);
      > span {
        background: #dbd8f7;
        display: block;
        width: 300px;
        padding: 10px 15px;
        border-radius: 10px;
        clip-path: polygon(0 0, 100% 28%, 100% 77%, 0 100%);
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
      width: 80%;
    }
  }
  .intro__img {
    width: 47%;
    position: relative;
    .img__container-1 {
      position: absolute;
      top: 0;
      left: 200px;
    }
    .img__container-2 {
      position: absolute;
      top: 158px;
      left: 367px;
    }
    .img__container-3 {
      position: absolute;
      left: 31px;
      top: 154px;
    }
    .img__container-4 {
      position: absolute;
      left: 527px;
      top: 322px;
    }
    .img__container-5 {
      position: absolute;
      left: -131px;
      top: 314px;
    }
    .img__container-6 {
      position: absolute;
      left: 86px;
      top: 337px;
      width: 400px;
      height: 400px;
    }
    .small_img {
      width: 180px;
      height: 180px;
    }
    img {
      width: 100%;
      height: 100%;
      transform: rotateZ(45deg);
      border-radius: 30px;
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
        margin-top: 30px;
      }
    }
    .intro__img {
      display: none;
    }
  }
`;
