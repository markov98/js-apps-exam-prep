import { del, get, post, put } from './api.js';

export async function getAllShoes() {
    return await get('/data/shoes?sortBy=_createdOn%20desc');
}

export async function getShoeById(id) {
    return get("/data/shoes/" + id);
}

export async function addShoe(data) {
    return post("/data/shoes/", data);
}

export async function updateShoeById(id, data) {
    return put("/data/shoes/" + id, data);
}

export async function deleteShoeById(id) {
    return del("/data/shoes/" + id);
}

export async function search(query) {
    return get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`);
  }