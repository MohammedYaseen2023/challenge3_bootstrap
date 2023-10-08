
// el("#SaveProduct").addEventListener('click',function{

// })
document.querySelector("#SaveProduct").addEventListener('click',function()
 {
       console.log(findProduct(document.getElementById("productName").value));
       
         if (findProduct(document.getElementById("productName").value)){
              addProduct();
       }else{
        document.getElementById("found").innerHTML+="data already exist"

       };
       

        
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
       
       // Get existing entries from local storage
       var existingEntries = JSON.parse(localStorage.getItem("products"));
       
       if (existingEntries == null) {
         existingEntries = [];
       }
       
       existingEntries.push(entry);
       
       localStorage.setItem("products", JSON.stringify(existingEntries));
     }
//  search function 

function findProduct(productName) {
       var existingEntries = JSON.parse(localStorage.getItem("products"));
       if (existingEntries == null) {
         return true;
       }
       var foundEntry = existingEntries.find(function(existingEntries) {
              return existingEntries.productName === productName       
       });
    
       
   try {
       // let aa =JSON.stringify(foundEntry);
       if ((JSON.stringify(foundEntry)).length>1){
              return false
       } else return true;

   } catch (error) {
      return true 
   }

 
       // Return the found entry or null if not found
       //   return foundEntry || true;
     }
     

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