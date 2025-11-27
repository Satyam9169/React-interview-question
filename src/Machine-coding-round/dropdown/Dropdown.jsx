import React, { useState } from "react";

const Dropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const countryData = [
    {
      country: "India",
      cities: ["Mumbai", "Delhi", "Bengaluru", "Kolkata", "Chennai"],
    },
    {
      country: "United States",
      cities: [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "San Francisco",
      ],
    },
    {
      country: "United Kingdom",
      cities: ["London", "Manchester", "Birmingham", "Liverpool", "Leeds"],
    },
    {
      country: "Canada",
      cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
    },
    {
      country: "Australia",
      cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    },
    {
      country: "Germany",
      cities: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne"],
    },
    {
      country: "France",
      cities: ["Paris", "Lyon", "Marseille", "Toulouse", "Nice"],
    },
    {
      country: "Japan",
      cities: ["Tokyo", "Osaka", "Kyoto", "Yokohama", "Sapporo"],
    },
    {
      country: "Brazil",
      cities: [
        "São Paulo",
        "Rio de Janeiro",
        "Brasília",
        "Salvador",
        "Fortaleza",
      ],
    },
    {
      country: "United Arab Emirates",
      cities: ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman"],
    },
  ];

  // Get selected country object
  const selectedCountryData = countryData.find(
    (item) => item.country === selectedCountry
  );

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <>
      <select value={selectedCountry} onChange={handleChange}>
        <option value="">--select--</option>
        {countryData.map((item) => (
          <option value={item.country} key={item.country}>
            {item.country}
          </option>
        ))}
      </select>

      {/* Show cities only if a country is selected */}
      {selectedCountryData && (
        <>
          <h2>Cities in {selectedCountryData.country}</h2>
          <ul>
            {selectedCountryData.cities.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Dropdown;
