import "./App.scss";
// import Routes from "./navigation/Routes";
import RegisterPage from "./pages/RegisterPage";
import ProjectListPage from "./pages/ProjectListPage/ProjectListPage";
import Navbar from "./client/Navbar";
// import Inputs from "./shared/components/Input";
// import Buttons from "./shared/components/Buttons";
import Sidebar from "./shared/components/Sidebar";
// import Datepicker from "./shared/components/Datepicker";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Routes /> */}
      <Sidebar />
      {/*<Buttons />
      <Inputs />
      <Datepicker /> */}
    </div>
  );
}

export default App;
