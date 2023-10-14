import "bootstrap/dist/css/bootstrap.css";

import React from 'react';
import "./App.css";

function Documentation() {
  return (
    <div className="documentation">
        
        <br></br>
        <br></br>
      <h1>Documentation</h1>
      <br></br>
      <p>Create a responsive webpage that displays the date and time using data fetched from the http://worldtimeapi.org/api/timezone/Asia/Kolkata API. Additionally,<br></br> the webpage should allow users to toggle between a vertical and horizontal arrangement of the date and time component.</p>
      <h1>Project Structure</h1>
      <p>
src/: Main source code directory.<br></br>
components/: Contains React components.<br></br>
App.js: Main application component.<br></br>
App.css: Main application CSS.<br></br>
public/: Public files.<br></br>
index.html: HTML template<br></br>
      </p>
      <h1>Components</h1>
      <br></br>
      <h2>1. DateTimeDisplay Component</h2>
      <p>
      Located in src/components/DateTimeDisplay.js.<br></br>
Renders the date and time component.<br></br>
Receives props for date and time.<br></br>
Uses Bootstrap classes for styling.<br></br>
      </p>
      <h2>2. App Component</h2>
      <p>
      Main application component.
Uses the Axios library to fetch data from the World Time API.<br></br>
Manages the state for date, time, and layout (vertical/horizontal).<br></br>
Renders the "Click Me" button and the DateTimeDisplay component.<br></br>
Implements the logic for switching between vertical and horizontal layouts.<br></br>
      </p>


      
    </div>
  );
}

export default Documentation;
