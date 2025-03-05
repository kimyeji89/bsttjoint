/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface IImageContainer extends Container {
  maxWidth: string;
}

export default function ImageContainer(prop: IImageContainer) {
  const { children, maxWidth } = prop;
  return <div css={wrap(maxWidth)}>{children}</div>;
}

const wrap = (maxWidth: string) => css`
  width: 100%;
  max-width: ${maxWidth};
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
