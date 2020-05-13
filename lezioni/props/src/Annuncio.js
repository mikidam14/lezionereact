import React from 'react';

function Annuncio(props){
	return (
		<div className="annuncio">
			<img src={props.imgUrl}/>
			<h3>{props.name}</h3>
			<p>Prezzo: {props.price}</p>
			<p>Anno: {props.year}</p>
		</div>
		/*
		<div className="annuncio">
			<img src={props.obj.imgUrl}/>
			<h3>{props.obj.name}</h3>
			<p>Prezzo: {props.obj.price}</p>
			<p>Anno: {props.obj.year}</p>
		</div>*/
	);
}

export default Annuncio;
