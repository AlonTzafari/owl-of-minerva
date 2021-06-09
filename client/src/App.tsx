import "./App.scss";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import AlertsPanel from "./components/AlertsPanel";

function App() {
    return (
        <div className="App">
            <Router>
            <Header />
                <Switch>
                    
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>

                    <Route path="/alerts">
                        <AlertsPanel />
                    </Route>

                    <Route exact path="/">
                        <Redirect to="/dashboard"/>
                    </Route>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
