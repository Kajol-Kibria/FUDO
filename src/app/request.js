export default async function getData () {
    const res = await fetch('https://dummyjson.com/recipes');
    return res.json();
    
} 
export async function getDetails (id) {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);
    return res.json();

}