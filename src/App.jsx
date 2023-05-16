import "./App.css";
import MainContainer from "./components/MainContainer";
import Header from "./shared/Header";

function App() {
  return (
    <body>
      <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        {/* <!-- header --> */}
        <Header />
        <MainContainer />
      </div>
    </body>
  );
}

export default App;
