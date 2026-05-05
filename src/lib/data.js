export const getAllBooks = async ()=>{
    const res = await fetch('https://booknest-server-8uc0.onrender.com/books')
    const data = await res.json();
    return data
}