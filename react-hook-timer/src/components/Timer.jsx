import {useEffect, useState} from 'react';

export const Timer = ({start , end}) => {
    const [counter, setCounter] = useState(start);
    useEffect(() => {
        const id = setInterval(() => {
            setCounter((P) => {
                if( P >= end){
                    clearInterval(id)
                    return "ENDED";
                }
                return P+1
            })
        },1000);
        return ()=> {
            clearInterval(id)
        }
    },[])
    return (
        <div>
           
            <h3>Timer is : {counter}</h3>

        </div>
    )
}