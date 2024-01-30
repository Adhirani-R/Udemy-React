import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
import c3 from "../assets/c3.jpg"
import c4 from "../assets/c4.jpg"
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

function Recommended() 
{
 return (
        <div className="recommended">
            <h1 className="recommended__title">Recommended for you</h1>
            <h4>Pick the best fit</h4>
            <div className="recommended__container">
                <div className="course-card">
                    <img src={c1} alt="" />
                    <h3>2023 Python Data Visualization Master Class</h3>
                    <p>Col steele</p>
                    <p>4.5
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />                      
                    </p>
                    <p>549 <del>999</del></p>
                </div>
                <div className="course-card">
                    <img src={c2} alt="" />
                    <h3>Web Development Bootcamp 2023</h3>
                    <p>Col steele</p>
                    <p>3.5
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />   
                    </p>
                    <p>550 <del>999</del></p>
                </div>
                <div className="course-card">
                    <img src={c3} alt="" />
                    <h3>Master UI/UX Designing with Sigma</h3>
                    <p>Col steele</p>
                    <p>4.0
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                       </p>
                    <p>350 <del>899</del></p>
                </div>
                <div className="course-card">
                    <img src={c4} alt="" />
                    <h3>Basic to Advance Programming with EMC</h3>
                    <p>Col steele</p>
                    <p>3.5
                    <FaStar />
                    <FaStar />
                    <FaStar />
                                        <FaStarHalfAlt />   
                    </p>
                    <p>349 <del>799</del></p>
                </div>

            </div>
        </div>
        )
}
export default Recommended