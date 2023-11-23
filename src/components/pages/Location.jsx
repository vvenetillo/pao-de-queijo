import style from '../style/Location.module.css';

export default function Location() {
  return (
    <>
    <h3 id="location" className={style.location}>Localização</h3>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.295327019827!2d-43.443188724918215!3d-22.754418832442887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x996653de43ce19%3A0x1f7a4b5bc45937c0!2sAv.%20S%C3%A3o%20Jo%C3%A3o%20Batista%2C%20194%20-%20Maria%20da%20Luz%2C%20Nova%20Igua%C3%A7u%20-%20RJ%2C%2026013-030!5e0!3m2!1spt-BR!2sbr!4v1700684984379!5m2!1spt-BR!2sbr"
      allowfullscreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      id="place"
      className={style.place}
    ></iframe>
    </>
  );
}
