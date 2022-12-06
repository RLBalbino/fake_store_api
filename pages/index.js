import Head from "next/head";
import styles from "../styles/Home.module.css"
import axios from "axios";

export default function Home(){
  return(
    <div className={styles.container}>
      <Head>
        <title>Loja App</title>
      </Head>
      <a href="\produtos"><h1>Produtos da Loja</h1></a>
    </div>
  )
}