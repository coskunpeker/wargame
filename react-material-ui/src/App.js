import React from 'react';

import CardComponent from "./components/card_component"


// configurations can be stored in json file also
const data = {
  content: {
    body: [
      {
        _uid: "BUY6Drn9e1",
        type: "FUEL",
        title: "Kalan Yakıt Miktarı",
        measurement_unit: "lt"
      },
      {
        _uid: "gJZoSLkfZV",
        type: "DAMAGE",
        title: "Araç Hasar Oranı",
        measurement_unit: "%"
      },
      {
        _uid: "X1JAfdsZxy",
        type: "AMMO",
        title: "Kalan Mühimmat Miktarı",
        measurement_unit: "adet"
      }
    ]
  }
};


function App() {
  return (
      <div
          style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
      >
        {data.content.body.map(config => <CardComponent key={config._uid} {...config}></CardComponent>)}

      </div>
  );
}

export default App;
