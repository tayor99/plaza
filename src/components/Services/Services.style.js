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
    margin: 50px 0;
    .img__container {
      width: 100%;

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

        border-radius: 10px;
        padding: 5px 10px;
        border: 0.1px solid #aaaaa0;
        display: flex;
        align-items: center;
        height: 43px;
        > img {
          width: 43px;
          height: 95%;
          object-fit: contain;
        }
        > p {
          font-family: var(--primary-font);
          font-style: normal;
          font-weight: 700;
          font-size: 0.9rem;
          color: #1e1e14;
          margin: 0 20px;
        }
      }
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    margin: 25px 0;
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
      cursor: pointer;
    }
  }
  @media (max-width: 700px) {
    .services {
      > ul {
        width: 90%;
        /* justify-content: flex-start; */
        > li {
          margin: 5px 10px;
          padding: 10px 20px;
        }
      }
    }
  }
`;
