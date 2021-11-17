import React from 'react';
import styles from "./Coin.module.css";
const Coin = ({data}) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={data.image} alt="" />
            <span className={styles.name}>{data.name}</span>
            <span className={styles.symbol}>{data.symbol.toUpperCase()}</span>
            <span className={styles.currentPrice}>{data.current_price.toLocaleString()} $</span>
            <span className={data.price_change_percentage_24h > 0 ? styles.greenPriceChange : styles.redPriceChange}>{data.price_change_percentage_24h}</span>
            <span className={styles.marketCap}>{data.market_cap.toLocaleString()} $</span>
        </div>
    );
};


export default Coin;