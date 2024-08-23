import { useEffect, useState } from "react";

function useCurrencyInfo(currency = "usd") {

    const [Data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency])
    return Data
}

export default useCurrencyInfo