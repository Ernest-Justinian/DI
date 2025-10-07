async function getUppercaseTitlesByUser(userId = 1) {
  let descarga= await fetch("https://jsonplaceholder.typicode.com/posts");
  let json= await descarga.json();
  let postsFiltrados= json.filter(n => n.userId === userId);
  let titulosMayus= postsFiltrados.map(post => post.title.toUpperCase());
  return titulosMayus;
}

async function totalElectronics() {
    let descarga= await fetch("https://fakestoreapi.com/products");
    let productos= await descarga.json();
    let filtroElectronicos= productos.filter(n => n.category==="electronics");
    let totalPrecio= filtroElectronicos.reduce((acc, n) => acc+n,0);
    return totalPrecio 
}

async function usersWithPostCount() {
    let [Prime, Video] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users").then(resultadoUser => resultadoUser.json),
        fetch("https://jsonplaceholder.typicode.com/posts").then(resultadoPost => resultadoPost.json)
    ]) 
   
}