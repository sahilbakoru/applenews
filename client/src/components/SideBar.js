import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div style={{ position: "sticky", top: "0"}}>
            <h3 className="newshead">
                <Link to="/">
                Top Stories
                </Link>
            </h3>
            <ul>
                {/* <li>
                    <Link to="/search" className="searchnews">
                        Search News
                    </Link>
                </li> */}
                <li>
                    <Link to="/business">Business</Link>
                </li>
                <li>
                    <Link to="/entertainment">Entertainment</Link>
                </li>
                <li>
                    <Link to="/health">Health</Link>
                </li>
                <li>
                    <Link to="/science">Science</Link>
                </li>
                <li>
                    <Link to="/sports">Sports</Link>
                </li>
                <li>
                    <Link to="/tech">Technology</Link>
                </li>
<hr/>
                <li>
                    <Link to="/about">About us</Link>
                </li>
                <li>
                    <Link to="/policy">Privacy policy</Link>
                </li>
                <li>
                    <Link to="/disclaimer">Disclaimer</Link>
                </li>
                <li>
                    <Link to="/contact">Contact us</Link>
                </li>
                {/* <li>
                    <Link to="/uk"> News UK</Link>
                </li>
                <li>
                    <Link to="/can">News Canada</Link>
                </li>
                <li>
                    <Link to="/aus">News Australia</Link>
                </li>
                <h3 className="newshead">Favorites</h3>
                <li>
                    <Link to="/bra">Bleacher Report</Link>
                </li>
                <li>
                    <Link to="/wsj">Wall Street Journal</Link>
                </li>
                <li>
                    <Link to="/bbc">BBC-News</Link>
                </li>
                <li>
                    <Link to="/tc">TechCrunch</Link>
                </li> */}



            </ul>
        </div>
    );
};

export default SideBar;
