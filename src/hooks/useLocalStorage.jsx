import React from 'react'
import { useState, useEffect } from 'react'
export function useLocalStorage(initialState, key) {
    const [value, setValue] = useState(function() {
        const storedVal = localStorage.getItem(key);
        return storedVal ? JSON.parse(storedVal) : initialState
    })
    useEffect(function() {
        localStorage.setItem(key, JSON.stringify(value));

    }, [key, value])

    return [value, setValue]
}
