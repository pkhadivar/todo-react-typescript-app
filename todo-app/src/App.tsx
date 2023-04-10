import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReminderList from './components/ReminderList';
import { Reminder } from "./models/reminder"


function App() {
  const [reminders, setReminder] = useState<Reminder[]>([{ id:1, title: "Reminder 1"}])
  return (
    <div className="App">
      <ReminderList items={reminders}/>
    </div>
  );
}

export default App;