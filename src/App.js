//Librairies
import './App.css';
import React from "react";

//Components
import AppRouter from "./AppRouter";
import Layout from "./HOC/Layout/Layout";


function App() {
  return (
    <div className="App">
      <Layout>
        <AppRouter />
      </Layout>

    </div>
  );
}

export default App;