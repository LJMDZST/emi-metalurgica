

export const NavbarFooter = () => {

    const handleClickInstitucional = ()=>{
        const about = document.getElementById("aboutSection");
        if(about) {
          about.scrollIntoView();
        } else {
          console.log('about no encontrado')
        }
    }
  return (
    <ul className="nav flex-column ">
        <li className="nav-item p-3 mb-3"> ENLACES </li>
        <li style={{fontSize : '0.8em'}} className={`nav-item `}>
           <a className="nav-link text-light " aria-current="page" href="/"><i className="bi bi-arrow-right-short"/>INICIO</a>
        </li>
        <li style={{fontSize : '0.8em'}} className={`nav-item `}>
        <a className="nav-link text-light" href="/" onClick={handleClickInstitucional}><i className="bi bi-arrow-right-short"/>INSTITUCIONAL</a>
        </li>
        <li style={{fontSize : '0.8em'}} className={`nav-item `}>
            <a className="nav-link text-light" href="equipos"><i className="bi bi-arrow-right-short"/>EQUIPOS</a>
        </li>
        <li style={{fontSize : '0.8em'}} className={`nav-item `}>
           <a className="nav-link text-light " href="contact"><i className="bi bi-arrow-right-short"/>CONTACTO</a>
        </li>
    </ul>
  )
}
