import React from 'react';
import '../css/navigation.css';

const Navigation = () => {
    return (
        <header>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <nav>
                <ul className='nav_links'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/didattica'>Didattica</a></li>
                    <li><a href='/contatti'>Contatti</a></li>
                    <li><a href='/accedi'>Accedi</a></li>
                    <li><a href='/privacy'>Policy-Privacy</a></li>
                </ul>
            </nav>
            <div className='cerca'>
                <form className='ricerca' action=''>
                    <input type='text' placeholder='Cerca...' name='cerca' className='searchBox'/>
                    <button type='button'><i className='fa fa-search' ></i></button>
                </form>
            </div>
        </header>
    )
}

export default Navigation;