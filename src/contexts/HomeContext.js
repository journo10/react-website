import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
    const [homeData, setHomeData] = useState([]);

    useEffect(() => {
        getHomeData()
    }, [])

    const getHomeData = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/home")
            setHomeData(data)
            //console.log(data)
        } catch (error) {
            console.log(error);
        }
    }

    const values = {
        homeData,
        setHomeData
    };

    return (
        <HomeContext.Provider value={values}>{children}</HomeContext.Provider>
    );
};

export const HomeTheme = () => useContext(HomeContext);