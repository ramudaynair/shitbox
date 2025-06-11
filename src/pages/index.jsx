import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React from 'react'
import Loginform from '../../../components/form/Loginform'
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

function index() {
  const [name, setName] = useState("");
  console.log("Name", name);
  const [password, setPassword] = useState("");
  console.log("Password", password);
  const [email, setEmail] = useState("");
  console.log("Email", email);

  function handleName(event) {
    setName(event.target.value);
  }

  function handlePass(event) {
    setPassword(event.target.value);
  }

  function handleEmail(event){
    setEmail(event.target.value);
  }
  function handleSubmit(){
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    
    }
    console.log("Submitted");
  }

  return (
    <>
      <h1>welcome back</h1>
      <p>Enter your username</p><input type='text' onChange={handleName} />
      <p>Enter your password</p><input type='password' onChange={handlePass} />
      <br/>
      <button onClick={handleSubmit}>Submit</button>
      <Loginform formname={name} formpassword={password}/>
    </>

  );
}
}