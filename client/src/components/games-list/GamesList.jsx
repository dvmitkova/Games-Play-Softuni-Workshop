import { useEffect, useState } from 'react'; //node-modules frameworks

import * as gamesAPI from '../../api/gamesAPI'; //utils/services - non-component files

import GamesListItem from './games-list-item/GamesListItem';//component files

export default function GamesList() {
    const [games, setGames] = useState([]);

    useEffect(() => {//! НЕ ПРИЕМА ПРОМИС
        (async () => {
            const result = await gamesAPI.getAll();

            setGames(result);
        })();
    }, []);

    return (
        <section id="catalog-page">
        <h1>All Games</h1>
            {games.length > 0
                ? games.map(game => <GamesListItem key={game._id} {...game} />)
                : <h3 className="no-articles">No games yet</h3>
            }
    </section>
    )
}