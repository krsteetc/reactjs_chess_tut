import './styles/Home.css'
import {NavLink} from "react-router-dom";
export function Home() {
    return (
        <div className="Container">
            <div className="Box">
                <h1>
                    <NavLink to="/game" className="modeTitle">Game</NavLink>
                </h1>
            </div>
            <div className="Box">
                <h1>
                    <NavLink to="/tutorials" className="modeTitle">Tutorials</NavLink>
                </h1>
            </div>
        </div>
    )
}