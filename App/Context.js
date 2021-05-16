import React, { useState, useEffect, createContext } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [topCurrency, setTopCurrency] = useState("CAD");
  const [bottomCurrency, setBottomCurrency] = useState("USD");
  const [allRates, setAllRates] = useState({});
  const [rate, setRate] = useState(0.0);

  const baseURL = "https://free.currconv.com";
  const APIKEY = "b12a276aeba8f2f55539";

  useEffect(() => {
    async function initData() {
      let response = await fetch(
        baseURL + "/api/v7/countries?apiKey=" + APIKEY
      );
      response = await response.json();

      let countries = new Set();
      Object.keys(response.results).forEach((key) => {
        countries.add(response.results[key].currencyId);
      });

      countries = [...countries].sort();
      setAllRates(countries);
    }

    initData();
    getCurrencyCoversion();
  }, []);

  useEffect(() => {
    getCurrencyCoversion();
  }, [topCurrency, bottomCurrency]);

  const getCurrencyCoversion = async () => {
    let response = await fetch(
      baseURL +
        `/api/v7/convert?q=${topCurrency}_${bottomCurrency},${bottomCurrency}_${topCurrency}&compact=ultra&apiKey=` +
        APIKEY
    );

    response = await response.json();
    //console.log(response);
    let currentCurrencyConverter = Object.keys(response);
    setRate(response[currentCurrencyConverter[0]]);
  };

  const contextValues = {
    topCurrency,
    setTopCurrency,
    bottomCurrency,
    setBottomCurrency,
    allRates,
    rate,
  };
  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};
