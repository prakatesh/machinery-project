import { Authenication } from "./Context/Auth";
import Routers from "./components/Routers/Routers";

function App() {
  return (
    <div>
      <Authenication>
      <Routers />
      </Authenication>
    </div>
  );
}

export default App;
