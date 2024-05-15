import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navbar/Nav";
import Navbar from "../components/Navbar/Navbar";
const Root = () => {
  return (
    <div>
      {/* <Nav></Nav> */}
      <Navbar></Navbar>
        <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
