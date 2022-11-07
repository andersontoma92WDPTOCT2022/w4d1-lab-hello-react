function CardInfo(props) {
  //
  console.log(props, 'props');
  return (
    <div>
      {/**/}
      <img src={props.end} alt={props.alt} />
      <div>
        <h3>{props.titulo}</h3>
        <p>{props.paragrafo}</p>
      </div>
    </div>
  );
}
export default CardInfo;
