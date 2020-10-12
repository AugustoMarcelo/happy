import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;

  .leaflet-container {
    z-index: 5;
  }
`;

export const Sidebar = styled.aside`
  width: 440px;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  /* padding: 89px; */
  padding: 60px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
  }

  footer {
    display: flex;
    flex-direction: column;

    line-height: 24px;

    strong {
      font-weight: 800px;
    }
  }
`;

export const CreateOrphanageButton = styled(Link)`
  position: absolute;
  right: 40px;
  bottom: 40px;
  width: 64px;
  height: 64px;
  background: #15C3D6;
  border-radius: 20px;
  z-index: 10;
  transition: background-color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #17D6EB;
  }
`;