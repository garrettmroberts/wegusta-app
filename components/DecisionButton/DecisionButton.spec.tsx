import React from 'react';
import renderer from 'react-test-renderer';

import DecisionButton from './DecisionButton';

describe('<DecisionButton />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<DecisionButton decision='like' />).toJSON();
    // @ts-ignore
    expect(tree.children.length).toBe(1);
  });
});