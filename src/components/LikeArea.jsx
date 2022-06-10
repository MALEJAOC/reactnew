import {useState} from 'react';
import Button from './Button';

/**
 * The function LikeArea() returns a React component that displays a button that increments a counter
 * and another button that decrements the counter.
 * @returns A function that returns a JSX element.
 */
const LikeArea = () => {
    const [contadorLike, setContadorLike] = useState(0)
    function incrementarLike() {
        setContadorLike(previo => previo + 1)
    }
    function restarLike() {
        setContadorLike(previo => previo - 1)
    }
    return (
        <>
            <Button onClick={incrementarLike} name="+ likes" />
            <Button onClick={restarLike} name="- likes" />
            <h2>Esta página recibió {contadorLike} likes</h2>
        </>
    )
}

export default LikeArea