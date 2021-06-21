import React from 'react';
import Navigation from '../navigation/navigation';
import '../css/homepage.css';
import listaTecnologie from '../liste/tecnologieLista';



const Home = () => {
    return (
        <main>
            <Navigation/>
            <section className='corpo'>
                {
                    listaTecnologie.map((tecnologia) => {
                        return <Tecnologia key={tecnologia.id} tecnologia={tecnologia}/>
                    })
                }
            </section>
        </main>
    )
}

const Tecnologia = (props) => {
    const {id, name, img} = props.tecnologia;
    
    return (
        <article>
            <img alt={name} className='logoTecnologia' src={img}></img>
            <h1 className='nomeTecnologia'>{name}</h1>
        </article>
    )
}

export default Home
