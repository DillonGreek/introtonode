import chalk from 'chalk';
import main, {configs} from './main.js';
import axios from 'axios';
import { config} from 'dotenv';

config();
console.log(process.env.API_KEY);

let api_url = `api url ${process.env.API_KEY}`;

axios.get(api_url)
.then ( res =>{
    console.log(res.data);
})