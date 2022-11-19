import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";     
import "primereact/resources/themes/saga-blue/theme.css"   
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
