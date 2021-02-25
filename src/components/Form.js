import React, { useState } from 'react';
import uuid from 'uuid/dist/v4';

export const Form = ({crearCita}) => {

    const [cita, setCita] = useState({
        id: '',
        mascota: '',
        propietario:'',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    
    const [error, seteEror] = useState(false)

    const {mascota,propietario,fecha,hora,sintomas}= cita;

    const actualizarCita= ({target})=> {

        setCita({
            ...cita,
           [ target.name] : target.value
        })

    }

    
    const handleSubmit = (e)=> {
        e.preventDefault();
    
        if(
            mascota.trim().length===0 ||
            propietario.trim().length===0 || 
            fecha.trim().length===0 ||
             hora.trim().length===0 ||
             sintomas.trim().length===0
        ){
            seteEror(true)
            return console.log('hay un error')
        }
        seteEror(false);
        cita.id=uuid();
        crearCita(cita);

        setCita({
            id: '',
            mascota: '',
            propietario:'',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }
   

    return (
        <>
           <h2>Crear Cita</h2>
            {
                error ? <p className="alerta-error">Todos los campos son obligatorios</p> :null
            }
            <form onSubmit={handleSubmit}>
            <label>Nombre Mascota</label>
             <input 
              type="text"
              name='mascota'
              className='u-full-width'
              placeholder='Nombre mascota'
              value= {mascota}
              onChange={actualizarCita}
             />   

            <label>Nombre Dueño</label>
             <input 
              type="text"
              name='propietario'
              className='u-full-width'
              placeholder='Nombre Dueño de la Mascota'
              value= {propietario}
              onChange={actualizarCita}
             />   
            
            <label>Fecha</label>
             <input 
              type="date"
              name='fecha'
              className='u-full-width'
              value= {fecha}
              onChange={actualizarCita}
              
             /> 

            <label>Hora</label>
             <input 
              type="time"
              name='hora'
              className='u-full-width'
              value= {hora}
              onChange={actualizarCita}
              />

            <label>Sintomas</label>
                <textarea
                className='u-full-width'
                name='sintomas'
                value= {sintomas}
                onChange={actualizarCita}
                >
                </textarea>

             <button 
              type='submit'
              className='u-full-width button-primary'
             >
                 Agregar Cita
             </button>
            
            </form>            
        </>
    )
}
