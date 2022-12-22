import hmeImg from '../img/azure.jpeg';
import React from 'react';
import "./Header.css"

export const HeaderImg = ({title, subTitle}) => {
    return (
        <section className='header'>
            <div style={{ backgroundImage: `url(${hmeImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'}}>
                
                <div className="container" style={{minHeight: '550px'}}>
                    <div className="text-center justify-content-center align-self-center">
                        <h1 className="pt-5 pb-3 image-title">{title}</h1>
                        <h5 className='image-title'>{subTitle}</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}