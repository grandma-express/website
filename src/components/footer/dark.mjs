export const DarkFooter = ({}) => {
  return `
<footer class="three" style="background-image:url(/assets/img/patron-black.jpg)">
   <div class="container gap no-bottom">
      <div class="row">
         <div class="col-xl-8">
            <div class="footer-text">
               <a href="/">
                  <img alt="logo-white" src="/assets/img/logo-white-color.png">
               </a>
               <p>All produced by using fresh ingredients and serving up delicious food, every time. Including pizza and pasta dishes, as well as fresh salads, burgers, steaks, risottos and indulgent desserts</p>
            </div>
            <div class="link-about Newsletter">
               <h3>Newsletter</h3>
               <form>
                  <label>Subscribe and Get Recent News and Updates</label>
                  <input type="text" name="Enter Your Email Address" placeholder="Enter Your Email Address....">
                  <button class="button">subscribe</button>
               </form>
            </div>
         </div>
         <div class="col-xl-4">
            <div class="link-about Newsletter">
               <h3 class="mt-0">Contact Info</h3>
               <ul>
                  <li><span>Mon - Sat:</span><span class="ps-5">1:00 p.m. – 3:00 p.m</span></li>
                  <li><span>Sunday:</span><span class="ps-5">12:30 p.m. to 3:30 p.m.</span></li>
                  <li><span>Festivals:</span><span class="ps-5">Open Full Day</span></li>
               </ul>
            </div>
            <ul class="booking">
               <li class="contact">
                  <i>
                     <svg height="512" viewBox="0 0 32 32" width="512" xmlns="http://www.w3.org/2000/svg"><g id="_16-Smartphone" data-name="16-Smartphone"><path d="m23 2h-14a3 3 0 0 0 -3 3v22a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-22a3 3 0 0 0 -3-3zm-5.39 2-.33 1h-2.56l-.33-1zm6.39 23a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1-1v-22a1 1 0 0 1 1-1h3.28l.54 1.63a2 2 0 0 0 1.9 1.37h2.56a2 2 0 0 0 1.9-1.37l.54-1.63h3.28a1 1 0 0 1 1 1z"/><path d="m17 24h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"/></g></svg>
                  </i>
                  <div>
                     <span>for booking</span>
                     <a href="callto:01123456786"><span>01 123 456 786 </span></a>
                  </div>
               </li>
               <li class="contact">
                  <i>
                     <svg height="512" viewBox="0 0 32 32" width="512" xmlns="http://www.w3.org/2000/svg"><g id="_01-Email" data-name="01-Email"><path d="m29.61 12.21-13-10a1 1 0 0 0 -1.22 0l-13 10a1 1 0 0 0 -.39.79v14a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-14a1 1 0 0 0 -.39-.79zm-13.61-7.95 11.36 8.74-11.36 8.74-11.36-8.74zm11 23.74h-22a1 1 0 0 1 -1-1v-12l11.39 8.76a1 1 0 0 0 1.22 0l11.39-8.76v12a1 1 0 0 1 -1 1z"></path></g></svg>
                  </i>
                  <div>
                     <span>for private dining</span>
                     <a href="mailto:info@domain.com"><span>info@domain.com</span></a>
                  </div>
               </li>
               <li class="contact">
                  <i>
                     <svg height="512" viewBox="0 0 32 32" width="512" xmlns="http://www.w3.org/2000/svg"><g id="_06-Location" data-name="06-Location"><path d="m25 21.61a1 1 0 1 0 -.84 1.82c1.37.57 1.84 1.23 1.84 1.57 0 1.19-4 3-10 3s-10-1.81-10-3c0-.34.47-1 1.8-1.57a1 1 0 1 0 -.8-1.82c-2.49 1.12-3 2.46-3 3.39 0 3.28 6 5 12 5s12-1.72 12-5c0-.93-.51-2.27-3-3.39z"></path><path d="m15.45 25.83a1 1 0 0 0 1.1 0c.39-.26 9.45-6.38 9.45-13.83a10 10 0 0 0 -20 0c0 7.45 9.06 13.57 9.45 13.83zm.55-21.83a8 8 0 0 1 8 8c0 5.41-6.1 10.36-8 11.77-1.9-1.41-8-6.36-8-11.77a8 8 0 0 1 8-8z"></path><path d="m21 12a5 5 0 1 0 -5 5 5 5 0 0 0 5-5zm-8 0a3 3 0 1 1 3 3 3 3 0 0 1 -3-3z"></path></g></svg>
                  </i>
                  <div>
                     <span>location</span>
                     <h6>New Street Town 2512x (U.S)</h6></div>
               </li>
            </ul>
         </div>
      </div>
   </div>
   <div style="background-color: #000;">
      <div class="container">
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
   </div>
</footer>
   
    `
}
