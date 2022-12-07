import React from 'react';
import axios from 'axios';
import Link from 'next/link';

function Produtos({produtos}){
return(
    <div>
        <h1>Produtos da loja</h1>
        {produtos.map((produto)=>(
            <div>
                <Link href='/profile/[id]'as={`profile/${produto.id}`}>
                {produto.title}
                </Link>
                </div>
        ))}
    </div>
    )
}

export async function getStaticProps(context){
    const response = await axios.get('https://fakestoreapi.com/products');
    const data = await response.data;
    return{
        props:{produtos:data},
    }
}

export default Produtos;
