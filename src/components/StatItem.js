//this file show the items inside the dashboard>stats page> StatsContainer.js
import Wrapper from "../assets/wrappers/StatItem";

//pull out all the properties in the components>StatsContainer.js
const StatItem = ({ count, title, icon, color, bcg }) => {
  return (
    // pass the color and bcg as props in the Wrapper. On the other hand in assets>wrappers>StatItem.js we pass the props
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h5 className="title">{title}</h5>
    </Wrapper>
  );
};
export default StatItem;
