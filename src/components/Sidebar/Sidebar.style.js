import styled from "styled-components";

export const SidebarContainer = styled.div`
  text-align: center;
  background-color: var(--clr-black);
  width: 100%;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: var(--clr-white);
  }
  .close-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: transparent;
    border: none;
    width: 60px;
    height: 50px;
    color: var(--clr-black);
    cursor: pointer;
    > svg {
      font-size: 2.5rem;
    }
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: all 0.5s;
    transform: translate(-100%);
    z-index: -1;
    width: 100vw;
  }

  ul {
    li {
      list-style: none;
      margin-bottom: 30px;
      cursor: pointer;
      position: relative;
      padding-bottom: 6px;
      transition: all 1s;
      a {
        text-decoration: none;
        font-family: var(--primary-font);
        font-weight: 800;
        font-size: 1.1rem;
        color: var(--clr-black);
      }
      &:hover {
        color: #0a0a00;
      }
    }
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;
