import React from 'react'
import emailjs from '@emailjs/browser';
import swal from "sweetalert"
export const Contact = () => {
    const showAlert = () => {
        swal({
            title:"Tu mensaje a sido enviado y recibido",
            text:"Muchas gracias por tu mensaje, sera leido y respondido",
            icon:"success",
            button:"Aceptar"
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        emailjs.sendForm(
        import.meta.env.VITE_APP_SERVICE_ID, 
        import.meta.env.VITE_APP_TEMPLATE_ID, 
        e.target,
        import.meta.env.VITE_APP_PUBLIC_KEY
         )
        .then((res)=>console.log(res.text))
        .catch((err)=>console.log(err.text))
    }
    return (
        <section id='Contact'  className='p-3 max-w-screen-2xl text-white md:max-w-[900px]  md:pl-[100px]'>
            <section className=' '>
            <h2 className='text-white pb-10  font-bold  text-3xl lg:text-[48px] md:mr-[200px]'>
                <span className='text-violet'>Hablemos</span> de negocios
            </h2>
            <p className=' py-3 text-[16px] lg:w-[400px] lg:[70px]'>
           Gracias ahora sabes mucho sobre mí, déjame saber si
                estas interesado en
                Trabajar conmigo.
            </p>
            </section>
           

            <form onSubmit={handleSubmit} className='grid gap-4 my-5'>
                <div className='grid gap-1 '>
                    <label htmlFor="name">Nombre</label>
                    <input className='bg-gray-20 text-white rounded-[5px]' 
                    name='from_name' id='name' type="text" />
                </div>

                <div className='grid gap-1 '>
                    <label htmlFor="email">Email</label>
                    <input className='bg-gray-20 text-white rounded-[5px]' 
                    name='email' id='email' type="text" />
                </div>

                <div className='grid gap-1 '>
                    <label htmlFor="message">Mensaje</label>
                    <textarea className='bg-gray-20 text-white rounded-[5px]' 
                    name='message' id="message" rows="10"></textarea>
                </div>
                <div className='  items-center mx-auto border-white border-[2px] 
            rounded-[10px] max-w-max  hover:bg-gray-50 duration-200 '>
                <button onClick={()=>showAlert()} className='text-white text-[14px] 
                font-semibold p-2 '>COMENCEMOS</button>
                </div>
                
            </form>
        </section>
    )
}
