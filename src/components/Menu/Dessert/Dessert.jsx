import "./dessert.css";
import Logo from "../../../assets/logo.png";

export const Dessert = () => {
  return (
    <div className="Dessert">
      <div className="card-area">
        {/* Card: Main Food */}
        <div className="card-section">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--dessert">
                    {/* img cover */}

                    {/* title */}
                    <h2 className="card-front__heading"> Dessert </h2>
                  </div>
                  <div className="card-front__bt">
                    <p className="card-front__text-view card-front__text-view--dessert">
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
                  Dessert
                </h3>

                <div className="desser">
                  <h5 className="desserTittle1">Cheese cake</h5>
                  <span>$8</span>
                </div>

                <div className="desser">
                  <h5>Apple Pie</h5>
                  <span>$8</span>
                </div>

                <div className="desser">
                  <h5>Chocolate Mousse </h5>
                  <span>$7</span>
                </div>

                <div className="desser">
                  <h5>Fruit Tart</h5>
                  <span>$8</span>
                </div>

                <div className="desser">
                  <h5>Carrot Cake</h5>
                  <span>$7.5</span>
                </div>

                <div className="desser">
                  <h5>Lemon Sorbet</h5>
                  <span>$6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
