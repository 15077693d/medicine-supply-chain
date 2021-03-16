import { useState } from 'react';

const useForm = (init) => {
    const [pair, setPair]= useState(init)
    const changeValue =  (key,value) => {
        let newPair = JSON.parse(JSON.stringify(pair))
        newPair[key] = value
        setPair(newPair)
    }
    return [pair, changeValue];
};

export default useForm;