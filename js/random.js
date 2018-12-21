// http://allengoo.com/php/bottleworksform2.php
let dBdata = {
init: ()=>{
    fetch('http://allengoo.com/php/bottleworksform2.php')
        .then(response=>response.json())
        .then(data=> dBdata.doMath(data))
        .catch(err=>console.log(`Error: ${err}`))
    },
    doMath: (data)=>{
        let arrayOfRandom=[]
        // get the amount of items
        let divs= document.querySelectorAll('.col-2')
        console.log(divs)
        divs.forEach(div=>{
           let items= data[(Math.floor((Math.random() * data.length) + 0))]
           arrayOfRandom.push(items)
        })
        divs.forEach((div, index)=>{
            let image=div.childNodes[0]
            let paragraph=div.childNodes[2]
            let restaurant=div.childNodes[1]
            if(!arrayOfRandom[index].image_name==""){ image.src=`http://allengoo.com/php/images/${arrayOfRandom[index].image_name}`
            }
            restaurant.textContent=arrayOfRandom[index].restaurant_name
            paragraph.textContent=`${arrayOfRandom[index].number_of_bottles} Bottles collected`
        })
        console.log(arrayOfRandom)
        //randomly select 4 items
        //validate that there are not duplicate values
        //if values are duplicate run math again.
    }

}
document.addEventListener("DOMContentLoaded", dBdata.init)