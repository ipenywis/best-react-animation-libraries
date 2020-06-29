import styled from "styled-components";

export const PreviewContainer = styled.div`
  width: 10em;
  height: 22em;
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    //margin-right: 4em;
  }
`;

export const AnimationContainer = styled.div`
  width: 100%;
  height: 17em;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GroundContainer = styled.div`
  width: 100%;
  height: 4px;
  background-color: #000;
  border-radius: 10px;
  position: absolute;
  bottom: 0;
`;

export const AnimationTitle = styled.h3`
  color: #353535;
`;
