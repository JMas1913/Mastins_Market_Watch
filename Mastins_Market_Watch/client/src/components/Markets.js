import { BASE_URL } from '../globals';
import { useState } from 'react';
import axios from 'axios';

export default function Markets() {
  const API_KEY = process.env.REACT_APP_MS_API_KEY;
  const lowOrHi = document.querySelector('.lowOrHi');
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
            // if (row.close > row.open) {
            //   row.close.style.background = 'green'
            //   lowOrHi.textContent = ''
            // } else {
            //   row.close.style.background = 'red'
            //   lowOrHi.textContent = ''
            // }
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
      setStockTicker(
        response.data.data.map((row) => {
          return (
            <tr>
              <td>{row.name}</td>
              <td>{row.symbol}</td>
              <td>{row.stock_exchange.acronym}</td>
            </tr>
          );
        })
      );
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
      setExchange(
        response.data.data.map((row) => {
          return (
            <tr>
              <td>{row.acronym}</td>
              <td>{row.country}</td>
              <td>{row.city}</td>
            </tr>
          );
        })
      );
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
      setCurrency(
        response.data.data.map((row) => {
          return (
            <tr>
              <td>{row.name}</td>
              <td>{row.code}</td>
              <td>{row.symbol}</td>
            </tr>
          );
        })
      );
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

      <table>
        <tr>
          <th>Name</th>
          <th>Symbol</th>
          <th>Stock Exchange</th>
        </tr>
        {dataStockTicker}
      </table>

      <table>
        <tr>
          <th>Acronym</th>
          <th>Country</th>
          <th>City</th>
        </tr>
        {dataExchange}
      </table>

      <table>
        <tr>
          <th>Name</th>
          <th>Code</th>
          <th>Symbol</th>
        </tr>
        {dataCurrency}
      </table>
    </div>
  );
}
