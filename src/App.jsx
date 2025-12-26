import { Outlet } from "react-router";
import Navbar from "./componets/Shared/Navbar";
import Footer from "./componets/Shared/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-300px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
