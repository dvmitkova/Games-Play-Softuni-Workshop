import { useEffect, useState } from 'react';
import * as gamesAPI from '../../api/gamesAPI';
import GamesListItem from './games-list-item/GamesListItem';

export default function GamesList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gamesAPI.getAll()
            .then(result => setGames(result));
    }, []);

    return (
        <section id="catalog-page">
        <h1>All Games</h1>
        {/* <!-- Display div: with information about every game (if any) --> */}

   
            {games.map(game => <GamesListItem key={game._id} {...game} />)}
            
        {/* <!-- Display paragraph: If there is no games  --> */}
        <h3 className="no-articles">No articles yet</h3>
    </section>
    )
}