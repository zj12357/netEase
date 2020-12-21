import React, {Fragment,Suspense} from 'react';
import './App.scss';
import routes from '@/router/index.js';
import Loading from '@/components/loading/Loading.jsx'
import { BrowserRouter as Router, Route,Switch,Redirect,Link } from 'react-router-dom'
import history from '@/config/history.js'
function RenderRouters({routes}) {
    return routes.map((item) =>{
        return(
            <Route
                path={item.link}
                key={item.name}
                exact={item.exact}
                render={() => (
                    <div>
                        <item.component />
                    </div>
                )} />
        )
    })
}
function App() {
  return (
    <div className="App">
        <Suspense fallback={  <Loading></Loading>}>
            <Router history={history}>
                    <Switch>
                        <Fragment>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/home/todolist">todo</Link>
                                </li>
                                <li>
                                    <Link to="/hooks">hooks</Link>
                                </li>
                                <li>
                                    <Link to="/other">other</Link>
                                </li>
                            </ul>
                            <Route exact path="/" render={() => (
                                <Redirect to="/home" />
                            )} />
                            <RenderRouters routes={routes}></RenderRouters>
                        </Fragment>
                    </Switch>
                </Router>
        </Suspense>
    </div>
  );
}

export default App;
