import React from 'react';
import SignUp from './Components/SignUp';
import Navbar from './AllRoutes/Navbar';
import AllRoute from './AllRoutes/AllRoute';

function App(props) {


  return (
    <div>

      {/* <SignUp /> */}

      <Navbar />
      <AllRoute />
    </div>
  );
}

export default App;