import React from "react";

export const AboutMe = () =>{
    return(
        <section id="AboutMe" className='p-3 lg:py-10 max-w-screen-2xl text-white md:max-w-[900px]  md:pl-[100px]'>
            <h3 className='text-white pb-2 lg:pb-10   font-bold  text-3xl lg:text-[48px] md:mr-[350px]'>
                <span className='text-violet'>Acerca</span> de mi</h3>
            <p className='py-2 lg:w-[1200px] lg:[70px]'>Carrera online de programacion web con búsqueda constante de mejora continua!</p>
            <p className='py-2 lg:w-[1200px] lg:[70px]'>Empecé a programar por curiosidad, hoy estoy seguro que es mi pasión, donde quiero seguir desarrollándome y aportar toda mi capacidad.</p>
            <p className='py-2 lg:w-[1200px] lg:[70px]'>Tengo experiencia programando Front-end con javaScript usando la librería React.js y dando estilos con CSS.</p>
            <p className='py-2 lg:w-[1200px] lg:[70px] mb-10'>Soy una persona familiar con mucha empatía hacia las demás personas, amigable y con una moral impecable.</p>
            
            <div className=' flex items-center  border-white border-[3px] w-[210px] h-[35px]
            rounded-[10px] hover:bg-gray-50 duration-200'>
                    <a href="https://docs.google.com/document/d/1Z9gSP2JYIobs8v83oLL2cUj8jGBPohJM/edit?usp=sharing&ouid=103761663462019781738&rtpof=true&sd=true" 
                    target="blank" className='text-white text-[18px] 
                font-bold p-3  '>
                        Ver curriculum vitae
                    </a>
                    
                </div>
        </section>
    )
}