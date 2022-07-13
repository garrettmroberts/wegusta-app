import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';

import DecisionButton from '../../components/DecisionButton/DecisionButton';

describe('<DecisionButton />', () => {
  it('runs handlePress function on press', () => {
    const mockFn = jest.fn();
    render(<DecisionButton decision="like" onPress={mockFn} />);
    fireEvent.press(screen.getByTestId('decision-button'));
    expect(mockFn).toBeCalled();
  });

  it('renders a like button correctly', () => {
    const { toJSON } = render(<DecisionButton decision="like" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders a dislike button correctly', () => {
    const { toJSON } = render(<DecisionButton decision="dislike" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
