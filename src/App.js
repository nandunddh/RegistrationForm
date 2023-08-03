import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Create from './Components/Create'
import Navbar from './Components/Navbar'
import AbstractSubmission from './Components/AbstractSubmission'
import { MyContext } from './MyContext';
import Payment from './Components/Payment'
import Test from './Components/Test'
import ListOfRegistrations from './Components/List/ListOfRegistrations'
import Login from './Auth/Login'
import EditList from './Components/List/EditList'
import DeleteList from './Components/List/DeleteList'
import Profile from './Components/Profile'
import Fileupload from './Components/Fileupload/Fileupload'
import EditReg from './Components/Registration/EditReg'
import Register from './Components/Registration/Register'

const App = () => {
  const [Finaldata, setFinaldata] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [login, setLogin] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [registrationType, setRegistrationType] = useState("Early Bird");
  return (
    <>
      <MyContext.Provider value={{ Finaldata , setFinaldata , totalPrice , setTotalPrice , login , setLogin, isAdmin, setIsAdmin, registrationType, setRegistrationType }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='create' element={<Create />} />
          <Route path='abstract_submission' element={<AbstractSubmission />} />
          <Route path='register' element={<Register />} />
          <Route path='payment' element={<Payment />} />
          <Route path='test' element={<Test />} />
          <Route path='listofreg' element={<ListOfRegistrations />} />
          <Route path='editList' element={<EditList />} />
          <Route path='deleteList' element={<DeleteList />} />
          <Route path='login' element={<Login />} />
          <Route path='profile' element={<Profile />} />
          <Route path='test' element={<Test />} />
          <Route path='editreg' element={<EditReg />} />
          <Route path='fileupload' element={<Fileupload />} />
        </Routes>
      </MyContext.Provider >
    </>
  )
}

export default App