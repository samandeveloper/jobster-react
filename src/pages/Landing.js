//this is the first page we land in (If the user NOT logged in) which has login/register button
// import logo from "../assets/images/logo.svg"; //logo is the name we choose (can be any other name)
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage"; //move the styled components css code to this place
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      {/* container is the main index.css and page belongs to styled.component */}
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking </span>app
          </h1>
          <p>
            Raw denim JOMO truffaut pour-over cupping ethical adaptogen art
            party, butcher shaman actually polaroid dreamcatcher drinking
            vinegar helvetica. Meditation everyday carry brunch venmo. Tbh
            everyday carry normcore sus coloring book occupy vibecession bodega
            boys helvetica fam pok pok swag thundercats gentrify.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
