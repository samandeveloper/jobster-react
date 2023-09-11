//this file is related to the dashboard>stats page the charts on the button
//in fact we have two charts one is Area chart and the other one is Bar chart (when we click on one of them it toggles to the other one)
import React, { useState } from "react"; //we need useState since we use local state value in this file
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { useSelector } from "react-redux"; //because we want to grab monthlyApplications from the initialState

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true); //we want the local state to change the Area chart and Bar chart to each other- by default we display Bar chart
  const { monthlyApplications : data } = useSelector((store) => store.allJobs); //data is the alias name. we want to know how many applications we sent out in the last 6 month
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      {/* when we have the bar chart we want to show the Area chart button and vise versa */}
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};
export default ChartsContainer;
