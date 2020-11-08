
let ticketInfoArray = [
  {
    id: 0,
    date: '6-19-21',
    city: 'St. Paul, MN',
    venue: 'Xcel Energy Center',
    price:150,

  },
  {
    id: 1,
    date: '6-21-21',
    city: 'Chicago, IL',
    venue: 'United Center',
    price: 150,
   
  },
  {
    id: 2,
    date: '6-24-21',
    city: 'Detroit,MI',
    venue: 'Little Caesar',
    price: 150,
    
  },
  {
    id: 3,
    date: '6-25-21',
    city: 'Pittsburg,PA',
    venue: 'PPG Parcel Arena',
    price: 150,
  
  },  
  ]
  // reset totals at start of page
  let totalQty = 0;
  let totalCost = 0;
  let finalPrice =0;
  
 

 const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint
  };

  const studentPrinter = (ticketInfoArray) => {
    let domString = '';
    for (let i = 0; i < ticketInfoArray.length; i++) {
      domString += `<div class="col-2 ">${ticketInfoArray[i].date}</div>`
      domString += `<div class="col-3 ">${ticketInfoArray[i].city}</div>`
      domString += `<div class="col-3 ">${ticketInfoArray[i].venue}</div>`
      domString += `<div class="col-2 ">${ticketInfoArray[i].price}</div>`
      domString += `<input type="number" class="col-1 " id =${ticketInfoArray[i].id} value=0 > `;
      domString += `<button type="txt" class="btn btn-light" ></button>`;
      domString += `<br>`;
     }
     domString += `<button class="btn btn-light purchase_tab"  onclick="getQty()">Purchase</button>`;

    printToDom('allInfo', domString)
    
    }
  studentPrinter(ticketInfoArray)

  function getQty() {
    const value1 = parseFloat($("#0").val())
    // let Qtyt = value1;
    // console.log("qty is ", Qty);
    const value2 = parseFloat($("#1").val())
    const value3 = parseFloat($("#2").val())
    const value4 = parseFloat($("#3").val())
    const totalQty = Number(value1) + Number(value2) + Number(value3) + Number(value4);

    // console.log(Qtyt)
    
   // log total qty
      console.log("new qty ", totalQty)
      // const total1 = Number(totalQty)
      // console.log("total1 is ", total1)
      total_cost();
    }
    
 // }

  function total_cost () {
   // finalPrice = Number(totalQty) ;
    // log final price
    console.log("new final",finalPrice);
    //console.log(total1);
  }
// when cart button is clicked print alert receipt
function cart_checkout () {
alert("Thank You for your purchase ! ")
// alert("Thank You for purchasing " + totalQty + " tickets for $" + finalPrice + "!")
}


 