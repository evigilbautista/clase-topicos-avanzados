import React from 'react';

export default function carro(props){
  return(
    <div>
    <h2> soy un carro modelo(props.marca)</h2>
    <img src = {props.imagen}
    alt= "imagen del carro"
    with= "150"/>
    <p>{props.descripcion} </p>
</div>
  );
}