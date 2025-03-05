import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-size: 16px;
    line-height: 1.5;
    font-family: "Pretendard", sans-serif;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  img {
    max-width: 100%;

    display: block;
    vertical-align: bottom;
  }
`;
