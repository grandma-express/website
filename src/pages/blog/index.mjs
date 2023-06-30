import { Head, Header, LightFooter } from '@website/components'

export const blogHomeFactory = ({ lang = 'en' }) => {
  return `
<!DOCTYPE html>
<html lang="${lang}">
${Head({})}
<body>

${Header({})}
<section class="gap our-blog">
   <div class="container">
      <div class="row">
         <div class="col-xl-8">
            <div class="recent-news-two">
               <img alt="recent-news-img" src="https://via.placeholder.com/850x530">
               <div class="recent-news mt-3">
                  <div>
                     <a href="#"><span>29 December, 2023</span></a>
                     <a href="blog-details.html"><h2>Tender fried baby squid with a salt, pepper</h2></a>
                     <div class="d-flex align-items-center"><img alt="img" class="me-3" src="https://via.placeholder.com/55x55"><h6>by Thomas Walimes</h6>
                     </div>
                  </div>
               </div>
            </div>
            <div class="recent-news-two">
               <img alt="recent-news-img" src="https://via.placeholder.com/850x530">
               <div class="recent-news mt-3">
                  <div>
                     <a href="#"><span>29 December, 2023</span></a>
                     <a href="blog-details.html"><h2>Operates approximately 400 restaurants</h2></a>
                     <div class="d-flex align-items-center"><img alt="img" class="me-3" src="https://via.placeholder.com/55x55"><h6>by Thomas Walimes</h6>
                     </div>
                  </div>
               </div>
            </div>
            <div class="recent-news-two">
               <img alt="recent-news-img" src="https://via.placeholder.com/850x530">
               <div class="recent-news mt-3">
                  <div>
                     <a href="#"><span>29 December, 2023</span></a>
                     <a href="blog-details.html"><h2>Eclectic and imaginative menu in the restaurant</h2></a>
                     <div class="d-flex align-items-center"><img alt="img" class="me-3" src="https://via.placeholder.com/55x55"><h6>by Thomas Walimes</h6>
                     </div>
                  </div>
               </div>
            </div>
            <div class="recent-news-two">
               <img alt="recent-news-img" src="https://via.placeholder.com/850x530">
               <div class="recent-news mt-3">
                  <div>
                     <a href="#"><span>29 December, 2023</span></a>
                     <a href="blog-details.html"><h2>Menus for your event, inspired equally</h2></a>
                     <div class="d-flex align-items-center"><img alt="img" class="me-3" src="https://via.placeholder.com/55x55"><h6>by Thomas Walimes</h6>
                     </div>
                  </div>
               </div>
            </div>
            <div class="recent-news-two">
               <img alt="recent-news-img" src="https://via.placeholder.com/850x530">
               <div class="recent-news mt-3">
                  <div>
                     <a href="#"><span>29 December, 2023</span></a>
                     <a href="blog-details.html"><h2>Flowers, candles and menu cards are provided</h2></a>
                     <div class="d-flex align-items-center"><img alt="img" class="me-3" src="https://via.placeholder.com/55x55"><h6>by Thomas Walimes</h6>
                     </div>
                  </div>
               </div>
            </div>
            <ul class="pagination">
                  <li class="prev"><a href="#"><i class="fa-solid fa-angles-left"></i></a></li>
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">...</a></li>
                  <li><a href="#">18</a></li>
                  <li class="next"><a href="#"><i class="fa-solid fa-angles-right"></i></a></li>
               </ul>
         </div>
         <div class="col-xl-4">
            <div class="posts recent-posts">
               <h3>Recent Posts</h3>
               <ul>
                 <li>
                   <img alt="img" src="https://via.placeholder.com/80x80">
                   <div>
                     <a href="#">29 December, 2022</a>
                     <h6><a href="#">Restaurant Located in on Bank Street</a></h6>
                   </div>
                 </li>
                 <li>
                   <img alt="img" src="https://via.placeholder.com/80x80">
                   <div>
                     <a href="#">29 December, 2022</a>
                     <h6><a href="#">There’s only one kind of happiness</a></h6>
                   </div>
                 </li>
                 <li>
                   <img alt="img" src="https://via.placeholder.com/80x80">
                   <div>
                     <a href="#">29 December, 2022</a>
                     <h6><a href="#">comes in all shapes and sizes.</a></h6>
                   </div>
                 </li>
               </ul>
            </div>
            <div class="posts">
               <h3>Categories</h3>
               <ul class="categories">
                 <li class="pt-0">
                     <a href="#">food<span>12</span></a>
                  </li>
                  <li>
                     <a href="#">Inspiration<span>13</span></a>
                  </li>
                  <li>
                     <a href="#">Lifestyle<span>19</span></a>
                  </li>
                  <li>
                     <a href="#">People<span>22</span></a>
                  </li>
                  <li>
                     <a href="#">Recipes <span>11</span></a>
                  </li>
                  <li>
                     <a href="#">World<span>08</span></a>
                  </li>
               </ul>
            </div>
            <div class="posts Photo">
               <h3>Instagram Photos</h3>
               <ul class="instagram-posts">
                 <li>
                   <a href="https://via.placeholder.com/100x80" data-fancybox="gallery"><figure><img alt="girl" src="https://via.placeholder.com/100x80"></figure></a>
                 </li>
                 <li>
                   <a href="https://via.placeholder.com/100x80" data-fancybox="gallery"><figure><img alt="girl" src="https://via.placeholder.com/100x80"></figure></a>
                 </li>
                 <li>
                   <a href="https://via.placeholder.com/100x80" data-fancybox="gallery"><figure><img alt="girl" src="https://via.placeholder.com/100x80"></figure></a>
                 </li>
                 <li>
                   <a href="https://via.placeholder.com/100x80" data-fancybox="gallery"><figure><img alt="girl" src="https://via.placeholder.com/100x80"></figure></a>
                 </li>
                 <li>
                   <a href="https://via.placeholder.com/100x80" data-fancybox="gallery"><figure><img alt="girl" src="https://via.placeholder.com/100x80"></figure></a>
                 </li>
                 <li>
                   <a href="https://via.placeholder.com/100x80" data-fancybox="gallery"><figure><img alt="girl" src="https://via.placeholder.com/100x80"></figure></a>
                 </li>
               </ul>
               <a href="#">Follow @winsfolio</a>
            </div>
            <div class="posts">
               <h3>Trending Dishes</h3>
               <ul class="trending-dishes-list">
                 <li class="pt-0">
                     <div class="dishes-list-img">
                        <img alt="trending-dishe" src="https://via.placeholder.com/80x80">
                     </div>
                     <h5><a href="#">Rolls with vermicelli &amp; pickle</a></h5>
                  </li>
                  <li>
                     <div class="dishes-list-img">
                        <img alt="trending-dishe" src="https://via.placeholder.com/80x80">
                     </div>
                     <h5><a href="#">Spicy salad rolls with enoki</a></h5>
                  </li>
                  <li>
                     <div class="dishes-list-img">
                        <img alt="trending-dishe" src="https://via.placeholder.com/80x80">
                     </div>
                     <h5><a href="#">chicken wings served with sriracha</a></h5>
                  </li>
                  <li>
                     <div class="dishes-list-img">
                        <img alt="trending-dishe" src="https://via.placeholder.com/80x80">
                     </div>
                     <h5><a href="#">spicy salad rolls with enoki</a></h5>
                  </li>
                  <li>
                     <div class="dishes-list-img">
                        <img alt="trending-dishe" src="https://via.placeholder.com/80x80">
                     </div>
                     <h5><a href="#">chicken wings served with sriracha</a></h5>
                  </li>
               </ul>
            </div>
            <div class="posts">
               <h3>Quick Links</h3>
               <ul class="higher-reach">
                  <li><div class="bol"></div><a href="#"> Recent News.</a></li>
                  <li><div class="bol"></div><a href="#"> Articles For Food.</a></li>
                  <li><div class="bol"></div><a href="#"> Food Menu</a></li>
                  <li><div class="bol"></div><a href="#"> Site Map</a></li>
                  <li><div class="bol"></div><a href="#"> Contact us</a></li>
                  <li><div class="bol"></div><a href="#"> About Us</a></li>
               </ul>
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
