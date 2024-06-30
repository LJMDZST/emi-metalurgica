

type TDataEmail = {
    nombre : string,
    asunto : string,
    email : string,
    cuerpo : string
} 

export const  sendEmail = ( data : TDataEmail )=>{
    return async()=>{
        console.log( data );
        
        const resp = await fetch(import.meta.env.VITE_APP_URL,{
            method : 'POST',
            headers : {
                'Content-Type' : 'aplication/json'
            },
            body: JSON.stringify({
                ...data
            })
        });

        if(resp.ok) {
            alert('mensaje enviado !');
        }

    }
}