import React from 'react'

const Project = () => {
    return (
        <section id="Project" className='grid justify-center py-10 max-w-screen-2xl  '>
            <h3 className='text-white p-3 px-6 font-bold  text-3xl lg:text-[48px] md:mr-[400px]'>
                <span className='text-violet'>Últimos proyectos </span>
              de sitios web.</h3>
            {/* Proyectos con img, link y descripcion */}
            <section className=' md:grid md:gap-16 md:py-10 '>
                {/* weatherapp */}
                <section className='p-4 md:flex md:justify-evenly md:gap-10'>
                    <div className='rounded-[20px]  bg-gray-950 w-[300px] h-[200px] 
                    grid justify-center justify-items-center mx-auto md:w-[550px] md:h-[350px] '>
                        <img className='rounded-[20px] w-[290px] h-[190px] pt-3 px-2
                        md:w-[550px] md:h-[350px] md:pb-3' src="/images/weatherApp.png" alt="" />
                    </div>*/
                    <div className='text-white py-6  grid text-center md:w-[400px] '>
                        <h3 className='text-violet text-2xl md:text-4xl'>Weather App</h3>
                        <h4>Descripción: WeatherApp es una aplicación que te dirá el tiempo en tu ciudad. Está realizado con la libreria <span className='text-violet text-2xl'>ReactJs</span>, utilizando Hooks como useEffect para consumir una API y useState. Para el diseño utilice <span className='text-violet text-2xl'>CSS</span> buscando un diseño armonioso y amigable.</h4>
                        <a className='text-violet border-b-2 border-transparent max-w-[200px] 
                        ml-auto mr-auto
                        m-[40px]
                        hover:ml-auto  hover:mr-auto 
                        hover:transition ease-out duration-800 
                        hover:border-b-2 hover:max-w-[230px] 
                        hover:border-violet
                        ' target='_blank' href="https://shiny-maamoul-c166f9.netlify.app/">¡¡Ir a la aplicacion!!</a>
                    </div>
                </section>

                {/* userlist */}
                <section className='p-4 md:flex md:justify-evenly md:flex-row-reverse md:gap-10'>
                    <div className='rounded-[20px]  bg-gray-950 w-[300px] h-[200px]
                    grid justify-center justify-items-center mx-auto md:w-[550px] md:h-[350px]'>
                        <img className='rounded-[20px] w-[290px] h-[190px] pt-3 
                        px-2 md:w-[550px] md:h-[350px] md:pb-3' src="/images/userList.png" alt="" />
                    </div>
                    <div className='text-white py-6  grid text-center md:gap-1 md:w-[400px]'>
                        <h3 className='text-violet text-2xl md:text-4xl'>UserList</h3>
                        <h4>Descripción: UserList es una aplicación que puedes usar de forma modal para obtener, crear, actualizar y eliminar usuarios. Está hecho con <span className='text-violet text-2xl'>ReactJs</span> que consume una <span className='text-violet text-2xl'>API</span>, utilizo <span className='text-violet text-2xl'>CRUD</span> y la libreria <span className='text-violet text-2xl'>React-hook-form</span> para administrar los formularios. Para darle estilo utilice <span className='text-violet text-2xl'>Tailwindcss</span>.</h4>
                        <a className='text-violet pt-4
                        border-b-2 border-transparent max-w-[200px] 
                        ml-auto mr-auto
                        m-[5px]
                        hover:ml-auto  hover:mr-auto 
                        hover:transition ease-out duration-800 
                        hover:border-b-2 hover:max-w-[230px] 
                        hover:border-violet'
                        target='_blank' href="https://charming-daifuku-968476.netlify.app/">¡¡Ir a la aplicacion!!</a>
                    </div>
                </section>
                {/* pokedex */}
                <section className='p-4  md:flex md:justify-evenly md:gap-16'>
                    <div className='rounded-[20px]  bg-gray-950 w-[300px] h-[200px]
                    grid justify-center justify-items-center mx-auto md:w-[550px] md:h-[350px]'>
                        <img className='rounded-[20px] w-[290px] h-[190px] pt-3 px-2 
                        md:w-[550px] md:h-[350px] md:pb-3' src="/images/pokedex.png" alt="" />
                    </div>
                    <div className='text-white py-6 grid text-center md:mt-[-35px]  md:w-[400px]'>
                        <h3 className='text-violet text-2xl md:pb-3 md:text-4xl'>Pokedex</h3>
                        <h4>Descripción: Pokedex es una aplicación que te permitirá ver más de 1000 pokemons con su imagen y descripción. le permite buscar y filtrar por tipos. Está hecho con <span className='text-violet text-2xl'>ReactJs</span> obteniendo los pokemons a través de una <span className='text-violet text-2xl'>API</span> usando la libreria <span className='text-violet text-2xl'>React-Router-Dom</span> para el enrutamiento y <span className='text-violet text-2xl'>Redux</span> para administrar estados globales. Para el diseño utilizo <span className='text-violet text-2xl'>Tailwindcss</span> con un diseño amigable y responsivo.</h4>
                        <a className='text-violet pt-4 border-b-2 border-transparent max-w-[200px] 
                        ml-auto mr-auto
                        m-[5px]
                        hover:ml-auto  hover:mr-auto 
                        hover:transition ease-out duration-800 
                        hover:border-b-2 hover:max-w-[230px] 
                        hover:border-violet' 
                       target='_blank' href="https://clinquant-entremet-d4c67b.netlify.app">¡¡Ir a la aplicacion!!</a>
                    </div>
                </section>

            </section>



        </section>
    )
}

export default Project