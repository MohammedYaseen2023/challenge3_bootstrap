
// el("#SaveProduct").addEventListener('click',function{

// })

 

document.querySelector("#SaveProduct").addEventListener('click',function()
 {     
 
  if (findProduct(document.getElementById("productName").value)){  

         addProduct();
         document.getElementById("msg_bar").innerHTML=`
         <div id="msg_bar" class="container text-center  p-2 w-50 bg-success-subtle  border-1 rounded-4 "> 
         <label class=" fw-bold   py-2 " for= "found1" id="found"> Data Added Successfully </label>
     
       </div>
         `
        
          }else{

            document.getElementById("msg_bar").innerHTML=`
            <div id="msg_bar" class="container text-center  p-2 w-50 bg-danger-subtle  border-1 rounded-4 "> 
            <label class=" fw-bold   py-2 " for= "found1" id="found"> Data Already Exist </label>
        
          </div>
            `
          };   
          setTimeout(() => {
            document.getElementById("msg_bar").innerHTML=`
            <div class ="visually-hidden"> </div>
            `;
            
            }, 3000);
          
})


function addProduct() {
       var productName = document.getElementById("productName").value;
       var description = document.getElementById("Description").value;
       var price = document.getElementById("price").value;

       var entry = {
         "productName": productName,
         "description": description,
         "price":price 
       };

       let existingEntries = getstorage("products");

       if (existingEntries == null) {

         existingEntries = [];
       }
       
       existingEntries.push(entry);
       
       setstorage("products",existingEntries);
     }

//  search function 


  //  try {
  //      // let aa =JSON.stringify(foundEntry);
  //      if ((JSON.stringify(foundEntry)).length>1){
  //             return false
  //      } else return true;

  //  } catch (error) {
  //     return true 
  //  }
       // Return the found entry or null if not found
       //   return foundEntry || true;
     

// document.querySelector("#SaveProduct").addEventListener('click',function()
// {
// // const products = [{ name : document.getElementById('productName').value,description:document.getElementById('description').value, price: document.getElementById('price').value }];
// // const prodlist=getstorage(products);
// var allEntries = JSON.parse(localStorage.getItem("products")) || [];

// var products = [{ name: document.getElementById('productName').value, description:document.getElementById('Description').value, price: document.getElementById('price').value  }];
 
// allEntries.push(products); 
 
  

//         setstorage("products",products);
   
// });

//  console.log(products.name);