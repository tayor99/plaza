import styled from "styled-components";

export const Wrapper = styled.div`
  h1 {
    margin-top: 25px;
    text-align: center;
    font-family: var(--primary-font);
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    color: var(--clr-black);
  }
  .service__carousel {
    /* width: 100%; */
    margin: 50px 0;
    .img__container {
      width: 100%;
      height: 600px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .services {
    width: 100%;
    > ul {
      width: 70%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 0 auto;
      > li {
        margin: 10px 20px;
        list-style: none;
        background: rgba(210, 210, 200, 0.5);
        border-radius: 10px;
        padding: 20px 40px;
        font-family: var(--primary-font);
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        color: #1e1e14;
      }
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    margin-top: 25px;
    > button {
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
    }
  }
`;
