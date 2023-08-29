import React from 'react'

const Header = () => {

    return (
        <section id="Header" className='p2 py-12 mt-[50px] max-w-screen-2xl'>
            {/* SECTION IMG */}
            <section className='flex justify-center '>
                <img className=' lg:z-20 lg:absolute lg:pt-[60px] lg:w-[450px] lg:h-[450px]
                lg:ml-[450px] ' src="/images/robot.png" alt="" />
            </section>

            {/*SECTION TEXT Y BUTTON*/}
            <section className='text-white p-3 lg:pl-[100px]'>
                <h3 className='font-bold  text-3xl lg:text-[48px] lg:w-[500px]  lg:pt-[130px] '>
                    <span className= 'text-violet'> ¡Hola! </span>
                    soy desarrollador Front-End.
                </h3>
                <p className='py-2 lg:w-[500px] lg:text-[18px]'>Soy un profesional del desarrollo web, certificado y preparado para asumir los desafíos que se me asigne. Tengo conocimientos en JavaScript, HTML, CSS y React.js. Siempre abierto a aprender nuevas tecnologías.</p>



               


            </section>
            <section className='flex justify-center p-2 lg:mt-12 '>
                <section className='w-[220px] h-[900px] bg-gray-950 
                  rounded-[20px] grid gap-4 justify-center justify-items-center 
                pt-4 lg:pt-3 text-center text-[14px] lg:w-[900px] lg:h-[220px] lg:flex '>

                    <div className='rounded-[20px] bg-gray-20 w-[200px] h-[200px] '>
                    <i className='bx bxl-javascript text-violet text-6xl pt-8 cursor-pointer  '></i>
                        <h3 className='text-white p-2'>Conocimiento de Variables, funciones, Objetos, arrays, Etc...

                        </h3>
                    </div>

                    <div className='rounded-[20px] bg-gray-20 w-[200px] h-[200px]   '>
                    <i className='bx bxl-react text-violet text-6xl pt-8 cursor-pointer' ></i>
                        <h3 className='text-white p-2'>Conocimiento de Redux, Hooks, Apis, CRUD, React-Router-Dom y mucho más...</h3>
                    </div>

                    <div className='rounded-[20px] bg-gray-20 w-[200px] h-[200px]   '>
                    <i className='bx bxl-css3 text-violet text-6xl pt-8 cursor-pointer' ></i>
                        <h3 className='text-white p-2'>Conocimiento de Tailwind css, Margen, Padding, Display flex y grid, Etc...</h3>
                    </div>

                    <div className='rounded-[20px] bg-gray-20 w-[200px] h-[200px]  '>
                    <i className='bx bxl-html5 text-violet text-6xl pt-8 cursor-pointer' ></i>
                        <h3 className='text-white p-2'>Conocimiento de Class, Div, Form, Link, IMG y mucho más...</h3>
                    </div>
                </section>
            </section>

        </section>
    )
}

export default Header
