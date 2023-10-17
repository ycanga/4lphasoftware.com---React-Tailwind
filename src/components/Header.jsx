import React from 'react';
import '../style.css';
import logo from '../assets/logo/logo.png';


function Header() {
    return (
        <header className='bg-color-main text-color-text fixed top-0 left-0 right-0'>
            <div className='container flex justify-around items-center justify-center'>
                <h1><img src={logo} alt="Logo" className='w-64'/></h1>
                
                <nav>
                    <ul className='flex justify-between font-bold'>
                        <li style={{marginRight: '1rem'}}><a href="#" className='hover:text-link-hover'>Anasayfa</a></li>
                        <li style={{marginRight: '1rem'}}><a href="#" className='hover:text-link-hover'>Ürünlerimiz</a></li>
                        <li style={{marginRight: '1rem'}}><a href="#" className='hover:text-link-hover'>Projelerimiz</a></li>
                        <li style={{marginRight: '1rem'}}><a href="#" className='hover:text-link-hover'>İletişim</a></li>
                        <li style={{marginRight: '1rem'}}><a href="#" className='hover:text-link-hover'>İndirmeler</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
