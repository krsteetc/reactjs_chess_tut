import './App.css';
import {Home} from "./views/Home";
import {Route, Routes} from "react-router-dom";
import {Game} from "./views/Game";
import {Tutorials} from "./views/Tutorials";

function App() {
    return (
            <Routes>
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="/tutorials" element={<Tutorials />} />
            </Routes>
    )
}

export default App;