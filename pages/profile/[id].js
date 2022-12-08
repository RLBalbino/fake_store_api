import axios from 'axios';
function Profile({produto={}}){

    return(
        <div key={produto.id}>
            <p>ID do produto: "{produto.id} "</p>
            <img src={produto.image} width="200" height="200"></img>
            <p>{produto.title}</p>
            <p>{produto.price}</p>
            <p>{produto.description}</p>
        </div>
    )
}
export async function getStaticProps(context){
    const response = await axios.get('https://fakestoreapi.com/products/' 
    + context.params.id);
    const produto = await response.data;
    return{
        props:{produto}
    }
}
export async function getStaticPaths(){
    const response = await axios.get('https://fakestoreapi.com/products/');
    const produtos = await response.data;
    const paths = produtos.map((produto)=>{
        return{params:{id:String(produto.id)}};
    });
    return{
        paths,
        fallback: true,
    }
}
export default Profile;
