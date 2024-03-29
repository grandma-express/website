import { Head, Header, LightFooter } from '@website/components'

export const detailsFactory = ({ lang = 'en' }) => {
  return `
<!DOCTYPE html>
<html lang="${lang}">
${Head({})}
<body>

${Header({})}
<section class="gap featured-dishes-product-detail-img">
   <div class="container">
      <div class="row align-items-center">
         <div class="col-xl-6">
            <div class="featured-dishes product-detail-img">
               <div class="sale">
                  <h6>Sale</h6>
               </div>
               <div class="featured-dishes-img">
                  <img alt="featured-dishes" src="https://via.placeholder.com/395x494">
               </div>
            </div>
         </div>
         <div class="col-xl-6">
            <div class="available">
               <span>
                  <i class="fa-solid fa-check"></i>
                  available
               </span>
               <ul class="star">
                     <li><i class="fa-solid fa-star"></i></li>
                     <li><i class="fa-solid fa-star"></i></li>
                     <li><i class="fa-solid fa-star"></i></li>
                     <li><i class="fa-solid fa-star"></i></li>
                     <li><i class="fa-solid fa-star"></i></li>
                  </ul>
               <h6>( 1 Review )</h6>
            </div>
            <div class="product-info ">
               <h3>
                  Fried Potatoes With Garlic Chilli Sauce
               </h3>
               <form class="variations_form">
                  <div class="deal-week mb-4 d-flex align-items-center"><h2 class="m-0"><span>$</span>10.85</h2><del>$14.85</del></div>
                  <h5>What’s Included</h5>
                  <p>Sausage, three rashers of streaky bacon, two fried eggs</p>
                  <div class="d-flex align-items-center mt-4">
                     <input type="number" class="input-text me-4" step="1" min="1" name="quantity" value="1">
                     <button class="button">Add to Cart</button>
                  </div>
                  <ul class="product_meta">
                   <li><span class="theme-bg-clr">Tags:</span>
                     <ul class="pd-tag">
                        <li>
                          <a href="#" class="ps-0">featured products</a>
                          ,<a href="#">meat</a>
                          ,<a href="#">new products</a>
                        </li>
                     </ul>
                   </li>
                 </ul>
               </form>
            </div>
         </div>
      </div>
   </div>
</section>
<div class="about-chef">
   <div class="container">
      <h2 class="pb-3">Description</h2>
      <p>
      Nisl quam nestibulum ac quam nec odio elementu sceisu aucan ligula. Orci varius natoque pena tibus et magnis dis urient monte ulus mus nellent
      esque habitanum ac quam nec odio rbine. Nisl quam nestibulum ac quam nec odio elementu sceisu aucan ligula. toque pena tibus et magnis dis u
      rient monte nascete ridic ulus mus nellentesque habitanum ac quam nec odio rbine. Nisl quamu quam nec odio elementu sceisu aucan ligula. Orc
      i varius natoque pena tibus et magnis dis urient monte nascete ridic ulus mus a habitanum ac quam nec odio rbine. Nisl quam nestibulum ac qua
      m nec odio elementu sceisu aucan ligula. Orci varius natoque pe magnis dis urient monte nascete ridiculus mus nellentesque habitanum ac quam
      nec odio rbine. Nisl quam nestibulum ac quam ntoque pena tibus et magnis dis urient monte nascete ridic ulus mus nellentesque habitanum ac
      quam nec odio rbine. Nisl quam a quam nec odio elementu sceisu aucan ligula. Orci varius natoque pena tibus et magnis dis urient monte nascet
      e ridic ulus mus n habitanum ac quam nec odio rbine.<br><br>

      Nisl quam nestibulum ac quam nec odio elementu sceisu aucan ligula. Orci varius natoque pena tibus et magnis dis urient monte quam nec odio e
      lementu sceisu aucan ligula. Orci varius natoque pena tibus et magnis dis urient monte nascete ridic.</p>
      <div class="row">
         <div class="col-lg-4 col-sm-6">
            <div class="product-img">
               <img alt="product-img" src="https://via.placeholder.com/410x288">
            </div>
         </div>
         <div class="col-lg-4 col-sm-6">
            <div class="product-img">
               <img alt="product-img" src="https://via.placeholder.com/410x288">
            </div>
         </div>
         <div class="col-lg-4 col-sm-6">
            <div class="product-img">
               <img alt="product-img" src="https://via.placeholder.com/410x288">
            </div>
         </div>

      </div>
   </div>
</div>
<section>
   <div class="container">
      <div class="benefits">
         <div>
            <h2 class="pb-3">Benefits</h2>
            <ul class="quality-foods">
                  <li><img alt="img" src="assets/img/check.png"><h6>Quality foods natural gradient</h6></li>
                  <li><img alt="img" src="assets/img/check.png"><h6>A melting pot of cheese served with our Little Soul</h6></li>
                  <li><img alt="img" src="assets/img/check.png"><h6>Award-winning Restaurant</h6></li>
                  <li><img alt="img" src="assets/img/check.png"><h6>caramelised balsamic onions</h6></li>
                  <li><img alt="img" src="assets/img/check.png"><h6>Healthy Food 100% Organic Food</h6></li>
                  <li><img alt="img" src="assets/img/check.png"><h6>roasted on a skewer, hanging above a spicy chilli seafood</h6></li>
                  <li><img alt="img" src="assets/img/check.png"><h6>individually styled bedrooms</h6></li>
               </ul>
         </div>
         <div class="benefit-img">
            <img alt="benefit" src="https://via.placeholder.com/572x559">
         </div>
      </div>
   </div>
</section>
<section class="gap no-top">
   <div class="container">
      <div class="review">
              <h3>Review</h3>
              <div class="single-comment">
                    <img alt="img" src="https://via.placeholder.com/160x160">
                    <div class="ps-md-4">
                      <div class="d-flex align-items-center">
                        <h4>Smith Johnson</h4>
                        <span>Jun 07, 2023</span>
                        </div>
                        <p>Integer sollicitudin ligula non enim sodales non lacinia commodo tempor mod licitudin. Integer sollicitudin ligula non enim sodales non lacinia commodo tempor mod licitudin.</p>
                    </div>
                    <ul class="star">
                     <li><i class="fa-solid fa-star"></i></li>
                     <li><i class="fa-solid fa-star"></i></li>
                     <li><i class="fa-solid fa-star"></i></li>
                     <li><i class="fa-solid fa-star"></i></li>
                     <li><i class="fa-solid fa-star"></i></li>
                  </ul>
                  </div>
                  <div class="single-comment">
                    <img alt="img" src="https://via.placeholder.com/160x160">
                    <div class="ps-md-4">
                      <div class="d-flex align-items-center">
                        <h4>Smith Johnson</h4>
                        <span>Jun 07, 2023</span>
                        </div>
                        <p>Integer sollicitudin ligula non enim sodales non lacinia commodo tempor mod licitudin. Integer sollicitudin ligula non enim sodales non lacinia commodo tempor mod licitudin.</p>
                    </div>
                    <ul class="star">
                     <li><i class="fa-solid fa-star"></i></li>
                     <li><i class="fa-solid fa-star"></i></li>
                     <li><i class="fa-solid fa-star"></i></li>
                     <li><i class="fa-solid fa-star"></i></li>
                     <li><i class="fa-solid fa-star"></i></li>
                  </ul>
                  </div>
                  <form class="add-review leave-comment">
                    <div class="rating">
                      <h3>Add Review</h3>
                      <div class="d-flex align-items-center">
                      <span>Your Rating</span>
                       <div class="start d-flex align-items-center ps-md-4">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                     </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6 ps-lg-0">
                        <input type="text" name="name" placeholder="Complate Name">
                      </div>
                      <div class="col-lg-6 pe-lg-0">
                        <input type="text" name="Email" placeholder="Email Address">
                      </div>
                      <textarea placeholder="Add Review"></textarea>
                        <button class="button">
                          <span>Post Review</span>
                        </button>
                    </div>
                  </form>
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
