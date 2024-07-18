import equipos_equipo1 from './equipos-equipos/equipo1';

import equipos_equipo2 from './equipos-equipos/equipo2';

import equipos_home1 from './equipos-home/equipo1';

import equipos_home2 from './equipos-home/equipo2';

import equipos_home3 from './equipos-home/equipo3';

import imgHome1 from './home/Recurso1.png';
import imgHome2 from './home/Recurso1.png';
import imgHome3 from './home/Recurso1.png';
import portada from './home/portada.jpeg';

const equipos : {
    [key : string] : { titulo : string , imagenes : string[] }
}

= {
    equipo1 :equipos_equipo1,
    equipo2 :equipos_equipo2
}

const homeEquipos : {
    [key : string] : { titulo : string , imagenes : string[] }
} = {
    equipo1 : equipos_home1,
    equipo2 : equipos_home2,
    equipo3 : equipos_home3,
    
}



export {
    equipos,
    homeEquipos,
    imgHome1,
    imgHome2,
    imgHome3,
    portada
};