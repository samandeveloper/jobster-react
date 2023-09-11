//this file is related to the dashboard page>stats page>ChartContainer.js - below imports comes from https://recharts.org/en-US/examples/SimpleAreaChart
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const AreaChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      {/* data is the alias of the monthlyApplications in components>ChartsContainer.js */}
      <AreaChart data={data} margin={{ top: 50 }}>
        {/* cartesianGrid is the dotted lines in the chart */}
        <CartesianGrid strokeDasharray="3 3" />
        {/* dataKey="date" since in monthlyApplications array we have {date:...,count:...} so the X axis which shows the date */}
        <XAxis dataKey="date" />
        {/* we don't want the decimals in our chart */}
        <YAxis allowDecimals={false} />
        <Tooltip />
        {/* in the Y axis we shows count from the monthlyApplications array we have {date:...,count:...} 
        also 'stroke' is the line of the Area chart which is blue and 'fill' is the color we fill the chart with */}
        <Area type="monotone" dataKey="count" stroke="#1e3a8a" fill="#3b82f6" />
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default AreaChartComponent;
