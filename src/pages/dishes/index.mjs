import { Head, Header, LightFooter } from '@website/components'

export const dishesFactory = ({ lang = 'en' }) => {
  return `
<!DOCTYPE html>
<html lang="${lang}">
${Head({})}
<body>

${Header({})}
<section class="gap">
   <div class="container">
      <div class="row">
         <div class="col-xl-4 col-md-6">
            <div class="featured-dishes">
               <div class="featured-dishes-img">
                  <img alt="featured-dishes" src="https://via.placeholder.com/323x323">
               </div>
               <ul class="star">
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
               </ul>
               <a href="product-details.html"><h5>Brown Sandwich</h5></a>
               <p><span>$</span>10.85</p>
               <a href="#">
               <i><svg enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m452 120h-60.946c-7.945-67.478-65.477-120-135.054-120s-127.109 52.522-135.054 120h-60.946c-11.046 0-20 8.954-20 20v352c0 11.046 8.954 20 20 20h392c11.046 0 20-8.954 20-20v-352c0-11.046-8.954-20-20-20zm-196-80c47.484 0 87.019 34.655 94.659 80h-189.318c7.64-45.345 47.175-80 94.659-80zm176 432h-352v-312h40v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h192v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h40z"></path></g></svg></i></a>
            </div>
         </div>
         <div class="col-xl-4 col-md-6">
            <div class="featured-dishes">
               <div class="sale">
                  <h6>Sale</h6>
               </div>
               <div class="featured-dishes-img">
                  <img alt="featured-dishes" src="https://via.placeholder.com/323x323">
               </div>
               <ul class="star">
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
               </ul>
               <a href="product-details.html"><h5>Brown Sandwich</h5></a>
               <div class="d-flex">
                  <p><span>$</span>10.85</p>
                  <del>$14.5</del>
               </div>
               <a href="#">
               <i><svg enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m452 120h-60.946c-7.945-67.478-65.477-120-135.054-120s-127.109 52.522-135.054 120h-60.946c-11.046 0-20 8.954-20 20v352c0 11.046 8.954 20 20 20h392c11.046 0 20-8.954 20-20v-352c0-11.046-8.954-20-20-20zm-196-80c47.484 0 87.019 34.655 94.659 80h-189.318c7.64-45.345 47.175-80 94.659-80zm176 432h-352v-312h40v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h192v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h40z"></path></g></svg></i></a>
            </div>
         </div>
         <div class="col-xl-4 col-md-6">
            <div class="featured-dishes">
               <div class="featured-dishes-img">
                  <img alt="featured-dishes" src="https://via.placeholder.com/323x323">
               </div>
               <ul class="star">
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
               </ul>
               <a href="product-details.html"><h5>Parisian Hamburger</h5></a>
               <p><span>$</span>10.85</p>
               <a href="#">
               <i><svg enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m452 120h-60.946c-7.945-67.478-65.477-120-135.054-120s-127.109 52.522-135.054 120h-60.946c-11.046 0-20 8.954-20 20v352c0 11.046 8.954 20 20 20h392c11.046 0 20-8.954 20-20v-352c0-11.046-8.954-20-20-20zm-196-80c47.484 0 87.019 34.655 94.659 80h-189.318c7.64-45.345 47.175-80 94.659-80zm176 432h-352v-312h40v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h192v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h40z"></path></g></svg></i></a>
            </div>
         </div>
         <div class="col-xl-4 col-md-6">
            <div class="featured-dishes">
               <div class="featured-dishes-img">
                  <img alt="featured-dishes" src="https://via.placeholder.com/323x323">
               </div>
               <ul class="star">
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
               </ul>
               <a href="product-details.html"><h5>Parisian Hamburger</h5></a>
               <p><span>$</span>10.85</p>
               <a href="#">
               <i><svg enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m452 120h-60.946c-7.945-67.478-65.477-120-135.054-120s-127.109 52.522-135.054 120h-60.946c-11.046 0-20 8.954-20 20v352c0 11.046 8.954 20 20 20h392c11.046 0 20-8.954 20-20v-352c0-11.046-8.954-20-20-20zm-196-80c47.484 0 87.019 34.655 94.659 80h-189.318c7.64-45.345 47.175-80 94.659-80zm176 432h-352v-312h40v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h192v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h40z"></path></g></svg></i></a>
            </div>
         </div>
         <div class="col-xl-4 col-md-6">
            <div class="featured-dishes">
               <div class="sale">
                  <h6>Sale</h6>
               </div>
               <div class="featured-dishes-img">
                  <img alt="featured-dishes" src="https://via.placeholder.com/323x323">
               </div>
               <ul class="star">
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
               </ul>
               <a href="product-details.html"><h5>Brown Sandwich</h5></a>
               <div class="d-flex">
                  <p><span>$</span>10.85</p>
                  <del>$14.5</del>
               </div>
               <a href="#">
               <i><svg enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m452 120h-60.946c-7.945-67.478-65.477-120-135.054-120s-127.109 52.522-135.054 120h-60.946c-11.046 0-20 8.954-20 20v352c0 11.046 8.954 20 20 20h392c11.046 0 20-8.954 20-20v-352c0-11.046-8.954-20-20-20zm-196-80c47.484 0 87.019 34.655 94.659 80h-189.318c7.64-45.345 47.175-80 94.659-80zm176 432h-352v-312h40v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h192v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h40z"></path></g></svg></i></a>
            </div>
         </div>
         <div class="col-xl-4 col-md-6">
            <div class="featured-dishes">
               <div class="featured-dishes-img">
                  <img alt="featured-dishes" src="https://via.placeholder.com/323x323">
               </div>
               <ul class="star">
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
                  <li><i class="fa-solid fa-star"></i></li>
               </ul>
               <a href="product-details.html"><h5>Parisian Hamburger</h5></a>
               <p><span>$</span>10.85</p>
               <a href="#">
               <i><svg enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m452 120h-60.946c-7.945-67.478-65.477-120-135.054-120s-127.109 52.522-135.054 120h-60.946c-11.046 0-20 8.954-20 20v352c0 11.046 8.954 20 20 20h392c11.046 0 20-8.954 20-20v-352c0-11.046-8.954-20-20-20zm-196-80c47.484 0 87.019 34.655 94.659 80h-189.318c7.64-45.345 47.175-80 94.659-80zm176 432h-352v-312h40v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h192v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h40z"></path></g></svg></i></a>
            </div>
         </div>
      </div>
   </div>
</section>
${LightFooter({})}

<!-- progress -->
<div id="progress">
      <span id="progress-value"><i class="fa-solid fa-arrow-up"></i></span>
</div>
</body>

`
}
