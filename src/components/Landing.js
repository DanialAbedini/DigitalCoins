import React, { useEffect, useState } from 'react';

import { getCoins } from '../apis/api';
import Loading from './Loading';
import Coin from './shared/Coin';

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search,setSearch]=useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      setCoins(await getCoins());
    };
    fetchAPI();
  }, []);

  const searchHandler = (e)=>{
    setSearch(e.target.value);
  }

  const filteredCoin = coins.filter(coin=>coin.name.toUpperCase().includes(search.toUpperCase()));

  return <>{coins.length ?  <div>
    <input placeholder="Search" type="text" value={search} onChange={searchHandler}/>
    {filteredCoin.map(coin=><Coin key={coin.id} data={coin} />)}
    </div> : <Loading />}</>;
};

export default Landing;
