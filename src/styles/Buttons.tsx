import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

interface ReadMoreButton {
  width: number;
}
export const GoButton = styled.button<ReadMoreButton>`
  color: white;
  width: 100px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: grey;
  ${mediaQueries("md")`
    background-color: yellow;
    color: white;
  `};
  ${(props) => mediaQueries("md")(`width: ${props.width}px`)}
`;
