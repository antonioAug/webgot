import React, {useState} from 'react';
import Navigation from '../navigation/navigation';
import '../css/homepage.css';
import listaTecnologie from '../liste/tecnologieLista';



const Home = () => {
    const [num, setNum] = useState(0);

    return (
        <main>
            <Navigation/>
            <section className='tecnologie'>
                <Tecnologia tecnologia={listaTecnologie[num]}/>
            </section>
        </main>
    )
}

const Tecnologia = (props) => {
    const {name, img} = props.tecnologia;

    return (
        <article className='tecnologia'>
            <img alt={name} className='logoTecnologia' src={img}></img>
            <h1 className='nomeTecnologia'>{name}</h1>
        </article>
    )
}

export default Home
