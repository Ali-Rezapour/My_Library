import {NavLink} from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
    return(
        <div className="bg-purple">
            <div className="stars">
                <div className="custom-navbar">
                    <div className="brand-logo">
                        <img src="http://salehriaz.com/404Page/img/logo.svg" alt="img brand logo" width="80px"/>
                    </div>
                    <div className="navbar-links">
                        <ul>
                            <li><a href="#" target="_blank">Home</a></li>
                            <li><a href="#" target="_blank">About</a></li>
                            <li><a href="#" target="_blank">Features</a></li>
                            <li><a href="#" className="btn-request" target="_blank">Request A Demo</a></li>
                        </ul>
                    </div>
                </div>
                <div className="central-body">
                    <img className="image-404" alt="img body" src="http://salehriaz.com/404Page/img/404.svg" width="300px"/>
                        <NavLink to={"/books"} className="btn-go-home">GO BACK HOME</NavLink>
                </div>
                <div className="objects">
                    <img className="object_rocket" alt="img object" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px"/>
                        <div className="earth-moon">
                            <img className="object_earth" alt="img earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px"/>
                                <img className="object_moon" alt="img moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px"/>
                        </div>
                        <div className="box_astronaut">
                            <img className="object_astronaut" alt="img astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px"/>
                        </div>
                </div>
                <div className="glowing_stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>

                </div>

            </div>
        </div>
    )
}

export default NotFound;