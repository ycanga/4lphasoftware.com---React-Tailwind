import React from 'react';
import '../../style.css';
import mockup from '../../assets/images/mockup1.png';

function Section1() {
    return (
        // <div className=' relative w-full h-54 bg-[url(./assets/images/section1.jpeg)] mt-[85px] bg-cover'>
        <div className='bg-cover bg-center h-48 md:h-64 lg:h-96 xl:h-120 bg-no-repeat bg-[url(./assets/images/section1.jpeg)]'>
            <p className='flex justify-center grid grid-rows-3'>
                <div>
                    <h1 className='text-white font-bold text-4xl mt-20'>4LPHA Software İle Hayallerinizi Tasarlayın</h1>
                {/* </div>
                <div className='flex justify-center text-3xl text-color-text-secondary drop-shadow-xl'> */}
                    <h1 className='flex justify-center text-3xl text-color-text-secondary drop-shadow-xl font-bold mt-5'>Bizim İşimiz Sizin Hayalleriniz...</h1>
                {/* </div>
                <div> */}
                    <img src={mockup} alt="Mockup" className='mt-10 lg:w-100'/>
                </div>
            </p>
        </div>
    );
}

export default Section1;
