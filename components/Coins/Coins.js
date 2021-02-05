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
         
              <img src={image} alt={name} className={styles.coin_img} />
              <ul className={styles.list}>
              <h1 className={styles.coin_h1}>{name}</h1>
              <h5 className={styles.coin_symbol}>{symbol}</h5>
              </ul>
              
           
            <div className={styles.coin_data}>
            <ul className={styles.list}>
                <li>Percentage</li>
                <li>
                  {" "}
                  {priceChange < 0 ? (
                    <p className={(styles.coin_percent, styles.red)}>
                      - {priceChange.toFixed(2)}%
                    </p>
                  ) : (
                    <p className={(styles.coin_percent, styles.green)}>
                      + {priceChange.toFixed(2)}%
                    </p>
                  )}
                </li>
              </ul>
              <ul>
                <p className={styles.coin_price}>Price</p>
                <p className={styles.coin_price}>${price}</p>
              </ul>
              <p className={styles.coin_marketcap}>
                24h
                <ul className={styles.list}>
                  <li className={styles.green}>High {high.toLocaleString()}</li>
                  <li className={styles.red}>Low {low.toLocaleString()}</li>
                </ul>
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Coins;
