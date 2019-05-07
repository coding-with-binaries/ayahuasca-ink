import React from 'react';
import { InkContainer, InkHeader, InkTitle } from './Main.styles';
import Mapbox from './mapbox/Mapbox';

const Main = () => {
  return (
    <InkContainer>
      <InkHeader>
        <InkTitle>ayahuasca.ink</InkTitle>
      </InkHeader>
      <Mapbox />
    </InkContainer>
  );
};

export default Main;
