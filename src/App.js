import Footer from "./components/Footer";
import Header from "./components/Header";
import Todos from "./components/Todos";

const App = () => {
  var random_boolean = Math.random() < 0.5;
  return (
    <>
      <Header title={"Todo App"} searchBar={random_boolean} />
      <Todos />
      <Footer />
    </>
  );
};

export default App;
