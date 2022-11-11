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
      }
    }
  }
`;
