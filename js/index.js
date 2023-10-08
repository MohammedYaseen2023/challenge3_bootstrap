const app_nav=document.querySelector("#MainNav")
const app_header=document.querySelector("#siteheader")
const app_f=document.querySelector("#pagefooter")
const app =document.querySelector("#card_title")

app_nav.innerHTML=`
<nav   class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Mhd Shop</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item"> 
            <a class="nav-link active" aria-current="page" href="ProductsPage.html">Add Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              shop
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">My shopping</a></li>
              <li><a class="dropdown-item" href="#">Recently Viewed</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Witchlist</a></li>
            </ul>
          </li>

        </ul>

        <form class="d-flex ">
          <button class="btn btn-outline-dark" type="submit">
            <i class="bi-cart-fill me-1"> </i>
            Cart
            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
          </button>
        </form>
      </div>
    </div>
  </nav>
`;

app_header.innerHTML=`
<header class="bg-black py-1 ">

    <div class="container px-4 px-lg-5 my-5">
      <div class="text-center text-white">

        <h1 class="display-4 fw-bolder">
          Shop in Mhd Store
        </h1>
        <p class="lead fw-normal text-white-50 mb-0">
          Everything in one place
        </p>
      </div>
    </div>
  </header>
  `;

if (typeof localStorage.getItem('products') !== 'undefined' && localStorage.getItem('products') !== null) {
    // yourVariable is defined and not null

    const prods=JSON.parse(localStorage.getItem("products"));
    prods.forEach(function (item) { 
  
    app.innerHTML+=`
    <div class="col mb-5">
    <div class="card h-100">
      <img class="card-img-top" src="images/image1.jpeg" alt="error">
      <div class="card-body p-4">
        <div class="text-center">
          <h5 class=" fw-bolder" >
              ${item.description}
          </h5>
          ${item.price} $
        </div>
        <div class="card-footer p-4 pt-4 border-top-0 bg-transparent ">
          <div class="text-center" id="card1">
            <a class="btn btn-outline-dark mt-auto" href="#" id="cart-no1" >
              Add To Cart
            </a>
            
          </div>

        </div>
      </div>

    </div>
  </div>
        `; 
    })       
  } else {
    
    app.innerHTML=`
    <div  > No Item Added<\div>
    `
    // yourVariable is either undefined or null
  }
  
  function showLoadingAnimation() {
    console.log(1);
  }
  
  function hideLoadingAnimation() {
    // your code here
    console.log(2);

  }
  
  window.addEventListener('load', function() {
    showLoadingAnimation();
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    hideLoadingAnimation();
  });
  
   
  app_f.innerHTML=`
    <span class="text-light bg-secondary  d-flex justify-content-center p-3"> Mohammed Yaseen</span>
    `;

//   not working????
// app_f.innerHTML=`
// <footer class="bg-dark ">
// <span class="text-light d-flex justify-content-center p-3"> Mohammed Yaseen</span>
// </footer>
// `;

   
        






 