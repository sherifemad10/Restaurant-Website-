import "./mainFood.css";
import Logo from "../../../assets/logo.png";

export const MainFood = () => {
  return (
    <div className="MainFood">
      <div className="card-area">
        {/* Card: Main Food */}
        <div className="card-section">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--mainfood">
                    {/* img cover */}

                    {/* title */}
                    <h2 className="card-front__heading">Main Food </h2>
                  </div>
                  <div className="card-front__bt">
                    <p className="card-front__text-view card-front__text-view--mainFood">
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
                  Main Meals
                </h3>

                <div className="meals">
                  <h5 className="mealTittle1">Grilled Chicken Breast</h5>
                  <span>$20</span>
                </div>

                <div className="meals">
                  <h5>Chicken Curry</h5>
                  <span>$18</span>
                </div>

                <div className="meals">
                  <h5>Steak Frites</h5>
                  <span>$28</span>
                </div>

                <div className="meals">
                  <h5>Grilled Salmon</h5>
                  <span>$25</span>
                </div>

                <div className="meals">
                  <h5>Fish Tacos</h5>
                  <span>$18</span>
                </div>

                <div className="meals">
                  <h5>Beef Stroganoff</h5>
                  <span>$22</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
