import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  useEffect(async() => {
    const ax=await axios.post("http://localhost:3001/createdata", {
      "name": "blakpjohn",
      "city": "ekm",
      "age": 19
    })
    console.log("Response from server", ax);
  }, []);


  return (
    <>

    </>

  );
}
