import { get } from './api.js';

export async function getAllShoes() {
    return await get('/data/shoes?sortBy=_createdOn%20desc');
}