import React from 'react';
import CardList from './components/CardList';
import {robots} from './data/Robots';

const App = () => {
    return (
        <div>
            <h1>Robo-Friends</h1>
            <CardList robots={robots} />
        </div>
    )
}

export default App;