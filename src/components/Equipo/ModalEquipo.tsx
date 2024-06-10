
import ReactModal from "react-modal"
import cardEquipo1 from '../../assets/images/equipos-home/card-equipo1.jpg'

type TPropsModalEquipo = {
    _isOpen : boolean,
    _handleClose : ( e : React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void
}

const modalStyles : ReactModal.Styles = {
    overlay : {
        backgroundColor : 'rgba(0,0,0,0.6)'
        
    }, 
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '100%',
        marginRight: '-50%',
        border : '0',
        background : 'transparent',
        transform: 'translate(-50%, -50%)',
  }}

ReactModal.setAppElement('#root')

export const ModalEquipo = ( {  _isOpen, _handleClose } : TPropsModalEquipo ) => {
  console.log(_isOpen);
  return (
    <ReactModal
        isOpen={_isOpen}
        onRequestClose={ _handleClose }
        shouldCloseOnOverlayClick={true}
        style={modalStyles}
    >
      <div className="container animate__animated animate__fadeIn p-3" style={{background : 'rgb(57, 80, 158)'}}>
        <div className="row row-cols-1">
            <div className="col d-flex justify-content-end">
                <button className="btn btn-dark" onClick={_handleClose} > x </button>
            </div>
            <div className="col" >
                <div id="carouselEquipo" className="carousel slide">
                    <div className="carousel-inner p-3">
                        <div className="carousel-item active text-center">
                            <img  src={cardEquipo1} alt="..." width={'300'}/>
                        </div>
                        <div className="carousel-item active text-center" >
                        <img  src={cardEquipo1} alt="..." width={'300'}/>
                        </div>
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
