import {useEffect, useState} from 'react';

export const Timer = () => {
    const [counter, setCounter] = useState(8);
    useEffect(() => {
        const id = setInterval(() => {
            setCounter((P) => {
                if( P === 0){
                    clearInterval(id)
                    return 0;
                }
                return P-1
            })
        },1000);
        return ()=> {
            clearInterval(id)
        }
    },[])
    return (
        <div>
           
            <h3>Counter is : {counter}</h3>

        </div>
    )
}