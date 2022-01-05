import Footer from "./components/Footer";
import Header from "./components/Header";
import Todos from "./components/Todos";

const App = () => {
  return (
    <>
      <Header title="Todo App" />
      <Todos />
      <Footer />
    </>
  );
};

export default App;
