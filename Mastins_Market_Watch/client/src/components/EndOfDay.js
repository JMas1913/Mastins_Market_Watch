import { BASE_URL } from '../globals';
import { useState } from 'react';
import axios from 'axios';

export default async function EndOfDay() {
  const API_KEY = process.env.REACT_APP_MS_API_KEY;
  const [dataEndOfDay, setEndOfDay] = useState('');

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

  return (
    <table>
      <tr>
        <th>Date</th>
        <th>Symbol</th>
        <th>Open</th>
        <th>Close</th>
      </tr>
      {dataEndOfDay}
    </table>
  );
}
