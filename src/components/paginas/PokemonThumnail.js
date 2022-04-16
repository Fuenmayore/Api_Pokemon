import React from "react";

const PokemonThumnail= ({id, name, image, type,link, ability, modal}) => {

    const style = `thumb-container ${type}`
return (
    <div className={style}>
    <div className="number">
        <small>#0{id}</small>
        <img  src={image} alt={name} />
        <div className="detail-wrapper">
            <h3>{name}</h3>
           <div><strong>Ability</strong></div>
           <div><strong>{ability}</strong></div>
           <div>{modal}</div>
            <small>Type: {type}</small>
           
        </div>
    </div>
    </div>
);
}




export default PokemonThumnail