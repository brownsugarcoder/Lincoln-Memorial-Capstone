import React, { useState } from 'react';


  function Toggle() { 
    const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
    return (
      <div className={darkMode ? 'App dark-mode' : 'App'}>
      <h1></h1>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
    );
  };

  export default Toggle;