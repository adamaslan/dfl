"use client"
// new chatbot 

import Head from "next/head";
import styles from "../styles/Layout.module.css";
import ContentCard from "../(components)/ContentCard"; 
import headerStyles from "../styles/Header.module.css";

import ThreeJSReactComponent from '../(components)/Logo3D';
import Chat from "../(components)/Chatbot";
import AstroChatbot from '../(components)/Chatbot2';
// import Chatbot3 from '../(components)/Chatbot3';
// import ChatApp from '../(components)/Chatbot4';
import ChatApp1 from '../(components)/Chatbot4';
export default function Home() {
  return (
    <>
      <Head>
        <title>Baby Daddy Beer Please</title>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/adamaslan/image/upload/v1667159646/drinksfoodlife/dfl-logo_vnu5xy.jpg"
        />
        <meta
          name="description"
          content="Drinks Food Life. A Bushwick based publication covering the tastiest things in NYC and the rest of the world."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div className={styles.gridcontainer4}>
        <div className={headerStyles.description}>
          Baby Daddy Please <br />
        </div>
        <div>
        <ThreeJSReactComponent glbFile="https://sketchfab.com/models/7b101d78699843e4b73d51f4e43c0b57.glb" />   </div>
        <div className={styles.gridcontainer5}>
          <img  
            className={styles.photo}
            alt="beer can"
            src="/babydaddy.jpg"
          />
        </div>
        <ChatApp1 />
        {/* <ChatApp /> */}
        {/* <Chatbot3 /> */}
        {/* <Chat/> */}
        <AstroChatbot />

      </div>

      <ContentCard />
    </>
  );
}
