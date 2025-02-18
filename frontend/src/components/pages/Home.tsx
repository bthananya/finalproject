import React, { useState } from "react";
import Sidebar from "../css/Sidebar";


const Home: React.FC = () => {


    return (
        <Sidebar>
            <div className="text-center">
                <img src="src/assets/logo/logo_red.png" alt="Logo"/>
            </div>
        </Sidebar>
    );
};

export default Home;
