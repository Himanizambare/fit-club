import React from 'react'
import './Testimonials.css';
import { useState } from 'react';
import {testimonialsData} from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

const Testimonials = () => {

    const[selected , setSelected]=useState(0);
    const tLength=testimonialsData.length;

    return (
        <div className="testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>what they</span>
                <span>say about us</span>
                <span>
                    {testimonialsData[0].review}
                </span>
                <span style={{color:'var(--orange)'}}>
                    {testimonialsData[selected].name}
                </span>
                <span>
                    {testimonialsData[selected].status}
                </span>
            </div>

            <div className="right-t">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="" />
                <dic className="arrows">
                    
                    <img 
                        onClick={()=>{
                            selected===0
                                ?setSelected(tLength -1)
                                :setSelected((prev)=> prev-1);
                        }}
                    src={leftArrow} alt="" />
                    <img 
                    onClick={()=>{
                        selected===tLength-1
                            ? setSelected(0)
                            : setSelected((prev)=> prev+1);
                    }}
                    src={rightArrow} alt="" />
                </dic>
            </div>
        </div>
)
}

export default Testimonials
