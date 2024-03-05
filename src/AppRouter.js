//Librairies
import React from "react";
import { Routes, Route } from "react-router-dom";


//Components

import Home from "./Pages/Home/Home";
import Activities from "./Pages/Activities/Activities";
import Birthday from "./Pages/Birthday/Birthday";
import Groups from "./Pages/Groups/Groups";
import Restaurant from "./Pages/Restaurant/Restaurant";
import Contact from "./Pages/Contact/Contact";
import Error from "./Pages/Error/Error"



function AppRouter() {
    return (
        
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/activites" element={<Activities />} />
                    <Route path="/anniversaires" element={<Birthday />} />
                    <Route path="/groupes" element={<Groups />} />
                    <Route path="/restaurant" element={<Restaurant />} />
                    <Route path="/contact" element={<Contact />} />

            </Routes>
        
    );
}


export default AppRouter;