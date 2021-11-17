import React, { useEffect, useState } from 'react';

import { getCoins } from '../apis/api';

const Landing = () => {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCoin(await getCoins());
    };
    fetchAPI();
  }, []);
  console.log(coin);
  return <div>Landing Page</div>;
};

export default Landing;
