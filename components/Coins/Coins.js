import styles from "./Coins.module.css";
import Link from "next/link";

const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
  high,
  low,
}) => {
  return (
    <div className={styles.coin_container}>
      <Link href="/coin/[id]" as={`/coin/${id}`}>
        <a>
          <div className={styles.coin_row}>
            <div className={styles.coin_header}>
            <img src={image} alt={name} className={styles.coin_img} />
            <ul className={styles.list}>
              <h4 className={styles.coin_h4}>{name}</h4>
              <p className={styles.coin_symbol}>{symbol}</p>
            </ul>
            </div>  
            <div className={styles.coin_data}>
              <ul className={styles.list}>
                <li>Percentage</li>
                <li>
                  {priceChange < 0 ? (<p className={(styles.coin_percent, styles.red)}>{priceChange.toFixed(2)}%</p>) : (
                    <p className={(styles.coin_percent, styles.green)}>+ {priceChange.toFixed(2)}%</p>)}
                </li>
              </ul>
              <ul className={styles.list}>
                <li className={styles.coin_price}>Price</li>
                <li className={styles.coin_price}>${price}</li>
              </ul>
            
                <ul className={styles.list}>
                <li className={styles.black}>24h</li>
                  <li className={styles.green}>High {high.toLocaleString()}</li>
                  <li className={styles.red}>Low {low.toLocaleString()}</li>
                </ul>
            
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Coins;
