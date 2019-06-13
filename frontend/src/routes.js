import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New'

//switch é usado para garantir q apenas uma rota vai ser chamada por vez
function Routes() {
    return (
        <Switch>
            <Route path = '/' exact component = {Feed} />
            <Route path = '/new'component = {New} />
        </Switch>
    )
};

export default Routes;