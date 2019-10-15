import Autor from './Autor';

async function fetchData() {
  let list : Autor[];
  // await Object.keys(json).map(item => {
  //   list.push(new Autor(json[item].imie, json[item].nazwisko));
  // });

  // console.log(list);

  try {
     fetch('./static/dane.json')
      .then(response => response.json())
      .then(data => {
        //console.log(data)
        list = data.map(item => <Autor>{
          imie : item.imie,
          nazwisko : item.nazwisko
        });
        console.log(list)
      });

    // await fetch('./static/dane.json').then(res => {
    //   const data = res.json();
    //   console.log(data);
    //   // console.log(res);
    //   Object.keys(data).map(item => {
    //     // console.log(item);
    //     list.push(new Autor(item['imie'], item['nazwisko']));
    //   });
    // });
    // console.log(list);
  } catch (err) {
    console.log(err);
  }
 
}

fetchData();
