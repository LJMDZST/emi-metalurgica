import './CardEquipo.css'
export const CardEquipo = ({titulo = '', srcImg = '#'}) => {

    const handleMouseOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        e.preventDefault();

        e.currentTarget.style.backgroundColor = 'rgba(58, 81, 159,0.75)';
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        e.preventDefault();

        e.currentTarget.style.backgroundColor ='rgba(0,0,0,0.25)';
    }

  return (
    <div className="card border rounded-0 text-bg-transparent " style={{height : '20em' , width:'15em'}}>
        <img src={srcImg} className="card-img" alt="card-equipo" width={'15em'} height={'100%'}/>
        <div className="card-img-overlay border rounded-0 m-4" onMouseLeave={ handleMouseLeave} onMouseOver={ handleMouseOver } >
            <div className="row align-items-center" style={{height : '100%'}}>
               
                <div className="col-md text-center">
                    <h5 id="card-equipo-titulo" className="card-title text-light" >{titulo}</h5>
                </div>
            </div>
        </div>
    </div>
  )
}
