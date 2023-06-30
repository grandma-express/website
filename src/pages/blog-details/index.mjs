import { Head, Header, LightFooter } from "@website/components";

export const blogDetailsFactory = ({ lang = `en` }) => {



    return `
<!DOCTYPE html>
<html lang="${lang}">
${Head({})}
<body>

${Header({})}
<section class="banner" style="background-image:url(https://via.placeholder.com/1920x470)">
   <div class="container">
      <div class="row align-items-center">
         <div class="col-lg-7">
            <div class="title-area-data">
               <h2>Blog Details</h2>
               <p>A magical combination that sent aromas to the taste buds</p>
            </div>
            <ol class="breadcrumb">
               <li class="breadcrumb-item">
                 <a href="index.html"><i class="fa-solid fa-house"></i> Home</a>
               </li>
               <li class="breadcrumb-item active" aria-current="page">our blog</li>
               <li class="breadcrumb-item active" aria-current="page">Blog Details</li>
            </ol>
         </div>
         <div class="col-lg-5">
            <div class="row">
               <div class="col-6">
                  <div class="title-area-img">
                     <img alt="title-area-img" src="https://via.placeholder.com/230x376">
                     <img alt="pata" class="pata" src="assets/img/pata.png">
                  </div>
               </div>
               <div class="col-6">
                  <div class="title-area-img two">
                     <img alt="title-area-img" src="https://via.placeholder.com/230x376">
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<section class="gap our-blog">
   <div class="container">
      <div class="row">
         <div class="col-xl-8">
            <div class="recent-news-two">
               <img alt="recent-news-img" src="https://via.placeholder.com/850x530">
               <div class="recent-news mt-3">
                  <div>
                     <a href="#"><span>29 December, 2023</span></a>
                     <h2>Tender fried baby squid with a salt, pepper</h2>
                     <div class="d-flex align-items-center"><img alt="img" class="me-3" src="https://via.placeholder.com/55x55"><h6>by Thomas Walimes</h6>
                     </div>
                  </div>
               </div>
            </div>
            <p>
               Nisl quam nestibulum ac quam nec odio elementu aucan ligula. Orci varius natoque pena tibus
               et ma urient monte nascete ridiculus mus nellente sque um ac quam nec odio rbine. Nisl quam
               nestibulum ac quam nec odio elementu aucan ligula. Orci varius natoque pena tibus et ma urie
               nt monte nascete ridiculus mus nellentesque um ac quam nec odio rbine. Nisl quam nestibulu
               m ac quam nec odio elementu aucan ligula. Orci varius natoque pena tibus et ma urient monte
               nascete ridiculus mus nellentesque um ac quam nec odio rbine. Nisl quam nestibulum ac quam
               nec odio elementu aucan ligula. Orci varius natoque penac quam nec odio rbine.
               <br><br>
               te nascete ridiculus mus nellentesque um ac quam nec odio rbine. Nisl quam nestibulum ac qu
               am nec odio elementu aucan ligula. Orci varius natoque pena tibus et ma urient monte nascete
               ridiculus mus nellentesque um ac quam nec odio rbine. Nisl quam nestibulum ac quam nec odio
               elementu aucan ligula. Orci varius natoque penac quam nec odio rbine.
            </p>
            <div class="quote">
               <div>
              <i>
                <svg fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200px" height="200px" viewBox="0 0 91.674 91.674" xml:space="preserve">
                <path d="M38.157,0.003c-8.398,0.373-15.895,3.722-21.68,9.685C1.141,25.498,1.436,55.3,1.52,58.596l0.001,31.078
                  c0,1.104,0.896,2,2,2h30.691c1.104,0,2-0.896,2-2V58.981c0-1.104-0.896-2-2-2H18.527c0.003-2.562,0.313-25.309,10.186-35.455
                  c2.672-2.747,5.836-4.214,9.674-4.485c1.048-0.074,1.859-0.945,1.859-1.995V2.002c0-0.546-0.223-1.068-0.617-1.445
                  C39.234,0.179,38.71-0.031,38.157,0.003z"></path>
                <path d="M89.553,0.556c-0.395-0.377-0.906-0.587-1.472-0.553C79.684,0.375,72.186,3.725,66.4,9.688
                  C51.065,25.498,51.359,55.3,51.443,58.596l0.001,31.078c0,1.104,0.896,2,2,2h30.69c1.104,0,2-0.896,2-2V58.981
                  c0-1.104-0.896-2-2-2H68.452c0.003-2.562,0.313-25.309,10.185-35.455c2.673-2.747,5.837-4.214,9.675-4.485
                  c1.048-0.074,1.858-0.945,1.858-1.995V2.002C90.17,1.457,89.947,0.935,89.553,0.556z"></path>
                </svg>
              </i>
              </div>
              <h3>A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food. </h3>
            </div>
            <div class="blog-img">
               <img alt="blog-img" src="https://via.placeholder.com/850x490">
               <h4>Table restaurant located in on Bank Street</h4>
            </div>
            <div class="strawberry">
               <h3>Strawberry Pretzel Dessert</h3>
               <p>
                  Nisl quam nestibulum ac quam nec odio elementu aucan ligula. Orci varius natoque pena tibus et ma urient monte nascete ridiculus mus nellente sque um ac quam nec odio rbine. Nisl quam nestibulum ac quam nec odio elementu aucan ligula. Orci varius natoque pena tibus et ma urient monte nascete ridiculus mus nellentesque um ac qua.
               </p>
               <ul class="quality-foods mt-4">
                  <li><img alt="img" src="assets/img/check.png"><h6>Fresh &amp; Tasty</h6></li>
                  <li><img alt="img" src="assets/img/check.png"><h6>Best in organic foods</h6></li>
                  <li><img alt="img" src="assets/img/check.png"><h6>100 Fresh Ingredients</h6></li>
                  <li><img alt="img" src="assets/img/check.png"><h6>Better for your Health</h6></li>
               </ul>
            </div>
            <div class="row">
               <div class="col-md-6">
                  <div class="blog-img-video video">
                     <img alt="video-img" src="https://via.placeholder.com/400x280">
                     <a data-fancybox="" href="https://www.youtube.com/watch?v=1La4QzGeaaQ"><i>
                       <svg width="15" height="22" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M11 8.5L0.5 0.272758L0.5 16.7272L11 8.5Z" fill="#fff"/>
                       </svg>
                        </i>
                     </a>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="blog-img-video">
                     <img alt="video-img" src="https://via.placeholder.com/400x280">
                  </div>
               </div>
            </div>
            <p>et ma urient monte nascete ridiculus mus nellente sque um ac quam nec odio rbine. Nisl quam nestibulum ac quam nec odio elementu aucan ligula. Orci varius natoque pena tibus et ma urient monte nascete ridiculus mus nellentesque um ac qua.</p>
            <div class="post-tags">
              <h6>Tags:</h6>
              <ul>
                <li><a href="#">Salt</a></li>
                <li><a href="#">Hotel</a></li>
                <li><a href="#">Lime Dip</a></li>
              </ul>
            </div>
            <div class="comment">
              <h3>02 Comments</h3>
              <ul>
                <li class="single-comment">
                  <img alt="img" src="https://via.placeholder.com/120x120">
                  <a href="#">reply</a>
                  <div class="ps-md-4">
                    <div class="d-md-flex align-items-center">
                      <h4>Smith Johnson</h4>
                      <span>January 7, 2023 </span>
                      </div>
                      <p>Nellente sque um ac quam nec odio rbine. Nisl quam nestibulum ac quam nec io elementu aucan ligula.</p>
                  </div>
                </li>
                <li class="single-comment children">
                  <img alt="img" src="https://via.placeholder.com/120x120">
                  <a href="#">reply</a>
                  <div class="ps-md-4">
                    <div class="d-md-flex align-items-center">
                      <h4>Willimes Dom</h4>
                      <span>January 7, 2023</span>
                      </div>
                      <p>Nellente sque um ac quam nec odio rbine. Nisl quam nestibulum ac quam nec io elementu aucan ligula.</p>
                  </div>
                </li>
              </ul>
            </div>
            <form class="add-review leave-comment comment">
                    <div class="rating">
                      <h3>Add Review</h3>
                    </div>
                    <div class="row">
                      <div class="col-lg-6 ps-lg-0">
                        <input type="text" name="name" placeholder="Full Name">
                      </div>
                      <div class="col-lg-6 pe-lg-0">
                        <input type="text" name="Email" placeholder="Email Address">
                      </div>
                      <textarea placeholder="Your Comment"></textarea>
                        <button class="button">
                          <span>post Comment</span>
                        </button>
                    </div>
                  </form>
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
