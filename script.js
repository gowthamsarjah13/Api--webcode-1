 
//  https://makeup-api.herokuapp.com/api/v1/products.json

let arr = [];
 
 async function webcode() {

  let api = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json')

  let output = await api.json()

//   console.log(output)

  let body = document.querySelector('body');

  let filter = document.createElement('INPUT');
  filter.setAttribute('type', 'text');
  filter.setAttribute('placeholder', 'Search');
  body.append(filter)

  let button = document.createElement('button')
  button.setAttribute('type', 'submit')
//   button.classList.add('btn')
//   button.classList.add('btn-primary')
  button.setAttribute('onclick','submitted(this)')
  button.innerText = "Submit"
  body.append(button)



  let parent = document.createElement('div')
  parent.classList.add('container-fluid')
  body.append(parent)




   for (let i of output){

    try{


        let card = document.createElement('div')
        card.classList.add('card')
        card.setAttribute('id', i.name)
        parent.append(card)
        
        arr.push(i.name);

        let cardHead = document.createElement('div')
        cardHead.classList.add('card-header')
        card.append(cardHead)

        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
        card.append(cardBody)

        let cardFooter = document.createElement('div')
        cardFooter.classList.add('card-footer')
        card.append(cardFooter)

        //  Brand:
            
            let para = document.createElement('p')
            para.innerText = "Brand : " + i.brand
            cardFooter.append(para)

            // console.log(i.brand)

        //  Name:
            
            let htag = document.createElement('h1')
            htag.innerText = i.name
            cardHead.append(htag)

            // console.log(i.name)     

        //  Price:

            let para1 = document.createElement('p')
            para1.innerText = "Price : " + i.price
            cardFooter.append(para1)

            // console.log(i.price)     
            
        //  Image:
            
            let img = document.createElement('img')
            img.setAttribute('src', i.image_link )
            cardBody.append(img)

            // console.log(i.image_link)     
        

        //  Description:

            let para2 = document.createElement('p')
            para2.classList.add('description')
            para2.innerText = "Description : " + i.description
            cardFooter.append(para2)

            // console.log(i.description)  

            
          //  Production Link:

            let anch = document.createElement("A");
            anch.innerText =  i.product_link;
            anch.setAttribute("href", i.product_link);
            anch.setAttribute("target", "_blank");
            cardFooter.append(anch);


            // console.log(i.product_link)     

          

    }
    catch{
        // console.log("error")
    }

   }


 }

 webcode();

 function submitted(e){

    // e.preventDefault();

    let inputValue = document.querySelector('[type="text"]').value;

    // console.log(inputValue)

   

        if (arr.includes(inputValue)){
             
            let parent = document.querySelector('.container-fluid')
            parent.style.display = 'none';

            let idValue = document.getElementById(inputValue);
            
            let body = document.querySelector('body')
            let parent2 = document.createElement('div');
            parent2.classList.add('container')
            body.append(parent2)
           
            idValue.style.display = 'block'

            parent2.append(idValue)
            
        } 
        else {
             
             let warn = alert("Please enter valid input")

        }
    



 }