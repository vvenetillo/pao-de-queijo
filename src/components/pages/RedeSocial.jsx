import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


import instagram2 from '../../img/instagram.avif';

import style from '../style/RedeSocial.module.css';

export default function RedeSocial(){
    const tl = useRef();
    const parentEl = useRef();

useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    tl.current = gsap.timeline({
        scrollTrigger: {
            trigger: parentEl.current, // Use a referência do elemento pai
            scrub: true,
            start: "top 450px",
            end: "bottom 850px"
        }
    }).fromTo(`.${style.socialmedia}`, { // Altere o seletor para atingir a classe correta
        opacity: 0,
        y: 150
    }, {
        opacity: 1,
        y: 0
    });
}, []);

   
   

    return(
        <div ref={parentEl}>
             <h3 id="redesocial" className={style.redesocial}>Rede Social</h3>
            <article className={style.socialmedia} id="socialmedia" target="_blank" >
                <a href="https://www.instagram.com/paodequeijo.carioca/">
                <img src={instagram2} className={style.instagram} alt="instagram" />
                </a>
            </article>
        </div>
    )
}
