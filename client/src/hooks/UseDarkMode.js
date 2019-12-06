import { useState, useEffect } from 'react'

export default function useDarkMode() {
    const [darkMode, setDarkMode] = useState('dark')

    useEffect(() => {
        return darkMode
            ? document.body.classList.add('darkModeToggle')
            : document.body.classList.remove('darkModeToggle')
    }, [darkMode])
    return [darkMode, setDarkMode]
}