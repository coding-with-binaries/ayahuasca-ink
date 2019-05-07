import styled from 'styled-components';

export const InkContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: #1f1f1f;
  display: grid;
  grid-template-rows: 80px auto;
`;

export const InkHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  color: white;
`;

export const InkTitle = styled.span`
  font-family: 'Grand Hotel';
  font-size: 28px;
`;

export const InkActions = styled.div`
  display: flex;
`;
