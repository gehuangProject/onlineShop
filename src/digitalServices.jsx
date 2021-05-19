import React, { useState } from 'react';

export default function DigitalServices() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const [digitalServices] = useState([
    {
      name: 'Post-Market Radar',
      preis: '',
      mitSteuer: ''
    },
    {
      name: 'Regulatory Radar',
      preis: '',
      mitSteuer: ''
    },
  ])

  return (
    <div className="App">
      <h1>Digitale Dienstleistungen</h1>
      <div className="buecher">
        {digitalServices.map((product, key) => (
          <div className="product" key={key}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <h4>{product.preis} € </h4>
            <h4> zzgl. MwSt.{product.mitSteuer} € (inkl. MwSt.)</h4>
            <h4>{product.versand}</h4>
            <button onClick={() => addToCart(product)}>kaufen</button>
          </div>
        ))}
        </div>
    </div>
  );
}