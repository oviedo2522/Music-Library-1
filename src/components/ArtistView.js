import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

function ArtistView() {
    const { id } = useParams();
    const [ artistDta, setArtistData ] = useState ([])

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Artist Data Goes Here!</p>
        </div>
    )
}

export default ArtistView