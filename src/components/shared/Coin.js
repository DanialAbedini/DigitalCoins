import React from 'react';

const Coin = ({data}) => {
    return (
        <div style={{margin:"2rem 10rem",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
            <img style={{width:"100px"}} src={data.image} alt="" />
            <span>{data.name}</span>
            <span>{data.symbol.toUpperCase()}</span>
            <span>{data.current_price.toLocaleString()} $</span>
            <span>{data.price_change_percentage_24h}</span>
            <span>{data.market_cap.toLocaleString()} $</span>
        </div>
    );
};


export default Coin;