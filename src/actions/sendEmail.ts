

type TDataEmail = {
    nombre : string,
    asunto : string,
    email : string,
    cuerpo : string
} 

export const  sendEmail = ( data : TDataEmail )=>{
    return async()=>{
        console.log( data );
        // let transport = nodemailer.createTransport({
        //     host : 'localhost',
        //     port : 587,
        //     secure : false,
        //     auth : {
        //         user : 'project.1',
        //         pass : 'secret.1'
        //     }
        // });

        // const resp = await transport.sendMail({
        //     from : data.email,
        //     to : 'metalurgicaemi@gmail.com',
        //     subject : data.asunto,
        //     text : data.cuerpo,
        //     html : `<p>De: ${ data.nombre} < br/> ${ data.cuerpo }</p>`
        // });
        // if(resp.accepted) {
        //     alert('correo enviado !');
        // }
    }
}