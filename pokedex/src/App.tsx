import Header from "./Components/Header";
import "./Styles/index.css";
import { AppRoutes } from "./Routes/routes";

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
