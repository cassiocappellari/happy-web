import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/app" component={OrphanagesMap}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes

/*

<Switch>
    <Route path="/" exact component={Landing}/>
    <Route path="/app" component={OrphanagesMap}/>
</Switch>

O Switch faz com que apenas uma rota seja exibida em tela

*/