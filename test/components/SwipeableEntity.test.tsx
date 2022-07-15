import { render, screen, fireEvent } from '@testing-library/react-native';

import SwipeableEntity from '../../components/SwipeableEntity/SwipeableEntity';
import Card from '../../components/Card/Card';

describe('<SwipeableEntity />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <SwipeableEntity>
        <Card imageProps={{ uri: 'https://picsum.photos/200/300' }} />
      </SwipeableEntity>
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
