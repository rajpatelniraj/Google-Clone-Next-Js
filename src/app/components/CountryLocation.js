"use client";
import React, { useState, useEffect } from "react";

const CountryLocation = () => {
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch(
          `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_LOCATION_API_KEY}`
        );
        if (response.ok) {
          const data = await response.json();
          setCountry(data.country || "Unknown");
        } else {
          throw new Error("Failed to fetch location data.");
        }
      } catch (error) {
        console.error(error);
        setCountry("Unknown");
      }
    };
    fetchLocation();
  }, []);

  return <div>Your country: {country}</div>;
};

export default CountryLocation;

