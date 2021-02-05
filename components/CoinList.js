import Coins from "../components/Coins/Coins";

export default function Coinlist({ filterCoins }) {
  return (
    <>
      {filterCoins.map((coin) => {
        console.log(coin.current_price)
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price={coin.current_price.toLocaleString("en", {
              style: "currency",
              currency: "INR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
            high={coin.high_24h.toLocaleString("en", {
              style: "currency",
              currency: "INR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
            low={coin.low_24h.toLocaleString("en", {
              style: "currency",
              currency: "INR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
            volume ={coin.total_volume}
          />
        );
      })}
    </>
  );
}
