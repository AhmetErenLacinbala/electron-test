import { useState, useEffect } from 'react';

const ipcRenderer = window.reqiure('electron').ipcRenderer;

function App() {
  useEffect(() => {});
  function handleChange(val) {
    setValue(val);
    window.testApi.test('asd');
    //ipcRenderer.send('test', 'klejwkew');
  }
  const [value, setValue] = useState('abc');

  return (
    <div className="container mt-2">
      <div className="form-group mt-4 mb-2">
        <input
          value={value}
          onChange={e => {
            handleChange(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default App;
