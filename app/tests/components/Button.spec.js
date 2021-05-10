import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Text, Pressable, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Button from '../../components/Button';

describe('Button Component', () => {
  describe('DEFAULT', () => {
    it('renders default display correctly', () => {
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

  describe('CARD', () => {
    it('renders display correctly when type === card', () => {
      const button = shallow(<Button type="card" />);
      const style = button.find(View).get(0).props.style[1];
      expect(style.elevation).toEqual(4);
      expect(style.height).toEqual(80);
    });

    it('displays Feather Icon', () => {
      const button = shallow(<Button type="card" />);
      const feather = button.find(Feather).get(0);
      expect(feather).toBeDefined();
    });
  });

  describe('ICON', () => {
    it('renders display correctly when type === icon', () => {
      const button = shallow(<Button type="icon" text="Balyhoo" />);
      const style = button.find(View).get(0).props.style[2];
      expect(style.backgroundColor).toEqual('#1C262D');
      expect(style.height).toEqual(32);
    });

    it('displays Feather Icon', () => {
      const button = shallow(<Button type="card" />);
      const feather = button.find(Feather).get(0);
      expect(feather).toBeDefined();
    });

    it('renders text passed as a prop', () => {
      const button = shallow(<Button text="Ballyhoo" type="icon" />);
      expect(button.contains(<Text>Ballyhoo</Text>));
    });
  });
 
});
