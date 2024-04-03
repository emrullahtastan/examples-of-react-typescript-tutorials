import './App.css';
import {Profile} from "./components/auth/Profile";
import {Private} from "./components/auth/Private";

function App() {
    return (
        <div className="App">
            <Private isLoggedIn={true} component={Profile}/>
        </div>
    );
}

export default App;
