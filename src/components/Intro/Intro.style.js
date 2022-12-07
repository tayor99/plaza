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
    flex-direction: column;
    justify-content: flex-start;
    height: 900px;
    gap: 68px;
    margin-top: 40px;
    overflow: visible;
    margin-left: 0;
    width: 100%;
    .intro__details {
      width: 90%;
      margin: 0 auto;

      h1 {
        margin-top: 0 !important;
        span {
          display: inline-block;
          width: 250px;
        }
      }
      p {
        width: 100%;
      }
    }
    .intro__img {
      overflow-x: clip;
      align-self: center;
      width: 100%;
      .small_img {
        width: 120px;
        height: 120px;
      }
      .img__container-1 {
        top: 0;
        left: 334px;
      }
      .img__container-2 {
        top: 111px;
        left: 438px;
      }
      .img__container-3 {
        top: 102px;
        left: 213px;
      }
      .img__container-4 {
        top: 215px;
        left: 540px;
      }
      .img__container-5 {
        top: 208px;
        left: 96px;
      }
      .img__container-6 {
        left: 238px;
        top: 224px;
        width: 280px;
        height: 280px;
      }
    }
  }
  @media (max-width: 450px) {
    .intro__img {
      .img__container-1 {
        top: 0px;
        left: 150px;
      }
      .img__container-2 {
        top: 111px;
        left: 253px;
      }
      .img__container-3 {
        top: 102px;
        left: 44px;
      }
      .img__container-4 {
        top: 215px;
        left: 362px;
      }
      .img__container-5 {
        top: 208px;
        left: -50px;
      }
      .img__container-6 {
        left: 72px;
        top: 224px;
        width: 280px;
        height: 280px;
      }
    }
  }
`;
