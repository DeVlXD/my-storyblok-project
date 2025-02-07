import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "./components/Page";
import Teaser from "./components/Teaser";
import Grid from "./components/Grid";
import Feature from "./components/Feature";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import NewHeader from "./components/NewHeader";
import NavbarComponent from "./components/NavbarComponent";
import HeadingSection from "./components/HeadingSection";
import MainContent from "./components/MainContent";
import MainFooter from "./components/MainFooter";

storyblokInit({
  accessToken: process.env.REACT_APP_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    hero_section: HeroSection,
    Header: Header,
    header: NewHeader,
    navbar: NavbarComponent,
    headingSection: HeadingSection,
    mainContent: MainContent,
    mainFooter: MainFooter,
  },
  apiOptions: {
    // for spaces located in the US or China:
    // region: "us" or "cn", // you need to specify the region
    region: ''
  }
});

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
