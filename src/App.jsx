import Welcome from "./components/Body/Welcome";
import Navbar from "./components/Header/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto">
        <Welcome />
      </main>
    </>
  );
};

export default App;
