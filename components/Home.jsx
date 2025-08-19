import React, { useContext, useEffect } from "react";
import React from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useState } from "react";

import "../App.css"; // Assuming you have a CSS file for styles
import { useTheme } from "../hooks/useTheme";

const Home = () => {
  const [query, setQuery] = useState("");

  const [isDark] = useTheme();

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar onChange={(e) => setQuery(e.target.value.toLowerCase())} />
        <SelectMenu setQuery={setQuery}/>
      </div>

      <CountriesList query={query} />
    </main>
  );
};

export default Home;
