import { sendEmail } from '../../actions/sendEmail';
import { CardInfo } from '../../components/ContactInfo/CardInfo';
import './Contact.css'
export const Contact = () => {


    const handleSendMail = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const nombre  = e.currentTarget['nom'];
        const email = e.currentTarget['email'];
        const asunto = e.currentTarget['asunto'];
        const texto = e.currentTarget['texto']
        
        sendEmail({
            nombre : nombre,
            email : email,
            asunto : asunto,
            cuerpo : texto
        });
    }

  return (
    <main id='contactmain' className="container-fluid" >
        <div  className="row row-cols-1 ms-md-5 me-md-5 animate__animated animate__fadeIn">
            <div  className="col mt-2">   
                <div id='iconos' className="row ">
                <div className="col-md  m-1 p-2 "><CardInfo icon={<i className="bi bi-envelope" />} texto={<small>emimetalurgica@gmail.com</small>} /></div>
                <div className="col-md  m-1 p-2 "><CardInfo icon={<i className="bi bi-instagram" />} texto={<small>emi_metalurgica</small>} /></div>
                <div className="col-md  m-1 p-2 "><CardInfo icon={<i className="bi bi-telephone" />} texto={<small>+54 342 000554</small>} /></div>


            </div>
            </div>
            <div className="col">
                <div id='form_mapa' className="row ">
                    <div className="col-md">
                        <form onSubmit={handleSendMail}>
                            <div className="row row-cols-1" >
                                <div className="col m-1">
                                    <input className="form-control " placeholder='Nombre' type={'text'} />
                                </div>
                                <div className="col m-1">
                                    <input className="form-control" placeholder='Email' type={'email'} />
                                </div>
                                <div className="col m-1">
                                    <input className="form-control" placeholder='Asunto' type={'text'} />
                                </div>
                                <div className="col m-1">
                                    <textarea className="form-control" placeholder='Mensaje' rows={6} />
                                </div>
                                <div className="col m-1">
                                    <input className='btn btn-primary' type={'submit'} value={'Enviar'}/>
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
    </main>
  )
}
