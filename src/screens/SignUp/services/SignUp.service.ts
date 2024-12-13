import 'dotenv/config';

const API_URL=import.meta.env.API_URL;

export const signUp = async (email:string,password:string) => {
    try{
        const res = await fetch(`${API_URL}/auth/register`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email,password})
        });

        if(!res.ok){
            throw new Error(`HTTP Error! Status: ${res.status}`);
        }

        const data = await res.json();
        return data;
    } catch(err){
        console.error(err);
    }
}