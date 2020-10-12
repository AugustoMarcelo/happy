import styled from 'styled-components';
import { Link } from 'react-router-dom';
import landingImg from '../../images/landing.svg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  height: 100%;
  /* max-height: 680px; */
  max-height: 500px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  background: url(${landingImg}) no-repeat 70% center;
  background-size: 37%;

  > img {
    width: 17%;
  }

  main {
    /* max-width: 350px; */
    max-width: 290px;

    h1 {
      /* font-size: 76px; */
      font-size: 70px;
      font-weight: 900;
      /* line-height: 78px; */
      line-height: 60px;
    }

    p {
      margin-top: 40px;
      /* font-size: 24px; */
      font-size: 20px;
      /* line-height: 34px; */
      line-height: 30px;
    }
  }
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;
  text-align: right;

  strong {
    font-weight: 800;
  }
`;

export const EnterButton = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;
  /* height: 80px; */
  /* width: 80px; */
  height: 60px;
  width: 60px;
  background: #FFD666;
  /* border-radius: 30px; */
  border-radius: 22.5px;
  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    transition: color 0.2s;
  }

  &:hover {
    background: #96FEFF;

    > svg {
      color: #15C3D6 !important;
    }
  }
`;
