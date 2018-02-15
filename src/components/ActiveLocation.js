import React from 'react';
import { createComponent } from 'react-fela'

const Container = createComponent(({ padding }) => ({
  padding: padding + 'px',
  backgroundColor: 'rgb(124, 114, 231)',
  fontSize: '20px'
}));

const ActiveLocation = ({activeLocation}) =>
  <Container padding={20}>
    {activeLocation && <h1>Weather in {activeLocation.name}</h1>}
  </Container>;

export default ActiveLocation;
