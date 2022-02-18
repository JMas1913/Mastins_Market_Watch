import { BASE_URL } from '../globals';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default function Markets() {
  const API_KEY = process.env.REACT_APP_MS_API_KEY;
  const [isEndOfDay, setEndOfDay] = useState('');
  const [isStockTicker, setStockTicker] = useState('');
  const [isExchange, setExchange] = useState('');
  const [isCurrency, setCurrency] = useState('');

  async function getEndOfDay() {
    try {
      const response = await axios.get(
        `${BASE_URL}eod?access_key=${API_KEY}&symbols=AAPL`
      );
      setEndOfDay(JSON.stringify(response.data.data));
      // console.log(response.data.data[0]);
    } catch (error) {
      console.error(error);
    }
  }

  async function getStockTicker() {
    try {
      const response = await axios.get(
        `${BASE_URL}tickers?access_key=${API_KEY}`
      );
      setStockTicker(JSON.stringify(response.data.data));
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  async function getExchange() {
    try {
      const response = await axios.get(
        `${BASE_URL}exchanges?access_key=${API_KEY}`
      );
      setExchange(JSON.stringify(response.data.data));
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  async function getCurrency() {
    try {
      const response = await axios.get(
        `${BASE_URL}currencies?access_key=${API_KEY}`
      );
      setCurrency(JSON.stringify(response.data.data));
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="market-button">
      <button onClick={getEndOfDay}>Get End of Day Report</button>
      <button onClick={getStockTicker}>Get Stock Information</button>
      <button onClick={getExchange}>Get Information on the Exchanges</button>
      <button onClick={getCurrency}>
        Get Information on Different Currencies
      </button>
      <p>{isEndOfDay}</p>
      <p>{isStockTicker}</p>
      <p>{isExchange}</p>
      <p>{isCurrency}</p>
    </div>
  );
}
