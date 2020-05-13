import React from 'react';
import Annuncio from "./Annuncio";

function App2() {
  return (
    <div>
      <div className="annuncio">
        <img src="https://cdnmedia.endeavorsuite.com/images/organizations/311fbeec-56c1-446b-a9ab-7a8cb6ecbf09/inventory/10262576/1.jpg"/>
		<h3>Ducati Monster 821 Stealth</h3>
        <p>Prezzo: € 11.990</p>
        <p>Anno: 2019</p>
      </div>

	  <div className="annuncio">
        <img src="https://lh3.googleusercontent.com/proxy/hry05Gz_1gcNHHsF5LZHhhFafWdLDhmL9qOPNeto8pJhM55NpxU4qdMFPQ0yK8fswM3JmdgujDre5p8D9KXV3sMl7zu3q3GU6WkwZ84LDxTT5UAil5s"/>
		<h3>Honda CBR 1000 RR Repsol Ed</h3>
        <p>Prezzo: € 6.000</p>
        <p>Anno: 2013</p>
      </div>

	  <div className="annuncio">
        <img src="https://cdn.shopify.com/s/files/1/0235/2123/products/New_Breed_Yamaha_R1-R1M_Race_Rails_15-16_1_grande.JPG?v=1571264744"/>
		<h3>Yamaha YZF-R1</h3>
        <p>Prezzo: € 10.000</p>
        <p>Anno: 2015</p>
      </div>
    </div>
  );
}