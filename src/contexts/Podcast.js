import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const PodcastContext = createContext();

export const PodcastProvider = ({ children }) => {
    const [podcast, setPodcast] = useState([]);

    useEffect(() => {
        getPodcastData()
    }, [])

    const getPodcastData = async () => {
        try {
            await axios.get("http://localhost:5000/podcast")
                .then((res) => {
                    setPodcast(res.data)
                    //console.log(res.data);
                }).catch((error) => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }

    const values = {
        podcast,
        setPodcast
    };

    return (
        <PodcastContext.Provider value={values}>{children}</PodcastContext.Provider>
    );
};

export const PodcastTheme = () => useContext(PodcastContext);