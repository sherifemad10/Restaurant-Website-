import "./drinks.css";
import Logo from "../../../assets/logo.png";

export const Drinks = () => {
  return (
    <div className="drinks">
      <div className="card-area">
        {/* Card: drinks */}
        <div className="card-section">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--drinks">
                    {/* img cover */}

                    {/* title */}
                    <h2 className="card-front__heading"> Drinks </h2>
                  </div>
                  <div className="card-front__bt">
                    <p className="card-front__text-view card-front__text-view--snacks">
                      View me
                    </p>
                  </div>
                </div>
                <div className="card-back">
                  {/* Logo */}

                  <img src={Logo} alt="Logo" className="logo" />
                </div>
              </div>
            </div>
            <div className="inside-page">
              <div className="inside-page__container">
                {/* title inside */}
                <h3 className="inside-page__heading inside-page__heading--mainFood">
                  Drinks
                </h3>

                <div className="dirnk">
                  <h5 className="dirkTittle1">Soft Drinks</h5>
                  <span>$3</span>
                </div>

                <div className="dirnk">
                  <h5>Lemonade</h5>
                  <span>$5</span>
                </div>

                <div className="dirnk">
                  <h5>Fruit Juice</h5>
                  <span>$4</span>
                </div>

                <div className="dirnk">
                  <h5>Coffee</h5>
                  <span>$3</span>
                </div>

                <div className="dirnk">
                  <h5>Hot Tea</h5>
                  <span>$2</span>
                </div>

                <div className="dirnk">
                  <h5>Hot Chocolate</h5>
                  <span>$4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
