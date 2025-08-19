import React, { use, useEffect } from "react";
// import countriesData from "../countriesData";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = React.useState([]);

  // const [filteredData,setQuery]=useFilter(data,()=>{""});

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,flags,population,tld,languages,currencies,borders"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountriesData(data);
      });
    return () => {
      console.log("Cleanup if necessary");
    };
  }, []);

  return (
    <>
      {!countriesData.length ? (
        <CountriesListShimmer />
      ) : (
        <div className="countries-container">
          {Array.isArray(countriesData) &&
            countriesData
              .filter((country) =>
                country.name.common.toLowerCase().includes(query) ||
                country.region.toLowerCase().includes(query)
              )
              .map((country) => {
                return (
                  <CountryCard
                    key={country.name.common}
                    name={country.name.common}
                    flag={country.flags.png}
                    population={country.population.toLocaleString("en-IN")}
                    region={country.region}
                    capital={country.capital?.[0]}
                    data={country}
                  />
                );
              })}
        </div>
      )}
    </>
  );
}
