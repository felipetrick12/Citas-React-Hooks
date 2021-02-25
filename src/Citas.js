import React, { useEffect, useState } from 'react';
import { Form } from './components/Form';
import { ListCitas } from './components/ListCitas';
import './styles/index.css'

export const Citas = () => {

    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

        if(!citasIniciales) {
            citasIniciales = [];
        }

    const [citas, guardarCitas] = useState(citasIniciales)

    useEffect(() => {
        if(citasIniciales){
            localStorage.setItem('citas', JSON.stringify(citas))
        }else{
            localStorage.setItem('citas', JSON.stringify([ ]))
        }
    }, [citas,citasIniciales])

    const title = citas.length===0 ? 'no hay citas' : 'administra tus citas';

    const crearCita = (cita) => {
        guardarCitas([
            ...citas,
            cita
        ])
    }
    const eliminarCita = (id) =>
    {
       const nuevasCitas = citas.filter(cita => (
            cita.id !== id
        ))
        if(id){
        guardarCitas(nuevasCitas)
        }
    }
   

    return (
        <>
            <h1>Administrador de Pacientes</h1>

        <div className="container">
            <div className="row">
                <div className="one-half column ">
                    <Form 
                        crearCita={crearCita}
                    />
                </div>
                <div className="one-half column ">
                <h1>{title}</h1>
                {
                citas.map(cita => (
                    <ListCitas
                      key={cita.id}
                      cita={cita}
                      eliminarCita={eliminarCita}
                    />
                  ))
                }
                    
                </div>
            </div>
        </div>
        </>
    );
}
