import { useState, useEffect } from 'react';


function useKeyPress(targetKey: string) {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false);

    // If pressed key is our target key then set to true
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function downHandler({ key }) {
        console.log('targetKey:', targetKey);
        console.log('key:', key);
        if (key === targetKey) {
            console.log('target pressed');
            setKeyPressed(true);
        }
    }

    // If released key is our target key then set to false
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const upHandler = ({ key }) => {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };

    // Add event listeners
    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, [downHandler, upHandler]); // Empty array ensures that effect is only run on mount and unmount

    return keyPressed;
}

export default useKeyPress;
