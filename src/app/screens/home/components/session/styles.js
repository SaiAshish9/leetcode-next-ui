import styled, { css } from "styled-components";

export const SessionContainer = styled.div`
  width: 100%;
`;

export const SessionTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Card = styled.div`
  background: rgb(40 40 40);
  width: 100%;
  padding: 1rem 0;
  border-radius: 0.5rem;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0px 1px 3px #0000003d,
    0px 2px 8px #00000029;
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  padding: 0 1rem;
`;

export const SessionText = styled.p`
  color: #eff1f6bf;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const LevelText = styled.p`
  margin-right: 0.8rem;
  font-size: 0.8rem;
  ${({ easy, medium }) =>
    easy
      ? css`
          color: rgb(0 184 163);
        `
      : medium
      ? css`
          color: rgb(255 192 30);
        `
      : css`
          color: rgb(255 55 95);
        `}
`;

export const ScoreText = styled.span`
  color: #eff1f6bf;
  font-weight: 500;
  font-size: 0.8rem;
`;

export const TotalText = styled.span`
  color: #ebebf54d;
  font-size: 0.75rem;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
  align-items: center;
`;

export const ScoreTextContainer = styled.p``;

export const Circle = styled.div`
  width: 81px;
  height: 81px;
  border: 3px solid rgb(74 74 74);
  border-radius: 50%;
  cursor: pointer;
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const StatsContent = styled.div``;

export const AnonymousButton = styled.div`
  color: #eff2f699;
  background-color: #ffffff1a;
  padding: 0.375rem;
  font-size: 12px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 5rem;
`;
