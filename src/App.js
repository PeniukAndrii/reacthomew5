import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import AllUser from "./Components/AllUser/AllUser";
import './App.css'
import Posts from "./Components/Posts/Posts";
import UserOne from "./Components/UserOne/UserOne";

class App extends Component {
  render() {
    return (

        <Router>
            <div className={'Main-Wrap'}>
                <div className={'Nav'}>
                    <div><Link to={'/'}>Home</Link></div>
                    <div><Link to={'/users'}>Users</Link></div>
                </div>

                <div className={'block1'}>
                    <div className={'block1-in'}>
                        <Switch>
                            <Route path={'/users'} render={()=><AllUser/>}/>
                        </Switch>
                    </div>
                </div>

                <div className={'block1 block1-style'}>
                    <div className={'block2-in'}>
                        <Switch>
                            <Route path={`/users/:id`}  render={(props)=>{
                                let {match:{params:{id}}}=props
                                return <UserOne id={id} key={id}/>
                            }}/>
                        </Switch>
                    </div>
                </div>

                <div className={'Posts-Wrap'}>
                    <div className={'block3-in'}>
                        <Switch>
                            <Route path={`/users/:id/posts`} exact={true} render={(props)=>{
                                let {match:{params:{id}}}=props
                                return <Posts id={id} key={id}/>
                            }}/>
                        </Switch>
                    </div>
                </div>



            </div>
        </Router>
    );
  }
}

export default App;
