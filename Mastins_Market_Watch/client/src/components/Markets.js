import { BASE_URL } from "../globals";
import axios from 'axios'
import UserWatchList from "./UserWatchListDetails";

export default function Markets() {
    const API_KEY = process.env.REACT_APP_MS_API_KEY; 
    
    async function getEndOfDay() {
        try {
            const response = await axios.get(`${BASE_URL}eod?access_key=${API_KEY}&symbols=AAPL`);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    async function getStockTicker() {
        try {
            const response = await axios.get(`${BASE_URL}tickers?access_key=${API_KEY}`);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }


    async function getExchange() {
        try {
            const response = await axios.get(`${BASE_URL}exchanges?access_key=${API_KEY}`);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    async function getCurrency() {
        try {
            const response = await axios.get(`${BASE_URL}currencies?access_key=${API_KEY}`)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div className="markets">
        <button onClick={getEndOfDay}>
            Get End of Day Report
        </button>
        <button onClick={getStockTicker}>
            Get Stock Information
        </button>
        <button onClick={getExchange}>
            Get Information on the Exchanges
        </button>
        <button onClick={getCurrency}>
            Get Information on Different Currencies
        </button>
        </div>
    )
}