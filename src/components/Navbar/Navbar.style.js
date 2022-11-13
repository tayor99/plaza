import styled from "styled-components";

export const Header = styled.header`
  width: 88%;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .navlinks {
    ul {
      display: flex;
      li {
        list-style: none;
        margin-left: 30px;
        font-family: var(--primary-font);
        font-weight: 800;
        font-size: 1.1rem;
        color: var(--clr-grey);
        cursor: pointer;
        position: relative;
        padding-bottom: 6px;
        transition: all 1s;
        &:hover {
          color: #0a0a00;
        }

        &::after {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          /* margin: auto; */
          width: 0%;
          content: ".";
          color: transparent;
          background: #a70e0d;
          height: 3px;
          transition: all 1s;
        }
        &:hover::after {
          width: 100%;
        }
      }
    }
  }
`;
