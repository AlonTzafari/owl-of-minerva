import "./App.scss";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
            <Header />
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
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
