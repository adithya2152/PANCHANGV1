import PanchangContainer from "./components/PanchangContainer";
import React  , {useState} from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import InputArea from "./components/InputArea";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
// import Data from "./components/Data";


function App() {

  
  const [details , setDetails] = useState({
    date: "",
    time: ""
  })
  function checkPanchang(newDetails)
  {
    // console.log("call from cont")
    setDetails(newDetails)
  }

  let year, month, day, time;
  if (details.date) {
    const dateParts = details.date.split("-");
    year = dateParts[0];
    month = dateParts[1];
    day = dateParts[2];
    time = details.time;
  }
  // console.log(year , month , day , time)
  return (
    <Provider store = {store}>
    <div className="App">
      <Header/>
      <InputArea check = {checkPanchang}/>
      {details.date && details.time && (
        <PanchangContainer year={year} month={month} day={day} time={time} />
      )}
      {/* <Data/> */}
    </div>
    <Footer/>
    </Provider>
  );
}

export default App;
