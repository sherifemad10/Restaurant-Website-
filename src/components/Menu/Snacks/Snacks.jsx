import "./snacks.css";
import Logo from "../../../assets/logo.png";

export const Snacks = () => {
  return (
    <div className="snacks">
      <div className="card-area">
        {/* Card: Main Food */}
        <div className="card-section">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--snacks">
                    {/* img cover */}

                    {/* title */}
                    <h2 className="card-front__heading"> Snacks </h2>
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
                  Snacks
                </h3>

                <div className="snack">
                  <h5 className="snackTittle1">Mozzarella Sticks</h5>
                  <span>$7</span>
                </div>

                <div className="snack">
                  <h5>Nachos</h5>
                  <span>$9</span>
                </div>

                <div className="snack">
                  <h5>Onion Rings</h5>
                  <span>$6</span>
                </div>

                <div className="snack">
                  <h5>Bruschetta</h5>
                  <span>$7</span>
                </div>

                <div className="snack">
                  <h5>Spring Rolls</h5>
                  <span>$6</span>
                </div>

                <div className="snack">
                  <h5>Mini Tacos</h5>
                  <span>$9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
