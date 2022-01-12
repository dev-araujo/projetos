import Layout from "./layout/index";
import GlobalState from "./global/GlobalState";
const App = () => {
  return (
    <GlobalState>
      <Layout />
    </GlobalState>
  );
};

export default App;
