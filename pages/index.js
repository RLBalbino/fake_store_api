import Head from "next/head";
import styles from "../styles/Home.module.css"
import axios from "axios";

export default function Home(){
  return(
    <div className={styles.container}>
      <title>Loja App</title>
      <Head>
         <h1>Veja nossos produtos</h1>
      </Head>
      <a href="\produtos"><h3>Produtos da Loja</h3></a>
    </div>
  )
}
