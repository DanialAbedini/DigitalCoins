import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { getCoins } from '../apis/api';
import Loading from './Loading';
import Coin from './shared/Coin';
// Styles
import styles from "./Landing.module.css";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [pageNumber,setPageNumber]=useState(0);
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

    //! paginate
  const coinPerPage = 20;
  const coinVisited = coinPerPage * pageNumber;
  const displayCoin = filteredCoin.slice(coinVisited,coinVisited+coinPerPage);
  const pageCount   = Math.ceil(filteredCoin.length/coinPerPage);
  const pageHanlder = ({selected})=>{
    setPageNumber(selected);
  }

  return <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}}>
  <input className={styles.input} placeholder="Search" type="text" value={search} onChange={searchHandler}/>
  {coins.length ?  <div className={styles.coinContainer}>
  {displayCoin.map(coin=><Coin key={coin.id} data={coin} />)}
  </div> : <Loading />}
  <ReactPaginate
  previousLabel={"Previous"}
  nextLabel={"Next"}
  pageCount={pageCount}
  onPageChange={pageHanlder}
  pageRangeDisplayed={0}
  marginPagesDisplayed={0}
  breakLabel=""
  containerClassName={styles.paginateContainer}
  pageClassName={styles.pagiante}
  nextClassName={styles.btnpaginate}
  previousClassName={styles.btnpaginate}
  />
  </div>;
};

export default Landing;
