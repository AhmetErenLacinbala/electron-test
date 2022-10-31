const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('testApi', {
  // Invoke Methods
  testInvoke: args => ipcRenderer.invoke('test-invoke', args),
  // Send Methods
  testSend: args => ipcRenderer.send('test-send', args),
  // Receive Methods
  test: args => ipcRenderer.invoke('test', args)
});
