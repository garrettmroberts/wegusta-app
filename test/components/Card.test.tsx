import React from 'react';
import { render } from '@testing-library/react-native';

import Card from '../../components/Card/Card';

describe('<Card />', () => {
  it('runs a local image correctly', () => {
    const { toJSON } = render(
      <Card imageProps={require('../../assets/sample-image.jpeg')} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders a remote image correctly', () => {
    const { toJSON } = render(
      <Card imageProps={{ uri: 'https://picsum.photos/200/300' }} />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
