import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Text, Pressable } from 'react-native';
import Button from '../../components/Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button text="Balyhoo" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Displays text prop in button', () => {
    const button = shallow(<Button text="Ballyhoo" />);
    expect(button.contains(<Text>Ballyhoo</Text>));
  });

  it('passes extra props to Pressable component', () => {
    const button = shallow(<Button text="Ballyhoo" prop_1="true" />);
    const pressable = button.find(Pressable);
    expect(pressable.props().prop_1).toEqual('true');
  });
});
