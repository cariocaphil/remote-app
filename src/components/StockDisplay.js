import React, { useEffect, useState } from "react";

const tileStyle = {
  backgroundColor: "#ffffff",
  padding: "20px",
  margin: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  maxWidth: "400px",
  textAlign: "center",
  transition: "transform 0.2s ease-in-out",
};

const tileHoverStyle = {
  transform: "scale(1.05)",
};

const StockDisplay = ({ stockId }) => {
  const [stockPrice, setStockPrice] = useState(null);
  const [marketStats, setMarketStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch Global Market Stats (On Mount)
  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/global")
      .then((response) => response.json())
      .then((data) => {
        setMarketStats(data.data);
      })
      .catch((error) => console.error("Error fetching market data:", error));
  }, []); // Runs only on mount

  // ✅ Fetch Stock Price (When `stockId` changes)
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${stockId}&vs_currencies=usd`)
      .then((response) => response.json())
      .then((data) => {
        setStockPrice(data[stockId]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [stockId]); // Runs when stock selection changes

  return (
    <div style={tileStyle}
      onMouseEnter={(e) => (e.currentTarget.style.transform = tileHoverStyle.transform)}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
      <h2>Remote-App:</h2>
      <h3>Stock Information</h3>
      {loading && <p>Loading stock price...</p>}
      {error && <p>Error: {error}</p>}
      {stockPrice && (
        <p>
          Current Price: <strong>${stockPrice.usd}</strong>
        </p>
      )}

      <h3>Global Market Overview</h3>
      {marketStats ? (
        <p>
          Total Market Cap: <strong>${marketStats.total_market_cap.usd.toLocaleString()}</strong>
        </p>
      ) : (
        <p>Loading market data...</p>
      )}
    </div>
  );
};

export default StockDisplay;
