import "./App.css";
import MainContainer from "./components/MainContainer";
import Header from "./shared/Header";

function App() {
  return (
    <main>
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        {/* <!-- header --> */}
        <Header />
        <MainContainer />
      </div>
    </main>
  );
}

export default App;
