import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import logoImg from '../../images/logo.svg';

import { Container, Wrapper, Location, EnterButton } from './styles';

function Landing() {
  return (
    <Container>
      <Wrapper>
        <img src={logoImg} alt="Logo Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Rio Grande do Norte</strong>
          <span>Caicó</span>
        </Location>

        <EnterButton to="/app">
          <FiArrowRight size={26} color="#8D734B" />
        </EnterButton>
      </Wrapper>
    </Container>
  )
}

export default Landing;
