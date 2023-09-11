//in the dashboard page there are parts that are not changing is this file like navbar and sidebar
import { Outlet } from "react-router-dom"; //we want to get the {Outlet} from ‘react-router-dom’ because we want to display the pages
import { BigSidebar, SmallSidebar, Navbar } from "../../components";
import Wrapper from "../../assets/wrappers/SharedLayout";

const SharedLayout = () => {
  //we have 2 columns: one of them is sidebar and the other is the navbar+content. so we should have 2 divs inside each other for the navbar+content
  //Note:when we use <Outlet /> after the <Navbar/> means that we have the navbar and after that we have children so the navbar is the parent and the stats,all jobs, add job, profile are the children.
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout;
