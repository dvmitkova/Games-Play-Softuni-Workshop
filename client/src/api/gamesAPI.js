import * as request from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/games'

export const getAll = async () => {
    const result = await request.get(BASE_URL);
    //Преобразуваме данните, които идват от сървъра, в масив
    const games = Object.values(result);
    return games;
}