import instagram2 from '../../img/instagram.avif';
export default function RedeSocial(){
    return(
        <div>
             <h3 id="redesocial" className="redesocial">Rede Social</h3>
            <article className="socialmedia" target="_blank">
                <a href="https://www.instagram.com/paodequeijo.carioca/">
                <img src={instagram2} className='instagram' alt="instagram" />
                </a>
            </article>
        </div>
    )
}