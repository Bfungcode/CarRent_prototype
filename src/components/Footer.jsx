import React from 'react'
import * as Icon from 'react-bootstrap-icons'
import '../App'
import Content from './Content'
const Footer = () => {
    return (
        <div className='Footer-sty'>
            <div className='container'>
                <div className='row'>
                    <div className='col=sm-12 col-md-3' id='lokasi'>
                        <h4>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h4>
                        <br></br>
                        <h4>binarcarrental@gmail.com</h4>
                        <br></br>
                        <h4>081-233-334-808</h4>
                    </div>
                    <div className='col-sm-12 col-md-3' id='service'>
                        <h3><a href="#ourservices">Our services</a></h3>
                        <h3><a href="#whyus">Why Us</a></h3>
                        <h3><a href="#testimonials">Testimonial</a></h3>
                        <h3><a href="#faq">FAQ</a></h3>
                    </div>
                    <div className='col-sm-12 col-md-3' id='icon'>
                        <h3>Connect with us</h3>
                        <svg width="224" height="32" viewBox="0 0 224 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="16" fill="#0D28A6" />
                            <path d="M21 7.66663H18.5C17.395 7.66663 16.3352 8.10561 15.5538 8.88701C14.7724 9.66842 14.3334 10.7282 14.3334 11.8333V14.3333H11.8334V17.6666H14.3334V24.3333H17.6667V17.6666H20.1667L21 14.3333H17.6667V11.8333C17.6667 11.6123 17.7545 11.4003 17.9108 11.244C18.0671 11.0878 18.279 11 18.5 11H21V7.66663Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="64" cy="16" r="16" fill="#0D28A6" />
                            <path d="M68.1666 7.66663H59.8333C57.5321 7.66663 55.6666 9.53211 55.6666 11.8333V20.1666C55.6666 22.4678 57.5321 24.3333 59.8333 24.3333H68.1666C70.4678 24.3333 72.3333 22.4678 72.3333 20.1666V11.8333C72.3333 9.53211 70.4678 7.66663 68.1666 7.66663Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M67.3334 15.475C67.4362 16.1685 67.3178 16.8769 66.9948 17.4992C66.6719 18.1215 66.161 18.6262 65.5347 18.9414C64.9085 19.2566 64.1987 19.3663 63.5065 19.2549C62.8143 19.1436 62.1748 18.8167 61.6791 18.321C61.1833 17.8252 60.8565 17.1857 60.7451 16.4935C60.6337 15.8013 60.7434 15.0916 61.0586 14.4653C61.3739 13.8391 61.8785 13.3281 62.5009 13.0052C63.1232 12.6823 63.8315 12.5638 64.525 12.6667C65.2325 12.7716 65.8874 13.1012 66.3931 13.6069C66.8988 14.1126 67.2285 14.7676 67.3334 15.475Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M68.5834 11.4166H68.5917" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="112" cy="16" r="16" fill="#0D28A6" />
                            <path d="M121.167 8.49996C120.369 9.06285 119.485 9.49338 118.55 9.77496C118.048 9.19788 117.381 8.78887 116.639 8.60323C115.897 8.41759 115.116 8.46429 114.402 8.737C113.687 9.00972 113.074 9.49529 112.644 10.1281C112.215 10.7608 111.99 11.5102 112 12.275V13.1083C110.536 13.1463 109.084 12.8215 107.776 12.1628C106.467 11.5042 105.342 10.5322 104.5 9.33329C104.5 9.33329 101.167 16.8333 108.667 20.1666C106.95 21.3316 104.906 21.9157 102.833 21.8333C110.333 26 119.5 21.8333 119.5 12.25C119.499 12.0178 119.477 11.7863 119.433 11.5583C120.284 10.7195 120.884 9.66055 121.167 8.49996V8.49996Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <circle cx="160" cy="16" r="16" fill="#0D28A6" />
                            <path d="M153.333 9.33337H166.667C167.583 9.33337 168.333 10.0834 168.333 11V21C168.333 21.9167 167.583 22.6667 166.667 22.6667H153.333C152.417 22.6667 151.667 21.9167 151.667 21V11C151.667 10.0834 152.417 9.33337 153.333 9.33337Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M168.333 11L160 16.8333L151.667 11" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="208" cy="16" r="16" fill="#0D28A6" />
                            <path d="M211.333 15.1666V11.8333M215.5 7.66663H200.5V21H204.667V24.3333L208 21H212.167L215.5 17.6666V7.66663ZM207.167 15.1666V11.8333V15.1666Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className='col-sm-12 col-md-3' id='copyright'>
                        <h3>Copyright Binar 2022</h3>
                        <h4>Binar Cartal</h4>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Footer