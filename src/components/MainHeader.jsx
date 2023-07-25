import "./MainHeader.css";
import {Link} from "react-router-dom";

const MainHeader = () => {
    return(
        <>
            <header className="main-header">
                <h1>کتابخانه من</h1>
                <nav className="header-nav">
                    <Link className="main-header-link" to="/books">کتاب ها</Link>
                    {" "}
                    <Link className="main-header-link" to="/about">درباره ما</Link>
                </nav>
            </header>
        </>
    )
}

export default MainHeader;