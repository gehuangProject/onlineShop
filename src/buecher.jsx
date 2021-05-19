import React, { useState } from 'react';

export default function Products() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const [products] = useState([
    {
      name: 'Basiswissen Medizinische Software',
      preis: '42.90',
      mitSteuer: '45,90',
      versand: 'National: 5€ | International 9,90€',
      image: 'https://www.johner-institut.de/fileadmin/_processed_/a/e/csm_Basiswissen_med_Software_0261c07959.png'
    },
    {
      name: 'Usability Engineering als Erfolgsfaktor',
      preis: '76.64',
      mitSteuer: '82,00',
      versand: 'National: 5€ | International 9,90€',
      image: 'https://www.johner-institut.de/fileadmin/_processed_/d/7/csm_Usability-Buch-V2_87cd7c406c.png'
    },
  ])

  return (
    <div className="App">
      <h1>Bücher</h1>
      <div className="buecher">
        {products.map((product, key) => (
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