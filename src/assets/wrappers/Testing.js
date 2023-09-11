import styled from "styled-components";

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  //span is under h1 so we can write it under the h1 or write the span separately and then add font-weight: 700; to the span too
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  //in the small devices don't show the main svg image
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr; //for this device size we have 2 column layout
      column-gap: 3rem;
    }
    .main-img {
      display: block; //in this size of devices display the main svg image
    }
  }
`;

export default Wrapper;
