
import ReactModal from "react-modal"
import React from "react";



type TPropsModalEquipo = {
    _isOpen : boolean,
    equipo : {titulo : string , imagenes : string[]},
    _handleClose : ( e : React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void
}

const modalStyles : ReactModal.Styles = {
    overlay : {
        backgroundColor : 'rgb(57,80,158)',
        zIndex : '1000'
    }, 
    content : {
        top: '50%',
        left: '50%',
        width: '100vw',
        height : '100vh',
        marginRight: '-50%',
        border : '0',
        background : 'transparent',
        transform: 'translate(-50%, -50%)',
        
  }}




ReactModal.setAppElement('#root')

export const ModalEquipo = ( {  _isOpen, equipo ,_handleClose } : TPropsModalEquipo ) => {
  console.log(_isOpen);
  return (
    <ReactModal
        isOpen={_isOpen}
        onRequestClose={ _handleClose }
        shouldCloseOnOverlayClick={true}
        style={modalStyles}
    >
      <div className="container animate__animated animate__fadeIn ">
        <div className="row row-cols-1">
            <div className="col d-flex justify-content-end">
                <button className="btn btn-outline-light border-0" onClick={_handleClose} > x </button>
            </div>
            <div className="col" >
                <div id="carouselEquipo" className="carousel slide" style={{height : '30rem'}}>
                    <div className="carousel-inner " >
                        {
                           equipo.imagenes.map( (img,index) => 
                            <div className={`carousel-item ${index === 0 ? 'active' : null}`} style={{height : '35em'}}>
                                <img src={img} className="d-block w-100" alt="..." style={{objectFit : 'cover'}}/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{equipo.titulo}</h5>
                                </div>
                            </div>
                           )
                        }
                    </div>
                    <button className="carousel-control-prev"  >
                        <span className="carousel-control-prev-icon  btn btn-outline-light" 
                            aria-hidden={true} 
                            data-bs-target={'#carouselEquipo'}
                            data-bs-slide={'prev'}
                        ></span>
                        <span className="visually-hidden"> previous </span>
                    </button>
                    <button className="carousel-control-next "   >
                        <span className="carousel-control-next-icon  btn btn-outline-light " 
                            aria-hidden={true} 
                            data-bs-target={'#carouselEquipo'}
                            data-bs-slide={'next'}
                            style={{color: 'red'}}
                            ></span>
                        <span className="visually-hidden"> next </span>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </ReactModal>
  )
}
