import React from 'react'
import SignInPage from '../../Pages/SignInPage'
import { Outlet } from 'react-router-dom'

export default function PriviteRouter() {
    const token = {"auth": true}
  return (
    token.auth ? <Outlet/> : <SignInPage/>
  )
}
