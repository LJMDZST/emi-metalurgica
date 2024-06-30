// import { sendEmail } from '../../actions/sendEmail';
import { useState } from 'react';
import { CardInfo } from '../../components/ContactInfo/CardInfo';

export const Contact = () => {
    
    const [sendingEmail, setSendingEmail] = useState(false);

    const handleSendMail = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const nombre  = e.currentTarget['nom'];
        const email = e.currentTarget['email'];
        const asunto = e.currentTarget['asunto'];
        const texto = e.currentTarget['texto']
        
        setSendingEmail(true);
        fetch(import.meta.env.VITE_API_URL,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre.value,
                email: email.value,
                asunto: asunto.value,
                texto: texto.value
            })
        })
        .then(
            resp => {
                if(resp.ok){
                    alert('mensaje enviado !!');
                   
                } else {
                    alert('error al enviar el mensaje');
                }
                setSendingEmail(false);
            }
        ).catch(
            (e) => {
                console.log({...e});
                setSendingEmail(false);
            }
        )
    }

  return (
    <main  className="container-fluid p-0 m-0"  style={{
        minHeight : ' 40em',
        backgroundColor : 'rgba(57,80,158)'
    }}>
        <div className='container'>
        <div  className="row row-cols-1 ms-md-5 me-md-5 animate__animated animate__fadeIn">
            <div  className="col mt-2">   
                <div id='iconos' className="row ">
                <div className="col-md  m-1 p-2 "><CardInfo icon={<i className="bi bi-envelope" />} texto={<small>emimetalurgica@gmail.com</small>} /></div>
                <div className="col-md  m-1 p-2 "><CardInfo icon={<i className="bi bi-instagram" />} texto={<small>emi_metalurgica</small>} /></div>
                <div className="col-md  m-1 p-2 "><CardInfo icon={<i className="bi bi-telephone" />} texto={<small>+54 342 000554</small>} /></div>


            </div>
            </div>
            <div className="col">
                <div  className="row "  style={{  minHeight: '25em'}}>
                    <div className="col-md">
                        <form onSubmit={handleSendMail}>
                            <div className="row row-cols-1" >
                                <div className="col m-1">
                                    <label className='form-label text-white' htmlFor={'Nombre'}>Nombre</label>
                                    <input  id={'Nombre'} name={'nom'} className="form-control  border border-top-0 border-start-0 border-end-0 rounded-0 t"  type={'text'} />
                                   
                                </div>
                                <div className="col m-1">
                                    <label className='form-label text-white' htmlFor={'Email'}>Email</label>
                                    <input id={'Email'} name={'email'}  className="form-control  border border-top-0 border-start-0 border-end-0 rounded-0 "  type={'email'} />
                                </div>
                                <div className="col m-1">
                                    <label className='form-label text-white' htmlFor={'Asunto'}>Asunto</label>
                                    <input id={'Asunto'} name={'asunto'} className="form-control  border border-top-0 border-start-0 border-end-0 rounded-0 "  type={'text'} />
                                </div>
                                <div className="col m-1">
                                    <label className='form-label text-white' htmlFor={'Mensaje'}>Mensaje</label>
                                    <textarea id={'Mensaje'} name={'texto'}  className="form-control border border-top-0 border-start-0 border-end-0 rounded-0 "  rows={6} style={{resize : 'none'}}/>
                                </div>
                                <div className="col m-1">
                                    <input className='btn btn-outline-light rounded-0' type={'submit'} value={'Enviar'} 
                                       disabled={sendingEmail}
                                    />
                                </div>
                              
                            </div>
                        </form>
                    </div>
                    <div className="col-md  animate__animated animate__fadeInRight animate__duration-2s">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212.45985416392475!2d-60.73055250406067!3d-31.569238363560956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b50780d30be731%3A0xe3dc36fb4fba7b6d!2sEMI%20metalurgica!5e0!3m2!1sen!2sar!4v1714064888081!5m2!1sen!2sar"  style={{border:"0" , width : '100%', height : '100%'}}  loading="lazy" ></iframe>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </main>
  )
}
