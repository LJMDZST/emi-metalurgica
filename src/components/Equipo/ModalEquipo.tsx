
import ReactModal from "react-modal"
import React from "react";



type TPropsModalEquipo = {
    _isOpen : boolean,
    equipo : {titulo : string , imagenes : string[]},
    _handleClose : ( e : React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void
}




ReactModal.setAppElement('#root')

export const ModalEquipo = ( {  _isOpen, equipo ,_handleClose } : TPropsModalEquipo ) => {
  console.log(_isOpen);
  return (
    <ReactModal
        isOpen={_isOpen}
        onRequestClose={ _handleClose }
        shouldCloseOnOverlayClick={true}
        style={{overlay : {zIndex : 1000 , backgroundColor : 'rgba(57,80,158,0.65)'}}}
        className={'modal-fullscreen-sm-down'}
    >
      <button className="btn btn-outline-light border-0 float-end sticky-top" onClick={_handleClose} > x </button>
      <div className="container-fluid animate__animated animate__fadeIn ">
        <div className="row mt-4">
            <div className="col" >
                <div id="carouselEquipo" className="carousel slide" >
                    <div className="carousel-inner " >
                        {
                           equipo.imagenes.map( (img,index) => 
                            <div className={`carousel-item ${index === 0 ? 'active' : null}`} style={{height : '32em'}}>
                                <div className="row row-cols-1 justify-content-around">
                                    <div className="col-10">
                                        <img src={img} className="d-block  w-100" alt="equipo" style={{objectFit : 'contain'}}/>
                                    </div>
                                    <div className="col " >
                                        <div className="carousel-caption d-none d-md-block" style={{backgroundColor : 'rgba(0,0,0,0.3)'}}>
                                            <h5>{equipo.titulo}</h5>
                                        </div>
                                    </div>
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
                    </button>
                    <button className="carousel-control-next "   >
                        <span className="carousel-control-next-icon  btn btn-outline-light " 
                            aria-hidden={true} 
                            data-bs-target={'#carouselEquipo'}
                            data-bs-slide={'next'}
                            style={{color: 'red'}}
                            ></span>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </ReactModal>
  )
}
