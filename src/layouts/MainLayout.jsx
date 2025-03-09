/* eslint-disable react/prop-types */
import MobileFooter from "../components/MobileFooter"
import Sidebar from "../components/Sidebar"
function MainLayout({ children }) {
  return (
    <>
      <MobileFooter/>
      <Sidebar/>
      <div className="content">{children}</div>
    </>
  );
}

export default MainLayout;
