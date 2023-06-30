import { Head, Header, LightFooter } from "@website/components";

export const menusFactory = ({ lang = `en` }) => {



    return `
<!DOCTYPE html>
<html lang="${lang}">
${Head({})}
<body>

${Header({})}
<section class="gap">
   <div class="container">
      <div class="heading-two">
         <h2>Deal of the Week</h2>
         <div class="line"></div>
      </div>
      <div class="row align-items-center">
         <div class="col-xl-5">
            <div class="deal-week">
               <span>Sale up to 7% off</span>
               <h2>Chicken and Vegetable Stir-Fry</h2>
               <ul class="quality-foods">
                  <li><img alt="img" src="assets/img/check.png"><h6>Fresh &amp; Tasty</h6></li>
                  <li><img alt="img" src="assets/img/check.png"><h6>Best in organic foods</h6></li>
                  <li><img alt="img" src="assets/img/check.png"><h6>100 Fresh Ingredients</h6></li>
                  <li><img alt="img" src="assets/img/check.png"><h6>Better for your Health</h6></li>
               </ul>
               <div class="mb-4 d-flex align-items-center"><h2 class="m-0"><span>$</span>10.85</h2><del>$14.85</del></div>
               <a href="#" class="button">Add to Cart</a>
            </div>
         </div>
         <div class="col-xl-7">
            <div class="deal-week-time">
               <img alt="deal-week" src="https://via.placeholder.com/803x575">
            </div>
         </div>
      </div>
   </div>
</section>
<section class="gap">
    <div class="container">
        <div class="heading-two">
            <h2>Deal of the Week</h2>
            <div class="line"></div>
        </div>
        <div class="row align-items-center">
            <div class="col-xl-5">
                <div class="deal-week">
                    <span>Sale up to 7% off</span>
                    <h2>Chicken and Vegetable Stir-Fry</h2>
                    <ul class="quality-foods">
                        <li><img alt="img" src="assets/img/check.png"><h6>Fresh &amp; Tasty</h6></li>
                        <li><img alt="img" src="assets/img/check.png"><h6>Best in organic foods</h6></li>
                        <li><img alt="img" src="assets/img/check.png"><h6>100 Fresh Ingredients</h6></li>
                        <li><img alt="img" src="assets/img/check.png"><h6>Better for your Health</h6></li>
                    </ul>
                    <div class="mb-4 d-flex align-items-center"><h2 class="m-0"><span>$</span>10.85</h2><del>$14.85</del></div>
                    <a href="#" class="button">Add to Cart</a>
                </div>
            </div>
            <div class="col-xl-7">
                <div class="deal-week-time">
                    <img alt="deal-week" src="https://via.placeholder.com/803x575">
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
