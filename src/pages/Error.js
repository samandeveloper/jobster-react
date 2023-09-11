import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg"; //svg image on the error page
import Wrapper from "../assets/wrappers/ErrorPage"; //styled components css

const Error = () => {
  return (
    //'full-page' is the global (default) css className
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        {/* fo now the link below goes to the dashboard page--we supposed that the user is logged in */}
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
