import { BASE_URL } from '../globals';
import { useState } from 'react';
import axios from 'axios';

export default function Markets() {
  const API_KEY = process.env.REACT_APP_MS_API_KEY;
  const [dataEndOfDay, setEndOfDay] = useState('');
  const [dataStockTicker, setStockTicker] = useState('');
  const [dataExchange, setExchange] = useState('');
  const [dataCurrency, setCurrency] = useState('');

  async function getEndOfDay() {
    try {
      const response = await axios.get(
        `${BASE_URL}eod?access_key=${API_KEY}&symbols=AAPL`
      );
      console.log(response.data.data);
      setEndOfDay(
        response.data.data.map((row) => {
          return (
            <tr>
              <td>{row.date}</td>
              <td>{row.symbol}</td>
              <td>${row.open}</td>
              <td>${row.close}</td>
            </tr>
          );
        })
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function getStockTicker() {
    try {
      const response = await axios.get(
        `${BASE_URL}tickers?access_key=${API_KEY}`
      );
      setStockTicker(JSON.stringify(response.data.data, null, 2));
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
      setExchange(JSON.stringify(response.data.data, null, 2));
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
      setCurrency(JSON.stringify(response.data.data, null, 2));
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

      <table>
        <tr>
          <th>Date</th>
          <th>Symbol</th>
          <th>Open</th>
          <th>Close</th>
        </tr>
        {dataEndOfDay}
      </table>

      <p>{dataStockTicker}</p>
      <p>{dataExchange}</p>
      <p>{dataCurrency}</p>
    </div>
  );
}
