import React from 'react'

function Player({ player }) {
    const { country, name, searches } = player
    return (
        <li>
            <p>{name}</p>
            <p>{country}</p>
            <p>{searches} searches</p>
        </li>
    )
}

export default Player
