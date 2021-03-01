import './App.css';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';

function App() {
    const [open, setOpen] = useState(false);
    return (
        <div className="App">
            <Header open={open} setOpen={setOpen} />
            <Sidebar open={open} setOpen={setOpen} />
            <div className={open ? 'App_body1' : 'App__body'}>
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
