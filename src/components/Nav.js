 import { FaSearch } from "react-icons/fa";
 import { FaBell } from "react-icons/fa6";
 import { FaCartShopping } from "react-icons/fa6";
 import { FaUser } from "react-icons/fa";
 import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
    return (
        <div className="navbar">

            <div className="navbar__s1">
                <h1 className="navbar__s1__title">Udemy</h1>
            </div>

            <div className="navbar__s2">
                 <FaSearch />  
                <input type="search" placeholder="Search for anything here...Tech,art,Bussiness..." />
            </div>

            <div className="navbar__s3">
                <p>Courses</p>
                <div className="mylearning">
                    <p>My learning</p>
                    <div className="mylearning__popup">
                        <p>You did not puchase anything yet</p>
                    </div>
                </div>
                {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" style={{color: "#000000",}} />
                        <FontAwesomeIcon icon="fa-solid fa-user" style={{color: "#000000",}} /> */}
                <FaCartShopping />
                 <FaBell/>
                 <FaUser />
            </div>
            <div className="navbar__s4">
            <GiHamburgerMenu />

            </div>
        </div>
    )
}

export default Nav