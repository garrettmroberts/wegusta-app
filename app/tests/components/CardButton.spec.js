import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Text, Pressable } from 'react-native';
import CardButton from '../../components/CardButton';

describe('Button Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CardButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('passes extra props to Pressable component', () => {
    const button = shallow(<CardButton prop_1="true" />);
    const pressable = button.find(Pressable);
    expect(pressable.props().prop_1).toEqual('true');
  });
});
