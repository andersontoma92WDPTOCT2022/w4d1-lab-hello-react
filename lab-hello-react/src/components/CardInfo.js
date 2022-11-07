function CardInfo(props) {
  //
  console.log(props.end, 'props.end');
  return (
    <div>
      {/**/}
      <img className="imagens" src={props.end} alt={props.alt} />
      <div>
        <h5>{props.titulo}</h5>
        <p className="pCard">{props.paragrafo}</p>
      </div>
    </div>
  );
}
export default CardInfo;
