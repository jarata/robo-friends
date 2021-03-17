import React from 'react';

const Card = () => {
    return (
        <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
            <img src="https://robohash.org/test?200x200" alt="photo"/>
            <div>
                <h2>Jane Doe</h2>
                <p>jane@doe.com</p>
            </div>
        </div>
    )
}

export default Card;