//adding bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
// using axios for fetching api
import Axios from "axios";
import { useEffect, useState } from "react";
import DateTimeDisplay from './DateTimeDisplay';
import Documentation from './Documentation'; // Import the Documentation component
import Footer from './Footer'; // Import the Footer component

function App() {
  const [dateTime, setDateTime] = useState({});
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    fetchDateTime();
  }, []);

  const fetchDateTime = async () => {
    try {
      const response = await Axios.get('https://worldtimeapi.org/api/timezone/Asia/Kolkata');
      const data = response.data;
      const date = new Date(data.utc_datetime);
      const time = date.toLocaleTimeString();
      const formattedDate = date.toDateString();
      setDateTime({ date: formattedDate, time });
    } catch (error) {
      console.error(error);
    }
  };

  const toggleLayout = () => {
    setIsHorizontal(!isHorizontal);
    fetchDateTime(); // Refresh date and time
  };

  return (
    <div className="App">

      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand">REACT NINJA</a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
          </div>
        </div>
      </nav>

      <div class="jumbotron text-center">
        <h1>Toggle button to update date and Time</h1>
      </div>
      <br>
      </br>
      <br></br>
      <button className="button" onClick={toggleLayout}>Click Me</button>
      <DateTimeDisplay dateTime={dateTime} isHorizontal={isHorizontal} />
      <Documentation />
      <Footer />


    </div>
  );
}


export default App;
