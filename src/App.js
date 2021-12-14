import  {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Homepage from "./pages/homepage/Homepage";
import Subredditpage from "./pages/subredditpage/Subredditpage";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route exact path="/subreddit/r/:subreddit">
                    <Subredditpage />
                </Route>
            </Switch>
        </Router>

    );
}

export default App;
