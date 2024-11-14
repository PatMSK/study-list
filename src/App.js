import React from 'react';
import './App.css';
import Clock from './components/Clock';
import TodoList from './components/TodoList';
import AudioPlayer from './components/songs';

function App() {
  return (
    <div className="min-h-screen bg-bg-pattern bg-cover font-sans antialiased">
      <Clock />
      <TodoList />
      <AudioPlayer />
    </div>

  );
}



export default App;
