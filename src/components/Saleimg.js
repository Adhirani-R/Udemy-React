import sale from "../assets/saleimg.jpg"
function Saleimg() 
{
    return (
        <div className="sale-image">
            <img src={sale} alt="sale"/>
                <div className="sale-image__offer">
                    <h2>Udemy flash sale! 24 hours to save.</h2>
                    <p>Get the top courses for just 499. Just one day to save
                        but a lifetime to learn</p>
                </div>
        </div>
    )
}
export default Saleimg
