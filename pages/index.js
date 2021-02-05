import CoinList from "../components/CoinList";
import Coins from "../components/Coins/Coins";
import SearchBar from "../components/SearchBar/index";

export default function Home({ filterCoins }) {
  return (
    <div>
      {/*   <SearchBar type="text" placeholder="Search"></SearchBar> */}
      <CoinList filterCoins={filterCoins}></CoinList>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=50&page=1&sparkline=false"
  );
  const filterCoins = await res.json();
  return {
    props: {
      filterCoins,
    },
  };
};
