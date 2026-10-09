export async function getMovies(query) {
    
try{
    const response = await 
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`);

    const data = await response.json();

    console.log(data);
    return data;
    

}catch(error){
    console.log(error);
    return[];
    
    
}




}