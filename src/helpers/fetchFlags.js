const URL = "https://restcountries.com/v3.1/all";

export const fetchFlags = async (setFlag, country) => {
    try{
        const response = await fetch(URL);
        if(response.status === 404){
            throw new Error("Not countries found");
        }
        const data = await response.json();
        for(let i of data){
            if(i.cca2 === country){
                setFlag(i.flags.png);
                break;
            }
        }
    }catch(error){
        console.log(error);
    }
}