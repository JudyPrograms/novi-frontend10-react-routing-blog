import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import './components/NavBar.css';
import './components/Button.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Post from "./pages/Post";
import NavBar from "./components/NavBar";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuth, setIsAuth] = useState(false);

    return (
        <div>
            <NavBar isAuth={isAuth} setIsAuth={setIsAuth}/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/login">
                    <Login setIsAuth={setIsAuth}/>
                </Route>
                {isAuth &&
                    <>
                <Route exact path="/blogposts">
                    <Overview/>
                </Route>
                <Route path="/blogposts/:num">
                    <Post/>
                </Route>
                    </>
                }
            </Switch>
        </div>
    );
}

export default App;
