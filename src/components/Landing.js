import React, { useEffect, useState } from 'react';

import { getCoins } from '../apis/api';
import Loading from './Loading';
import Coin from './shared/Coin';

const Landing = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCoins(await getCoins());
    };
    fetchAPI();
  }, []);
  console.log(coins);
  return <>{coins.length ? coins.map(coin=><Coin key={coin.id} data={coin} />) : <Loading />}</>;
};

export default Landing;
