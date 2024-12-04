import { useEffect, useState } from "react";

function UseCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/5695d3664defb0c1e9474f41/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.conversion_rates)) // Corrected data access
      .catch((err) => console.error(err));
  }, [currency]);

  return data;
}

export default UseCurrencyInfo;
