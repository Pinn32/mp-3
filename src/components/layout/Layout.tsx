import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout() {
  return (
    <div id="page-wrapper">
      <Header />
      <div id="nav-main">
        <Navigation />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
