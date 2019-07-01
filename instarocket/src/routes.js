import { createAppContainer, createStackNavigator } from 'react-navigator';

import Feed from './pages/Feed';
import New from './pages/New';

export default createAppContainer(
    createStackNavigator({
        Feed,
        New,
    })
);