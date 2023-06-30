

export const LightFooter = ({}) => {


    return `
<footer style="background-image: url(https://via.placeholder.com/1920x660);background-color: #f5f8fd;">
   <div class="container">
      <div class="row">
         <div class="col-xl-4 col-lg-6">
            <div class="logo-white">
               <a href="/"><img alt="logo-white" src="/assets/img/logo-white.png"></a>
               <p>Tuesday - Saturday:   12:00pm - 23:00pm
               <span>Closed on Sunday</span></p>
               <img alt="tripa" src="/assets/img/tripa.png">
               <h6>5 star rated on TripAdvisor</h6>
            </div>
         </div>
         <div class="col-xl-2 col-lg-3 col-md-6">
            <div class="link-about">
               <h3>About</h3>
               <ul>
                  <li><i class="fa-solid fa-angle-right"></i><a href="/about">Information</a></li>
                  <li><i class="fa-solid fa-angle-right"></i><a href="#">Special Dish</a></li>
                  <li><i class="fa-solid fa-angle-right"></i><a href="#">Reservation</a></li>
                  <li><i class="fa-solid fa-angle-right"></i><a href="/contacts">Contact</a></li>
               </ul>
            </div>
         </div>
         <div class="col-xl-2 col-lg-3 col-md-6">
            <div class="link-about">
               <h3>menu</h3>
               <ul>
                  <li><i class="fa-solid fa-angle-right"></i><a href="menu-1.html">Steaks</a></li>
                  <li><i class="fa-solid fa-angle-right"></i><a href="menu-1.html">Burgers</a></li>
                  <li><i class="fa-solid fa-angle-right"></i><a href="menu-1.html">Coctails</a></li>
                  <li><i class="fa-solid fa-angle-right"></i><a href="menu-1.html">Bar B Q</a></li>
                  <li><i class="fa-solid fa-angle-right"></i><a href="menu-1.html">Desserts</a></li>
               </ul>
            </div>
         </div>
         <div class="col-xl-4 col-lg-6">
            <div class="link-about">
               <h3>Newsletter</h3>
               <p>Get recent news and updates.</p>
               <form class="footer-form">
                  <input type="text" name="Enter Your Email Address" placeholder="Enter Your Email Address...">
                  <button class="button">Subscribe</button>
               </form>
            </div>
         </div>
      </div>
      <div class="footer-bootem">
         <h6><span>© 2023 Foodio</span> | Restaurant and BBQ.</h6>
         <div class="header-social-media">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">Youtube</a>
         </div>
      </div>
   </div>
</footer>   
    `
}
