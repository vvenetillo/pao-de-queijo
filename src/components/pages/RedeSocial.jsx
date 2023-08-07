import instagram2 from '../../img/instagram.avif';

import style from '../style/RedeSocial.module.css';

export default function RedeSocial(){
    return(
        <div>
             <h3 id="redesocial" className={style.redesocial}>Rede Social</h3>
            <article className={style.socialmedia} target="_blank">
                <a href="https://www.instagram.com/paodequeijo.carioca/">
                <img src={instagram2} className={style.instagram} alt="instagram" />
                </a>
            </article>
        </div>
    )
}