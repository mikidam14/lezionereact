import React from 'react';
import Annuncio from "./Annuncio";

function App() {
  return (
    /*<div>
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

      <div className="annuncio">
        <img src="https://cdn-motosprint.corrieredellosport.it/images/2020/01/14/160932006-ca910bff-6b04-4449-bb90-25edfebb96a9.jpg"/>
        <h3>Vasca Da Bagno</h3>
        <p>Prezzo: Troppo in ogni caso</p>
        <p>Anno: boh</p>
      </div>
  </div>*/
    <div>
      <Annuncio 
        name="Ducati Monster 821 Stealth"
        imgUrl="https://cdnmedia.endeavorsuite.com/images/organizations/311fbeec-56c1-446b-a9ab-7a8cb6ecbf09/inventory/10262576/1.jpg"
        price="€ 11.990"
        year="2019"
      />

      <Annuncio 
        name="Honda CBR 1000 RR Repsol Ed"
        imgUrl="https://lh3.googleusercontent.com/proxy/hry05Gz_1gcNHHsF5LZHhhFafWdLDhmL9qOPNeto8pJhM55NpxU4qdMFPQ0yK8fswM3JmdgujDre5p8D9KXV3sMl7zu3q3GU6WkwZ84LDxTT5UAil5s"
        price="€ 6.000"
        year="2013"
      />

      <Annuncio 
        name="Yamaha YZF-R1"
        imgUrl="https://cdn.shopify.com/s/files/1/0235/2123/products/New_Breed_Yamaha_R1-R1M_Race_Rails_15-16_1_grande.JPG?v=1571264744"
        price="€ 10.000"
        year="2015"
      />

      <Annuncio 
        name="Vasca Da Bagno"
        imgUrl="https://cdn-motosprint.corrieredellosport.it/images/2020/01/14/160932006-ca910bff-6b04-4449-bb90-25edfebb96a9.jpg"
        price="Troppo in ogni caso"
        year="Boh"
      />
    </div>






















    /*<div>
	  	<Annuncio
			obj={{
				name="Ducati Monster 821 Stealth",
				imgUrl="https://cdnmedia.endeavorsuite.com/images/organizations/311fbeec-56c1-446b-a9ab-7a8cb6ecbf09/inventory/10262576/1.jpg",
				price="€ 11.990",
				year="2019"}} 
        
      	/>

		<Annuncio
			obj={{
				name="Honda CBR 1000 RR Repsol Ed",
				imgUrl="https://lh3.googleusercontent.com/proxy/hry05Gz_1gcNHHsF5LZHhhFafWdLDhmL9qOPNeto8pJhM55NpxU4qdMFPQ0yK8fswM3JmdgujDre5p8D9KXV3sMl7zu3q3GU6WkwZ84LDxTT5UAil5s",
				price="€ 6.000",
				year="2013"
			}} 
		/>

		<Annuncio
			obj={{
				name="Yamaha YZF-R1",
				imgUrl="https://cdn.shopify.com/s/files/1/0235/2123/products/New_Breed_Yamaha_R1-R1M_Race_Rails_15-16_1_grande.JPG?v=1571264744",
				price="€ 10.000",
				year="2015"
			}} 
    />
    
    <Annuncio 
      obj = {{
        name="Vasca Da Bagno"
        imgUrl="https://cdn-motosprint.corrieredellosport.it/images/2020/01/14/160932006-ca910bff-6b04-4449-bb90-25edfebb96a9.jpg"
        price="Troppo in ogni caso"
        year="Boh"
      }}
    />
    </div>*/
  );
}

export default App;
