import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReminderList from './components/ReminderList';
import { Reminder } from "./models/reminder"
import reminderService from "./services/reminder"
import NewReminder from './components/NewReminder';

function App() {
  const [reminders, setReminder] = useState<Reminder[]>([])

  useEffect(() => {
    loadReminders()
  },[])

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders()
    setReminder(reminders)
  }

  const removeReminder = (id:number) => {
    setReminder(reminders.filter(reminder => reminder.id !== id))
  }

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.addReminder(title)
    setReminder([newReminder, ...reminders])
  }
  return (
    <div className="App">
      <NewReminder onAddReminder = {addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder}/>
    </div>
  );
}

export default App;
