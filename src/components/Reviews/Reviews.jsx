import "./reviews.css";
import { IoStar, IoStarHalf, } from "react-icons/io5";


// person Review
import Person from "./person";

const Reviews = () => {
  return (
    <div className="reviews" id="reviews">
      <h2>ـــــ Reviews ـــــ</h2>

      <div className="reviewCards">
        {Person.map((item) => {
          return (
            <>
            
              <div  className="reviewCard">
                <div className="personalName">
                  <img src={item.img} alt="Ahmed" loading="lazy"/>
                  <h3>{item.name}</h3>
                </div>

                <div className="rate">
                  <IoStar className="star" />
                  <IoStar className="star" />
                  <IoStar className="star" />
                  <IoStar className="star" />
                  <IoStarHalf className="star" />
                </div>

                

                

                <div className="reviewDec">
                  <p>{item.dec}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
