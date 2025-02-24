import "./styles.css";
import AppRoutes from "./components/Routes";
import SideBar from "./components/SideBar/SideBar";

export default function App() {
  return (
    <div className="App">
      <div className="background">
        <AppRoutes />
      </div>
    </div>
  );
}
