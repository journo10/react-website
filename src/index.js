import React from "react";
import { createRoot } from "react-dom/client"; //REACT 18
import "./index.css";
import App from "./App";
import { HomeProvider } from "./contexts/HomeContext";
import { VideoProvider } from "./contexts/VideoContext";
import { PodcastProvider } from "./contexts/Podcast";

//REACT 18
const root = createRoot(document.getElementById("root"));
root.render(
    <HomeProvider>
        <VideoProvider>
            <PodcastProvider>
                <App />
            </PodcastProvider>
        </VideoProvider>
    </HomeProvider>
);

