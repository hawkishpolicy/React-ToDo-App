import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {NavBar, Home, TodoApp, NoteApp} from './'

function Main() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/to-do" element={<TodoApp />} />
      <Route path="/notes" element={<NoteApp />} />
    </Routes>
    </>
  )
}

export default Main