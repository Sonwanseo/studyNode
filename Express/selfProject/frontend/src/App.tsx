import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [text, setText] = useState<string>();

  useEffect(() => {
    getText();
  }, [])

  const getText = async () => {
    await axios.get('http://localhost:8080').then((response) => {
      setText(response.data.msg);
    });
  }

  return (
    <div className="App">
      {text}
    </div>
  );
}

export default App;
