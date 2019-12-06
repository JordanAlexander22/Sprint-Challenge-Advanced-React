import React from 'react';
import useDarkMode from '../hooks/UseDarkMode';

const DarkMode = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };
    return (
        <div className="darkModeToggle">
            <button
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
            />
        </div>
    );
  };
  
  export default DarkMode;