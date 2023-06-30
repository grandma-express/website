import { Head, DarkFooter } from '@website/components'
import { Header } from "./header.mjs"

export const homeFactory = ({ lang }) => {

    const body = `
<body>
${Header({})}
<section class="featured-arae-three gap" style="background-image:url(/assets/img/patron-black.jpg)">
   <div class="container">
      <div class="row three-slider owl-carousel owl-theme">
         <div class="col-xl-12 item">
            <div class="row align-items-center">
               <div class="col-xl-6">
                  <div class="fastest-delivery">
                     <h4>Fastest Delivery & Easy Pickup</h4>
                     <h1>Kings Burger</h1>
                     <p>Good food starts with good ingridients. We only bring you the best.</p>
                     <div class="d-flex align-items-center justify-content-xl-start justify-content-center">
                        <a href="menu-1.html" class="button">View Our Menu</a>
                        <ul class="star ms-5">
                           <li><i class="fa-solid fa-star"></i></li>
                           <li><i class="fa-solid fa-star"></i></li>
                           <li><i class="fa-solid fa-star"></i></li>
                           <li><i class="fa-solid fa-star"></i></li>
                           <li><i class="fa-solid fa-star"></i></li>
                           <li>4.8</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col-xl-6">
                  <div class="fastest-delivery-img">
                     <div class="good-food-steak-upto">
                        <div>
                           <h6>Upto</h6>
                           <h2>20%</h2>
                           <h6>Discount</h6>
                        </div>
                     </div>
                     <img alt="img" src="https://via.placeholder.com/604x454">
                  </div>
               </div>
            </div>
         </div>
         <div class="col-xl-12 item">
            <div class="row align-items-center">
               <div class="col-xl-6">
                  <div class="fastest-delivery">
                     <h4>Fastest Delivery & Easy Pickup</h4>
                     <h1>delicious food</h1>
                     <p>Good food starts with good ingridients. We only bring you the best.</p>
                     <div class="d-flex align-items-center justify-content-xl-start justify-content-center">
                        <a href="menu-1.html" class="button">View Our Menu</a>
                     </div>
                  </div>
               </div>
               <div class="col-xl-6">
                  <div class="fastest-delivery-img">
                     <img alt="img" src="https://via.placeholder.com/604x454">
                  </div>
               </div>
            </div>
         </div>
         <div class="col-xl-12 item">
            <div class="row align-items-center">
               <div class="col-xl-6">
                  <div class="fastest-delivery">
                     <h4>Fastest Delivery & Easy Pickup</h4>
                     <h1>food platter</h1>
                     <p>Good food starts with good ingridients. We only bring you the best.</p>
                     <div class="d-flex align-items-center justify-content-xl-start justify-content-center">
                        <a href="menu-1.html" class="button">View Our Menu</a>
                     </div>
                  </div>
               </div>
               <div class="col-xl-6">
                  <div class="fastest-delivery-img">
                     <img alt="img" src="https://via.placeholder.com/604x454">
                  </div>
               </div>
            </div>
         </div>
         <div class="col-xl-12 item">
            <div class="row align-items-center">
               <div class="col-xl-6">
                  <div class="fastest-delivery">
                     <h4>Fastest Delivery & Easy Pickup</h4>
                     <h1>garlic pizza</h1>
                     <p>Good food starts with good ingridients. We only bring you the best.</p>
                     <div class="d-flex align-items-center justify-content-xl-start justify-content-center">
                        <a href="menu-1.html" class="button">View Our Menu</a>
                     </div>
                  </div>
               </div>
               <div class="col-xl-6">
                  <div class="fastest-delivery-img">
                     <img alt="img" src="https://via.placeholder.com/604x454">
                  </div>
               </div>
            </div>
         </div>

      </div>
   </div>
</section>
<section class="gap">
   <div class="container">
      <div class="welcome-to-foodio about-food">
         <span>About The Food Restaurant</span>
         <h2>Perfect Place For An Exceptional Experience</h2>
      </div>
      <div class="row">
         <div class="col-lg-7">
            <div class="featured-arae-two-img three d-flex">
               <img alt="featured-arae-two-img" class="me-4" src="https://via.placeholder.com/350x506">
               <img alt="featured-arae-two-img" src="https://via.placeholder.com/350x506">
            </div>
         </div>
         <div class="col-xl-5">
            <div class="about-food-text">
               <p>Nisl quam nestibulum ac quam nec odio elementu sceisue the aucan ligula. Orci varius natoque pena culus mus nellentesque ha um ac quam nec odio aibulum ac quam nec odio elrbine.</p>
               <div class="mt-5 d-flex align-items-center">
                 <div><i><svg version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 489.672 489.672" style="enable-background:new 0 0 489.672 489.672;" xml:space="preserve">
      <path d="M242.38,44.104c-1.56-1.512-3.704-2.32-5.856-2.224c-14.04,0.552-28.04,2.52-41.6,5.864l3.832,15.536
         c9.832-2.424,19.912-4.064,30.08-4.904v151.296H57.044c2.104-9.92,5-19.68,8.64-29.128l-14.92-5.76
         c-5.176,13.408-8.96,27.408-11.248,41.608c-0.376,2.32,0.288,4.672,1.808,6.464c1.52,1.792,3.744,2.816,6.088,2.816h189.424
         c4.424,0,8-3.584,8-8v-167.8C244.836,47.696,243.956,45.616,242.38,44.104z"/>
      <path d="M411.228,124.864l-12.8,9.608c25.128,33.432,38.408,73.264,38.408,115.2c0,2.552-0.064,5.2-0.192,8H276.836V60.384
         c12.712,2.136,25.176,5.544,37.168,10.176l5.768-14.92c-16.024-6.192-32.84-10.376-49.976-12.424
         c-2.312-0.272-4.552,0.448-6.264,1.96c-1.72,1.512-2.696,3.688-2.696,5.984v214.512c0,4.416,3.576,8,8,8H444.14
         c4.168,0,7.64-3.208,7.976-7.36c0.488-6.08,0.72-11.52,0.72-16.64C452.836,204.24,438.444,161.088,411.228,124.864z"/>
      <path d="M236.836,241.672h-192c-4.424,0-8,3.584-8,8c0,11.176,0.888,22.368,2.648,33.28l15.8-2.544
         c-1.208-7.472-1.968-15.088-2.28-22.736h175.832v183.296c-15.496-1.28-30.72-4.416-45.384-9.36l-5.112,15.168
         c18.728,6.312,38.296,9.912,58.176,10.688c0.104,0,0.208,0.008,0.312,0.008c2.064,0,4.056-0.8,5.544-2.232
         c1.584-1.512,2.464-3.592,2.464-5.768v-199.8C244.836,245.256,241.26,241.672,236.836,241.672z"/>

      <path d="M445.284,292.744c-1.504-1.944-3.824-3.072-6.28-3.072H268.836c-4.424,0-8,3.584-8,8v150.512
         c0,2.288,0.976,4.464,2.688,5.984c1.48,1.312,3.368,2.016,5.312,2.016c0.312,0,0.632-0.016,0.952-0.056
         c8.368-1,16.768-2.528,24.96-4.544l-3.832-15.536c-4.64,1.144-9.352,2.12-14.088,2.912V305.672h151.664
         c-0.552,1.824-1.136,3.64-1.744,5.448l15.16,5.112c1.856-5.504,3.496-11.104,4.848-16.64
         C447.348,297.208,446.804,294.68,445.284,292.744z"/>

      <path d="M187.204,78.52c-0.008-0.008-0.016-0.008-0.024-0.008c-11.192-8.4-24.448-12.84-38.344-12.84
         c-2.408,0-4.856,0.184-7.36,0.496c-7.8-15.936-21.272-28.584-37.816-35.264c6.592-6.992,14.872-12.504,23.984-15.928L122.02,0
         c-11.496,4.312-21.944,11.288-30.232,20.16c-1.92,2.056-3.624,4.144-5.208,6.248c-3.2-0.432-6.432-0.736-9.744-0.736
         c-39.704,0-72,32.304-72,72s32.296,72,72,72c6.904,0,13.568-1.032,19.896-2.856c9.144,12.8,22.76,21.88,38.216,25.304
         c0.008,0,0.008,0.008,0.016,0.008c4.64,1.024,9.312,1.544,13.872,1.544c15.232,0,30.024-5.488,41.632-15.44
         c0.008-0.008,0.008-0.008,0.016-0.016c14.2-12.192,22.352-29.888,22.352-48.544C212.836,109.4,203.492,90.76,187.204,78.52z
          M76.836,153.672c-30.872,0-56-25.12-56-56s25.128-56,56-56c0.216,0,0.416,0.032,0.632,0.032
         c-3.128,6.952-4.872,13.472-5.832,18.752l15.736,2.872c0.952-5.216,2.864-11.936,6.616-18.944
         c16.264,5.248,29.248,17.744,35.232,33.664c0.568,1.52,1.072,3.048,1.504,4.584c0.056,0.2,0.104,0.4,0.152,0.6
         c0.376,1.392,0.704,2.784,0.976,4.192c0.112,0.616,0.192,1.24,0.288,1.856c0.16,1.04,0.328,2.08,0.432,3.128
         c0.16,1.728,0.264,3.488,0.264,5.264c0,4.12-0.504,8.392-1.504,12.696C125.548,135.144,103.34,153.672,76.836,153.672z
          M130.764,174.12c-7.264-2.96-13.672-7.696-18.72-13.712c11.816-6.656,21.592-16.512,28.08-28.432L130.764,174.12z
          M196.172,121.672h-31.336l18.776-25.024C190.252,103.584,194.604,112.24,196.172,121.672z M170.812,87.032l-6.992,9.32
         l-13.984,18.64l-2.272-4.096v-0.008c0.4-2.144,0.728-4.312,0.928-6.52c0.224-2.24,0.344-4.48,0.344-6.696
         c0-2.648-0.168-5.256-0.448-7.832c-0.04-0.376-0.12-0.744-0.168-1.12c-0.288-2.312-0.68-4.592-1.184-6.832
         c-0.008-0.056-0.016-0.112-0.032-0.176C155.58,81.336,163.508,83.24,170.812,87.032z M146.38,177.608l6.792-30.576l20.368,23.76
         C165.412,175.68,156.012,178.104,146.38,177.608z M185.684,160.368l-19.448-22.696h29.928
         C194.748,146.016,191.132,153.848,185.684,160.368z"/>
      <rect x="300.836" y="153.672" width="16" height="16"/>
      <rect x="332.836" y="169.672" width="16" height="16"/>
      <rect x="364.836" y="225.672" width="16" height="16"/>
      <rect x="300.836" y="217.672" width="16" height="16"/>
      <rect x="292.836" y="185.672" width="16" height="16"/>
      <rect x="404.836" y="193.672" width="16" height="16"/>
      <rect x="364.836" y="161.672" width="16" height="16"/>
      <rect x="332.836" y="201.672" width="16" height="16"/>
      <rect x="364.836" y="193.672" width="16" height="16"/>
      <path d="M484.836,9.672c-20.848,0-40.704,5.424-58.576,14.752c-1.56-3.552-3.68-6.952-6.568-9.84
         C408.82,3.72,388.78,9.336,386.524,10.008c-2.568,0.776-4.584,2.784-5.36,5.352c-0.672,2.248-6.296,22.288,4.584,33.168
         c1.256,1.248,2.616,2.32,4,3.32c-5.24,5.504-9.992,11.512-14.376,17.824c-1.104-1.6-2.272-3.168-3.68-4.576
         c-10.544-10.536-30.232-6.928-32.448-6.472c-2.96,0.6-5.328,2.816-6.136,5.728c-1.08,3.944-5.92,24.128,4.64,34.688
         c5.304,5.288,11.968,8.256,18.568,8.84c-4.768,14.472-7.48,29.856-7.48,45.792h16c0-11.496,1.712-22.712,4.672-33.488
         c4.416,2.496,9.656,3.992,15.328,3.992c15.296,0,25.832-18.032,26.984-20.096c1.352-2.424,1.352-5.384,0-7.816
         c-1.008-1.8-9.184-15.8-21.44-19.296c4.912-6.744,10.4-12.984,16.4-18.64c4.08,8.96,14.192,15.344,26.056,15.344
         c15.296,0,25.832-18.032,26.984-20.096c1.352-2.424,1.352-5.384,0-7.816c-0.688-1.232-4.792-8.16-11.216-13.544
         c11.544-4.192,23.728-6.544,36.232-6.544V9.672z M364.82,87.216c-0.64,1.256-1.176,2.568-1.784,3.848
         c-0.456,0.12-0.92,0.224-1.352,0.424c-3.024,1.368-8.32,0.528-12.616-3.768c-2.152-2.152-2.28-8.464-1.52-14.008
         c4.92-0.224,10.504,0.368,12.832,2.696c3.016,3.016,4.712,7,4.424,10.4C364.796,86.944,364.828,87.08,364.82,87.216z
          M395.252,100.176c-3.112,4.072-7.336,8-10.416,8c-4.112,0-7.872-1.552-10.056-3.664c1.656-3.976,3.512-7.848,5.528-11.632
         c1.44-0.432,2.952-0.704,4.528-0.704C387.924,92.176,392.14,96.104,395.252,100.176z M402.084,40.496
         c-1.704-0.704-3.424-1.68-5.016-3.28c-2.16-2.16-2.288-7.856-1.528-12.832c4.696-0.696,10.576-0.752,12.84,1.512
         c2,2,3.344,4.424,3.992,6.824C408.828,35.144,405.404,37.744,402.084,40.496z M432.836,57.672c-6.392,0-12-3.736-12.016-7.544
         c0.024-0.144,0.128-0.8,0.144-0.944c0.096-0.8,0.04-1.592-0.104-2.368c1.744-1.224,3.52-2.392,5.312-3.528
         c2.032-0.984,4.272-1.616,6.664-1.616c3.088,0,7.304,3.928,10.416,8C440.14,53.744,435.916,57.672,432.836,57.672z"/>
      <path d="M187.14,323.856c1.12-3.256,1.696-6.688,1.696-10.184c0-17.648-14.352-32-32-32c-9.752,0-18.832,4.536-24.8,11.904
         c-6.704-3.656-14.72-4.824-22.232-3.112c-7.072-5.704-15.776-8.792-24.968-8.792c-22.056,0-40,17.944-40,40
         c-17.648,0-32,14.352-32,32c0,5.416,1.344,10.608,3.872,15.224c-7.352,5.968-11.872,15.032-11.872,24.776
         c0,17.648,14.352,32,32,32c11.568,0,21.736-6.176,27.352-15.408l12.952,25.904l7.808,46.816c0.64,3.856,3.976,6.688,7.888,6.688
         h64c4.424,0,8-3.584,8-8v-47.336l7.888-47.344c0.072-0.44,0.112-0.88,0.112-1.32c22.056,0,40-14.352,40-32
         C212.836,340.104,202.236,328.456,187.14,323.856z M172.836,369.672c-1.888,0-3.856-0.232-6.376-0.752
         c-2.352-0.488-4.808,0.112-6.672,1.632c-1.864,1.52-2.952,3.792-2.952,6.2v8.264l-7.888,47.344
         c-0.072,0.432-0.112,0.872-0.112,1.312v40H99.612l-6.88-41.32c-0.136-0.784-0.376-1.544-0.736-2.264l-24-48
         c-1.36-2.704-4.128-4.416-7.16-4.416h-1.6c-2.616,0-5.072,1.28-6.56,3.424c-1.504,2.152-1.848,4.896-0.944,7.344
         c0.752,2.048,1.104,3.712,1.104,5.232c0,8.824-7.176,16-16,16s-16-7.176-16-16c0-6.624,4.216-12.632,10.496-14.944
         c2.608-0.968,4.528-3.208,5.08-5.944c0.544-2.728-0.368-5.544-2.408-7.432c-3.336-3.088-5.168-7.24-5.168-11.68
         c0-8.824,7.176-16,16-16c1.6,0,3.288,0.336,5.288,1.056c2.448,0.88,5.168,0.512,7.312-0.984c2.136-1.496,3.4-3.936,3.4-6.544
         v-9.528c0-13.232,10.768-24,24-24c6.52,0,12.64,2.608,17.216,7.344c2.264,2.352,5.744,3.088,8.768,1.848
         c6.216-2.544,13.192-0.888,17.704,3.976c1.896,2.04,4.72,2.952,7.44,2.4c2.728-0.544,4.976-2.472,5.936-5.08
         c2.312-6.272,8.312-10.488,14.936-10.488c8.824,0,16,7.176,16,16c0,3.928-1.504,7.736-4.24,10.728
         c-2.104,2.304-2.672,5.608-1.48,8.48c1.2,2.872,3.96,4.792,7.072,4.912c12.48,0.488,22.648,7.616,22.648,15.88
         C196.836,362.344,185.844,369.672,172.836,369.672z"/>
      <path d="M430.844,321.672h-8.384c-27.856,0-50.952,20.904-53.728,48.624l-3.456,34.584l-16.2,9.72l-2.584-2.584
         c-1.496-1.504-3.528-2.344-5.656-2.344h-4c-15.44,0-28,12.56-28,28c0,14.168,10.576,25.912,24.248,27.752
         c1.84,13.672,13.584,24.248,27.752,24.248c15.44,0,28-12.56,28-28v-4c0-2.12-0.84-4.16-2.344-5.656l-2.584-2.584l9.696-16.16
         l42.128-3.832c27.992-2.544,49.104-25.664,49.104-53.768C484.836,345.896,460.62,321.672,430.844,321.672z M368.18,456.328
         l4.656,4.656v0.688c0,6.616-5.384,12-12,12c-6.616,0-12-5.384-12-12v-4c0-4.416-3.576-8-8-8h-4c-6.616,0-12-5.384-12-12
         c0-6.616,5.384-12,12-12h0.688l4.656,4.656c2.592,2.6,6.616,3.088,9.776,1.2l19.64-11.784l3.584,3.584l3.584,3.584l-11.784,19.64
         C365.092,449.704,365.588,453.728,368.18,456.328z M434.284,413.504l-42.44,3.856l-10.672-10.672l3.488-34.808
         c1.952-19.504,18.2-34.208,37.8-34.208h8.384c20.944,0,37.992,17.048,37.992,38C468.836,395.448,453.988,411.712,434.284,413.504z
         "/>
      <path d="M97.364,74.36c-5.656,6.776-14.968,9.168-22.64,5.808c-6.488-2.848-10.896-9.536-11.232-17.032l-15.984,0.712
         c0.6,13.536,8.76,25.688,20.784,30.968c4.376,1.92,9.024,2.84,13.656,2.84c10.352,0,20.648-4.608,27.696-13.04L97.364,74.36z"/>
      <path d="M408.084,358.984c-8.024,5.92-11.072,15.36-11.248,22.232l16,0.416c0.016-0.656,0.288-6.48,4.752-9.768
         c4.104-3.024,10.056-2.912,14.84,0.24l8.816-13.352C430.884,351.904,417.548,352,408.084,358.984z"/>
      <path d="M113.5,369.088c-9.56-9.44-23.712-15.416-36.664-15.416v16c13.968,0,32,11.64,32,24v32h16v-32c0-9.624,2.336-32,24-32v-16
         C132.06,345.672,119.756,354.328,113.5,369.088z"/>
   </svg>
   </i></div>
                  <div>
                     <a href="#"><h5>Online Food Ordering</h5></a>
                     <p>Easy Food delivery from the best restaurants.</p>
                  </div>
               </div>
               <div class="mt-4 d-flex align-items-center">
                  <div>
                  <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="512" height="512"><g id="Delivery_Food_Order" data-name="Delivery Food Order"><path d="M38,33V5a5,5,0,0,0-5-5H15a5,5,0,0,0-5,5V41a5,5,0,0,0,5,5h6.29l2.06,1.76a1,1,0,1,0,1.3-1.52l-6-5.16a.9.9,0,0,1,.88-1.53L23.68,41a1,1,0,0,0,.9-.14A1,1,0,0,0,25,40V27a1,1,0,0,1,2,0V38a1,1,0,0,0,2,0V34a1,1,0,0,1,2,0v4a1,1,0,0,0,2,0V35a1,1,0,0,1,2,0v3a1,1,0,0,0,2,0V36a1,1,0,0,1,2,0V47a1,1,0,0,0,2,0V36A3,3,0,0,0,38,33ZM29,2V3a1,1,0,0,1-1,1H20a1,1,0,0,1-1-1V2ZM26,24a3,3,0,0,0-2.82,2H17V25a7,7,0,1,1,14,0v1H28.82A3,3,0,0,0,26,24Zm8,8a2.94,2.94,0,0,0-1.47.4A3,3,0,0,0,29,31.18V28h4a1,1,0,0,0,0-2V25a9,9,0,0,0-8-8.94V15a1,1,0,0,0-2,0v1.06A9,9,0,0,0,15,25v1a1,1,0,0,0,0,2h8V38.61l-2.88-1a2.9,2.9,0,0,0-2.82,4.94L19,44H15a3,3,0,0,1-3-3V5a3,3,0,0,1,3-3h2V3a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V2h2a3,3,0,0,1,3,3V32.78A3,3,0,0,0,34,32Z"/></g></svg></i></div>
                  <div>
                     <a href="#"><h5>100% Healthy Food</h5></a>
                     <p>Eating a wide variety of nutritious Healthy foods</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<section class="how-we-work">
   <div class="container">
      <div class="row align-items-center">
         <div class="col-xl-7">
            <div class="heading">
               <h6>EASY ORDER IN 3 STEPS</h6>
               <h2>How We Work</h2>
            </div>
            <div class="easy-orded-style">
               <div class="easy-orded">
                  <sup>1</sup>
                  <i>
                     <svg enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m408.5 95.005h-25v-60.014c0-11.197-5.417-21.799-14.49-28.36s-20.839-8.386-31.473-4.878l-245.001 80.806c-14.377 4.743-24.036 18.101-24.036 33.239v279.536 81.666c0 19.299 15.701 35 35 35h305c19.299 0 35-15.701 35-35v-346.995c0-19.298-15.701-35-35-35zm5 381.995c0 2.757-2.243 5-5 5h-305c-2.757 0-5-2.243-5-5v-96.665-250.33c0-2.757 2.243-5 5-5h305c2.757 0 5 2.243 5 5zm-66.566-446.757c2.112-.696 3.723.138 4.497.697.773.559 2.07 1.828 2.07 4.051v60.015h-202.923z"/><path d="m156 298.481h18.182 181.818c8.284 0 15-6.716 15-15s-6.716-15-15-15h-4.345c-6.466-41.398-39.257-74.189-80.655-80.655v-7.516c0-8.284-6.716-15-15-15s-15 6.716-15 15v7.516c-41.398 6.466-74.189 39.257-80.655 80.655h-4.345c-8.284 0-15 6.716-15 15s6.716 15 15 15zm100-81.818c31.688 0 58.294 22.174 65.121 51.818h-130.242c6.827-29.644 33.434-51.818 65.121-51.818z"/><path d="m161.817 339.005c-8.284 0-15 6.716-15 15s6.716 15 15 15h72c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m352.25 399.005h-192.5c-8.284 0-15 6.716-15 15s6.716 15 15 15h192.5c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/></svg>
                  </i>
                  <h4>Explore Menu</h4>
                  <p>A range of powerful tools for viewing, querying and filtering your data.</p>
               </div>
               <div class="easy-orded">
                  <sup>2</sup>
                  <i>
                     <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512">
                     <g>
                        <polygon style="fill:none;stroke:#000000;stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points="&#10;&#9;&#9;421,497 91,497 71,437 441,437 &#9;"/>

                           <line style="fill:none;stroke:#000000;stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="15" y1="437" x2="497" y2="437"/>
                        <path style="fill:none;stroke:#000000;stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" d="&#10;&#9;&#9;M465.4,436c-3.43-112.69-95.87-203-209.4-203S50.03,323.31,46.6,436"/>

                           <line style="fill:none;stroke:#000000;stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="256" y1="197" x2="256" y2="230"/>
                        <path style="fill:none;stroke:#000000;stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" d="&#10;&#9;&#9;M172.952,141c0,0,17.026-22.503,0-46.1s3.784-44.239,3.784-44.239"/>
                        <path style="fill:none;stroke:#000000;stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" d="&#10;&#9;&#9;M254.971,105.34c0,0,17.026-22.503,0-46.1S258.754,15,258.754,15"/>
                        <path style="fill:none;stroke:#000000;stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" d="&#10;&#9;&#9;M338.178,141c0,0,17.026-22.503,0-46.1c-17.026-23.597,3.784-44.239,3.784-44.239"/>
                     </g>
                     </svg>
                  </i>
                  <h4>Choose a Dish</h4>
                  <p>A range of powerful tools for viewing, querying and filtering your data.</p>
               </div>
               <div class="easy-orded">
                  <sup>3</sup>
                  <i>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512" height="512"><g><path d="M61.707,34.293,49.293,21.879A2.978,2.978,0,0,0,47.171,21H30v2h5V38h2V23H47.171a1,1,0,0,1,.708.293L49.586,25H45a2,2,0,0,0-2,2v9a2,2,0,0,0,2,2H60v8a1,1,0,0,1-1,1H56.92a6.991,6.991,0,0,0-13.84,0H28.92a6.991,6.991,0,0,0-13.84,0H13a1,1,0,0,1-1-1V37H10v9a3,3,0,0,0,3,3h2.08a6.978,6.978,0,0,0,2.031,4H2v2H50a7.006,7.006,0,0,0,6.92-6H59a3,3,0,0,0,3-3V35A1,1,0,0,0,61.707,34.293ZM17,48a5,5,0,1,1,5,5A5.006,5.006,0,0,1,17,48Zm9.889,5a6.978,6.978,0,0,0,2.031-4H43.08a6.978,6.978,0,0,0,2.031,4ZM50,53a5,5,0,1,1,5-5A5.006,5.006,0,0,1,50,53ZM45,36V27h6.586L60,35.414V36Z"/><rect x="21" y="47" width="2" height="2"/><rect x="49" y="47" width="2" height="2"/><rect x="2" y="44" width="5" height="2"/><rect x="4" y="40" width="3" height="2"/><rect x="5" y="36" width="2" height="2"/><path d="M15,35A13,13,0,1,0,2,22,13.015,13.015,0,0,0,15,35Zm0-24A11,11,0,1,1,4,22,11.013,11.013,0,0,1,15,11Z"/><path d="M15,31a1,1,0,0,0,.707-.293C16.351,30.063,22,24.29,22,20A7,7,0,0,0,8,20c0,4.29,5.649,10.063,6.293,10.707A1,1,0,0,0,15,31Zm0-16a5.006,5.006,0,0,1,5,5c0,2.566-3.147,6.531-5,8.551-1.853-2.02-5-5.985-5-8.551A5.006,5.006,0,0,1,15,15Z"/><path d="M18,20a3,3,0,1,0-3,3A3,3,0,0,0,18,20Zm-4,0a1,1,0,1,1,1,1A1,1,0,0,1,14,20Z"/><rect x="40" y="40" width="4" height="2"/></g></svg>
                  </i>
                  <h4>Place Order</h4>
                  <p>A range of powerful tools for viewing, querying and filtering your data.</p>
               </div>
            </div>
         </div>
         <div class="col-xl-5">
            <div class="easy-orded-video">
               <img alt="arrow" class="arrow" src="/assets/img/arrow-2.png">
               <span>Watch and Follow</span>
               <img alt="easy-orded" src="https://via.placeholder.com/450x450">
               <a data-fancybox="" href="https://www.youtube.com/watch?v=1La4QzGeaaQ"><i>
               <svg width="15" height="22" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M11 8.5L0.5 0.272758L0.5 16.7272L11 8.5Z" fill="#000"/>
               </svg></i></a>
            </div>
         </div>
      </div>
   </div>
</section>
<section class="gap">
   <div class="container">
      <div class="row align-items-center">
         <div class="col-xl-7">
            <div class="heading">
               <span>Best Solutions</span>
               <h2>We Provide Best<br> Services</h2>
            </div>
            <div class="row">
               <div class="col-sm-6">
                  <div class="best-solutions-service two">
                     <i>
                        <svg
                              version="1.1"
                              xml:space="preserve"
                              width="682.66669"
                              height="682.66669"
                              viewBox="0 0 682.66669 682.66669"
                              xmlns="http://www.w3.org/2000/svg"><defs
                                id="defs13"><clipPath
                                  clipPathUnits="userSpaceOnUse"
                                  id="clipPath23"><path
                                    d="M 0,512 H 512 V 0 H 0 Z"
                                    id="path21" /></clipPath></defs><g
                                id="g15"
                                transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g
                                  id="g17"><g
                                    id="g19"
                                    clip-path="url(#clipPath23)"><g
                                      id="g25"
                                      transform="translate(100.1936,39.1833)"><path
                                        d="m 0,0 c 29.512,-18.492 64.411,-29.183 101.806,-29.183 106.039,0 192,85.961 192,192 v 104 h -384 v -104 c 0,-36.258 10.05,-70.167 27.516,-99.096"
                                        style="fill:none;stroke:#000000;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                                        id="path27" /></g><g
                                      id="g29"
                                      transform="translate(361.9829,94.9141)"><path
                                        d="m 0,0 h 29.403 c 38.897,0 70.543,31.646 70.543,70.543 0,38.022 -30.238,69.115 -67.929,70.495 m 0,40.017 C 91.768,179.662 139.946,130.623 139.946,70.543 139.946,9.589 90.356,-40 29.403,-40 h -65.154"
                                        style="fill:none;stroke:#000000;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                                        id="path31" /></g><g
                                      id="g33"
                                      transform="translate(324.3333,120.125)"><path
                                        d="m 0,0 h -99.202 v 89.764 l 32.117,32.118 h 34.968 C -19.575,109.339 -12.543,102.307 0,89.764 Z"
                                        style="fill:none;stroke:#000000;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                                        id="path35" /></g><g
                                      id="g37"
                                      transform="translate(274.7323,224.3333)"><path
                                        d="M 0,0 V 97.667"
                                        style="fill:none;stroke:#000000;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                                        id="path39" /></g><g
                                      id="g41"
                                      transform="translate(77.7634,465.6565)"><path
                                        d="M 0,0 H 34.305 C 67.636,0 94.656,-27.02 94.656,-60.351 V -94.656 H 60.351 C 27.02,-94.656 0,-67.636 0,-34.305 Z"
                                        style="fill:none;stroke:#000000;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                                        id="path43" /></g><g
                                      id="g45"
                                      transform="translate(169.5515,373.8684)"><path
                                        d="M 0,0 -36.879,36.879"
                                        style="fill:none;stroke:#000000;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                                        id="path47" /></g><g
                                      id="g49"
                                      transform="translate(326.2366,502)"><path
                                        d="m 0,0 v -34.305 c 0,-33.331 -27.02,-60.351 -60.351,-60.351 h -34.305 v 34.305 C -94.656,-27.02 -67.636,0 -34.305,0 Z"
                                        style="fill:none;stroke:#000000;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                                        id="path51" /></g><g
                                      id="g53"
                                      transform="translate(234.4485,410.2119)"><path
                                        d="M 0,0 36.879,36.879"
                                        style="fill:none;stroke:#000000;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                                        id="path55" /></g><g
                                      id="g57"
                                      transform="translate(225.1303,199.5808)"><path
                                        d="m 0,0 c -8.203,5.228 -15.967,11.423 -23.13,18.586 h -0.001 c -53.019,53.019 -138.98,53.019 -191.999,0"
                                        style="fill:none;stroke:#000000;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                                        id="path59" /></g><g
                                      id="g61"
                                      transform="translate(394,218.1668)"><path
                                        d="M 0,0 V 0 C -19.773,-19.773 -44.128,-32.172 -69.648,-37.197"
                                        style="fill:none;stroke:#000000;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                                        id="path63" /></g><g
                                      id="g65"
                                      transform="translate(65.1146,67.3646)"><path
                                        d="M 0,0 V 0"
                                        style="fill:none;stroke:#000000;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                                        id="path67" /></g></g></g></g></svg>
                     </i>
                     <a href="our-services.html"><h3>Afternoon Tea</h3></a>
                     <p>Nisl quam nestibulum ac quam nec aucan ligula Orci varius.</p>
                  </div>
               </div>
               <div class="col-sm-6">
                  <div class="best-solutions-service two">
                     <i>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512" height="512"><g><path d="M61.707,34.293,49.293,21.879A2.978,2.978,0,0,0,47.171,21H30v2h5V38h2V23H47.171a1,1,0,0,1,.708.293L49.586,25H45a2,2,0,0,0-2,2v9a2,2,0,0,0,2,2H60v8a1,1,0,0,1-1,1H56.92a6.991,6.991,0,0,0-13.84,0H28.92a6.991,6.991,0,0,0-13.84,0H13a1,1,0,0,1-1-1V37H10v9a3,3,0,0,0,3,3h2.08a6.978,6.978,0,0,0,2.031,4H2v2H50a7.006,7.006,0,0,0,6.92-6H59a3,3,0,0,0,3-3V35A1,1,0,0,0,61.707,34.293ZM17,48a5,5,0,1,1,5,5A5.006,5.006,0,0,1,17,48Zm9.889,5a6.978,6.978,0,0,0,2.031-4H43.08a6.978,6.978,0,0,0,2.031,4ZM50,53a5,5,0,1,1,5-5A5.006,5.006,0,0,1,50,53ZM45,36V27h6.586L60,35.414V36Z"/><rect x="21" y="47" width="2" height="2"/><rect x="49" y="47" width="2" height="2"/><rect x="2" y="44" width="5" height="2"/><rect x="4" y="40" width="3" height="2"/><rect x="5" y="36" width="2" height="2"/><path d="M15,35A13,13,0,1,0,2,22,13.015,13.015,0,0,0,15,35Zm0-24A11,11,0,1,1,4,22,11.013,11.013,0,0,1,15,11Z"/><path d="M15,31a1,1,0,0,0,.707-.293C16.351,30.063,22,24.29,22,20A7,7,0,0,0,8,20c0,4.29,5.649,10.063,6.293,10.707A1,1,0,0,0,15,31Zm0-16a5.006,5.006,0,0,1,5,5c0,2.566-3.147,6.531-5,8.551-1.853-2.02-5-5.985-5-8.551A5.006,5.006,0,0,1,15,15Z"/><path d="M18,20a3,3,0,1,0-3,3A3,3,0,0,0,18,20Zm-4,0a1,1,0,1,1,1,1A1,1,0,0,1,14,20Z"/><rect x="40" y="40" width="4" height="2"/></g></svg>
                     </i>
                     <a href="our-services.html"><h3>Takeaway &amp; Delivery</h3></a>
                     <p>Nisl quam nestibulum ac quam nec aucan ligula Orci varius.</p>
                  </div>
               </div>
               <div class="col-sm-6">
                  <div class="best-solutions-service two">
                     <i>
                        <svg
                           version="1.1"
                           id="svg2196"
                           xml:space="preserve"
                           width="682.66669"
                           height="682.66669"
                           viewBox="0 0 682.66669 682.66669"
                           xmlns="http://www.w3.org/2000/svg"><defs
                             id="defs2200"><clipPath
                               clipPathUnits="userSpaceOnUse"
                               id="clipPath2210"><path
                                 d="M 0,512 H 512 V 0 H 0 Z"
                                 id="path2208" /></clipPath></defs><g
                             id="g2202"
                             transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g
                               id="g2204"><g
                                 id="g2206"
                                 clip-path="url(#clipPath2210)"><g
                                   id="g2212"
                                   transform="translate(311.9868,50)"><path
                                     d="M 0,0 -88.324,-40 H 88.324 Z"
                                     style="fill:none;stroke:#000000;stroke-width:20;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                                     id="path2214" /></g><g
                                   id="g2216"
                                   transform="translate(318,390.0273)"><path
                                     d="M 0,0 H 170.635 L -6.013,-190.863 -182.661,0 H -84"
                                     style="fill:none;stroke:#000000;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                                     id="path2218" /></g><g
                                   id="g2220"
                                   transform="translate(286,390.0273)"><path
                                     d="m 0,0 c 0,-5.523 -4.477,-10 -10,-10 -5.523,0 -10,4.477 -10,10 0,5.522 4.477,10 10,10 C -4.477,10 0,5.522 0,0"
                                     style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                     id="path2222" /></g><g
                                   id="g2224"
                                   transform="translate(311.9868,199.1641)"><path
                                     d="M 0,0 V -149.164"
                                     style="fill:none;stroke:#000000;stroke-width:20;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                                     id="path2226" /></g><g
                                   id="g2228"
                                   transform="translate(191.729,486.9385)"><path
                                     d="m 0,0 c -37.596,-64.605 -75.192,-129.211 -112.789,-193.816 -53.162,30.936 -71.451,100.14 -40.514,153.302 C -122.366,12.648 -53.162,30.937 0,0 Z"
                                     style="fill:none;stroke:#000000;stroke-width:20;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                                     id="path2230" /></g><g
                                   id="g2232"
                                   transform="translate(135.3389,390.0273)"><path
                                     d="M 0,0 -108.196,-28.594"
                                     style="fill:none;stroke:#000000;stroke-width:20;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                                     id="path2234" /></g><g
                                   id="g2236"
                                   transform="translate(106.7456,498.2227)"><path
                                     d="M 0,0 28.593,-108.195"
                                     style="fill:none;stroke:#000000;stroke-width:20;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                                     id="path2238" /></g><g
                                   id="g2240"
                                   transform="translate(135.3389,390.0273)"><path
                                     d="M 0,0 -96.911,56.396"
                                     style="fill:none;stroke:#000000;stroke-width:20;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                                     id="path2242" /></g><g
                                   id="g2244"
                                   transform="translate(311.9868,267.1338)"><path
                                     d="M 0,0 176.648,190.863"
                                     style="fill:none;stroke:#000000;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                                     id="path2246" /></g><g
                                   id="g2248"
                                   transform="translate(437.6074,334.8926)"><path
                                     d="M 0,0 H -251.248"
                                     style="fill:none;stroke:#000000;stroke-width:20;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                                     id="path2250" /></g></g></g></g></svg>
                     </i>
                     <a href="our-services.html"><h3>Wine &amp; Cocktails</h3></a>
                     <p>Nisl quam nestibulum ac quam nec aucan ligula Orci varius.</p>
                  </div>
               </div>
               <div class="col-sm-6">
                  <div class="best-solutions-service two">
                     <i>
                        <svg enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m5.362 38.843 1.969.355c.113-.628.255-1.256.421-1.865l-1.93-.525c-.181.665-.336 1.349-.46 2.035z"/><path d="m5 42.952.443.021 1.556-.094c0-.588.026-1.19.079-1.791l-1.992-.174c-.058.659-.087 1.32-.086 2.038z"/><path d="m6.452 34.823 1.879.684c.219-.601.465-1.196.73-1.771l-1.816-.839c-.288.625-.556 1.273-.793 1.926z"/><path d="m40.485 22.045-.971 1.748c.569.316 1.134.664 1.68 1.035l1.123-1.655c-.594-.404-1.211-.783-1.832-1.128z"/><path d="m21.699 20.141.602 1.907c2.111-.665 4.32-1.002 6.563-1.002 3.039 0 5.979.607 8.737 1.804l.797-1.835c-3.013-1.307-6.22-1.969-9.534-1.969-2.447 0-4.858.369-7.165 1.095z"/><path d="m10.98 53.364h2v2h-2z" transform="matrix(.707 -.707 .707 .707 -34.933 24.394)"/><path d="m16.637 47.707h2v2h-2z" transform="matrix(.707 -.707 .707 .707 -29.275 26.737)"/><path d="m13.809 50.535h2v2h-2z" transform="matrix(.707 -.707 .707 .707 -32.103 25.566)"/><path d="m52 44.763v-1.763h-1c-1.657 0-2.95.281-3.973.631.554-.76.973-1.614.973-2.631 0-1.707-1.17-2.961-2.202-4.067-.507-.543-.985-1.056-1.265-1.551-.298-.528-.505-1.234-.723-1.981-.277-.946-.565-1.911-1.085-2.712l4.936-4.936c.213 1.764.339 3.809.339 6.247h2c0-11.895-2.891-15.613-5.213-18.602-1.558-2.002-2.787-3.585-2.787-7.398 0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3h-1v2h1c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5c0 4.499 1.558 6.504 3.208 8.626 1.315 1.693 2.73 3.531 3.68 7.004-5.032-4.238-11.31-6.562-17.931-6.584-5.815.016-11.364 1.764-16.034 5.039-.443-2.875-2.926-5.085-5.923-5.085-3.309 0-6 2.691-6 6 0 2.995 2.208 5.477 5.079 5.922-3.286 4.669-5.053 10.216-5.034 16.035.026 7.443 2.955 14.457 8.248 19.75l.707.707 1.968-1.968c5.205 1.015 12.105 1.554 20.032 1.554 15.405 0 31-2.748 31-8v-3.866h-.012c.002-.045.012-.089.012-.134 0-3.253-5.799-5.17-11-6.237zm9 6.237c0 2.506-11.032 6-29 6-5.194 0-10.225-.311-14.683-.903l3.097-3.097h.586c.625 0 .683.031 1.396.412 1.115.594 2.979 1.588 6.103 1.588 3.127 0 4.99-.994 6.105-1.59.711-.379.769-.41 1.392-.41.626 0 .684.031 1.398.411 1.113.595 2.976 1.589 6.104 1.589s4.991-.994 6.104-1.589c.714-.38.772-.411 1.398-.411h1v-6.192c7.075 1.504 9 3.376 9 4.192zm-37.212-1.373c.164.082.326.167.492.256.982.523 2.095 1.117 4.219 1.117 2.125 0 3.237-.594 4.22-1.118.887-.473 1.653-.882 3.277-.882 1.626 0 2.393.409 3.28.883.983.523 2.097 1.117 4.222 1.117s3.239-.594 4.222-1.117c.682-.364 1.297-.688 2.28-.819v2.022c-.449.096-.805.275-1.34.562-1.069.57-2.534 1.352-5.162 1.352s-4.093-.782-5.164-1.354c-.862-.459-1.256-.646-2.338-.646-1.08 0-1.472.187-2.336.647-1.069.571-2.534 1.353-5.161 1.353-2.624 0-4.091-.782-5.162-1.354-.427-.228-.739-.388-1.077-.492zm26.212-2.573c-1.494.153-2.408.629-3.222 1.063-.887.474-1.654.883-3.28.883s-2.393-.409-3.28-.883c-.983-.523-2.097-1.117-4.222-1.117-2.124 0-3.237.594-4.219 1.117-.887.474-1.653.883-3.278.883-1.594 0-2.362-.395-3.229-.856l1.488-1.488c.517.24.94.344 1.741.344 1.081 0 1.474-.187 2.337-.647 1.069-.571 2.534-1.353 5.16-1.353 2.628 0 4.093.782 5.164 1.354.862.459 1.256.646 2.338.646s1.476-.187 2.34-.647c.926-.494 2.147-1.146 4.162-1.312zm-13.011-10.629c1.818.785 3.011 2.551 3.011 4.575 0 .87-.227 1.701-.647 2.444-.917-.256-2.014-.444-3.357-.444-3.126 0-4.989.994-6.103 1.589-.712.38-.77.411-1.394.411-.031 0-.056-.001-.084-.001zm4.902-2.464c.24.823.489 1.674.9 2.403.396.703.98 1.328 1.545 1.934.855.917 1.664 1.783 1.664 2.702s-.809 1.785-1.664 2.702c-.385.412-.759.844-1.096 1.293-.399-.015-.539-.088-1.14-.407-.245-.131-.533-.282-.857-.437.492-.97.757-2.038.757-3.151 0-2.567-1.376-4.835-3.527-6.059l2.778-2.778c.255.524.453 1.16.64 1.798zm-34.891-8.961c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4c0 .192-.025.398-.062.613-.596.504-1.178 1.029-1.737 1.588s-1.085 1.141-1.59 1.738c-.215.036-.42.061-.611.061zm3.615-.385c4.884-4.884 11.359-7.569 18.247-7.569h.089c6.578.022 12.797 2.489 17.621 6.967l-36.558 36.559c-9.44-10.181-9.249-26.106.601-35.957zm21.385 36.385c-7.134 0-13.409-.438-18.316-1.27l1.868-1.868c4.907.743 10.576 1.138 16.448 1.138 12.102 0 24.316-1.697 29-4.97v.97c0 2.506-11.032 6-29 6z"/><path d="m57.225 24.895c-2.918 2.363-6.225 5.042-6.225 16.105h2c0-10.11 2.788-12.368 5.483-14.551 2.221-1.799 4.517-3.658 4.517-9.449 0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5h1v-2h-1c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3c0 4.837-1.666 6.186-3.775 7.895z"/></svg>
                     </i>
                     <a href="our-services.html"><h3>Alfresco Dining</h3></a>
                     <p>Nisl quam nestibulum ac quam nec aucan ligula Orci varius.</p>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-xl-5">
            <div class="solutions-img">
               <img alt="solutions" src="https://via.placeholder.com/482x839">
            </div>
         </div>
      </div>
   </div>
</section>
<section class="gap complimentary" style="background-color:#f5f8fd;">
   <div class="container">
      <div class="heading-two">
         <h2>A Complimentary Cocktail, Coffee, Ice-Tea For You.</h2>
         <p>Enjoy a Cosmopolitian or a non-alcoholic espresso martini.</p>
      </div>
      <div class="row">
         <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="fast-food-menus two">
                  <div class="fast-food-img">
                     <img alt="fast-food-img" src="https://via.placeholder.com/195x195">
                  </div>
                  <div>
                     <sup>100 grams</sup>
                     <a href="product-details.html"><h3>Rainbow Paradise Cocktail</h3></a>
                     <span>$24.00</span>
                     <ul class="star">
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                     </ul>
                  </div>
                  <a href="cart-checkout.html">
                  <i><svg enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m452 120h-60.946c-7.945-67.478-65.477-120-135.054-120s-127.109 52.522-135.054 120h-60.946c-11.046 0-20 8.954-20 20v352c0 11.046 8.954 20 20 20h392c11.046 0 20-8.954 20-20v-352c0-11.046-8.954-20-20-20zm-196-80c47.484 0 87.019 34.655 94.659 80h-189.318c7.64-45.345 47.175-80 94.659-80zm176 432h-352v-312h40v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h192v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h40z"></path></g></svg></i></a>
               </div>
         </div>
         <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="fast-food-menus two">
                  <div class="fast-food-img">
                     <img alt="fast-food-img" src="https://via.placeholder.com/195x195">
                  </div>
                  <div>
                     <sup>100 grams</sup>
                     <a href="product-details.html"><h3>Rainbow Paradise Cocktail</h3></a>
                     <span>$24.00</span>
                     <ul class="star">
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                     </ul>
                  </div>
                  <a href="cart-checkout.html">
                  <i><svg enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m452 120h-60.946c-7.945-67.478-65.477-120-135.054-120s-127.109 52.522-135.054 120h-60.946c-11.046 0-20 8.954-20 20v352c0 11.046 8.954 20 20 20h392c11.046 0 20-8.954 20-20v-352c0-11.046-8.954-20-20-20zm-196-80c47.484 0 87.019 34.655 94.659 80h-189.318c7.64-45.345 47.175-80 94.659-80zm176 432h-352v-312h40v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h192v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h40z"></path></g></svg></i></a>
               </div>
         </div>
         <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="fast-food-menus two">
                  <div class="fast-food-img">
                     <img alt="fast-food-img" src="https://via.placeholder.com/195x195">
                  </div>
                  <div>
                     <sup>100 grams</sup>
                     <a href="product-details.html"><h3>Rainbow Paradise Cocktail</h3></a>
                     <span>$24.00</span>
                     <ul class="star">
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                     </ul>
                  </div>
                  <a href="cart-checkout.html">
                  <i><svg enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m452 120h-60.946c-7.945-67.478-65.477-120-135.054-120s-127.109 52.522-135.054 120h-60.946c-11.046 0-20 8.954-20 20v352c0 11.046 8.954 20 20 20h392c11.046 0 20-8.954 20-20v-352c0-11.046-8.954-20-20-20zm-196-80c47.484 0 87.019 34.655 94.659 80h-189.318c7.64-45.345 47.175-80 94.659-80zm176 432h-352v-312h40v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h192v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h40z"></path></g></svg></i></a>
               </div>
         </div>
         <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="fast-food-menus two">
                  <div class="fast-food-img">
                     <img alt="fast-food-img" src="https://via.placeholder.com/195x195">
                  </div>
                  <div>
                     <sup>100 grams</sup>
                     <a href="product-details.html"><h3>Rainbow Paradise Cocktail</h3></a>
                     <span>$24.00</span>
                     <ul class="star">
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                     </ul>
                  </div>
                  <a href="cart-checkout.html">
                  <i><svg enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m452 120h-60.946c-7.945-67.478-65.477-120-135.054-120s-127.109 52.522-135.054 120h-60.946c-11.046 0-20 8.954-20 20v352c0 11.046 8.954 20 20 20h392c11.046 0 20-8.954 20-20v-352c0-11.046-8.954-20-20-20zm-196-80c47.484 0 87.019 34.655 94.659 80h-189.318c7.64-45.345 47.175-80 94.659-80zm176 432h-352v-312h40v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h192v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h40z"></path></g></svg></i></a>
               </div>
         </div>
      </div>
      <h5>Booking Calling 24/7:  <a href="callto:+441298123987">+44 1298 123 987</a></h5>
   </div>
</section>
<section>
   <div class="container">
      <div class="follow p-0">
         <i class="fa-brands fa-instagram"></i>
         <a href="#"><h2>Follow @Winsfolio.com</h2></a>
         <p>Join our community to inspire your desires</p>
      </div>
   </div>
   <div class="gallery-img-style">
         <div class="featured-imagebox featured-imagebox-gallery">
            <a href="https://via.placeholder.com/365x354" data-fancybox="gallery">
            <div class="featured-link">
                <div class="featured-thumbnail">
                    <img class="img-fluid" src="https://via.placeholder.com/365x354" alt="gallery-img">
                  </div>
                <div class="featured-overlay"></div>
            </div>
          </a>
        </div>
        <div class="featured-imagebox featured-imagebox-gallery">
            <a href="https://via.placeholder.com/365x354" data-fancybox="gallery">
            <div class="featured-link">
                <div class="featured-thumbnail">
                    <img class="img-fluid" src="https://via.placeholder.com/365x354" alt="gallery-img">
                  </div>
                <div class="featured-overlay"></div>
            </div>
          </a>
        </div>
        <div class="featured-imagebox featured-imagebox-gallery">
            <a href="https://via.placeholder.com/365x354" data-fancybox="gallery">
            <div class="featured-link">
                <div class="featured-thumbnail">
                    <img class="img-fluid" src="https://via.placeholder.com/365x354" alt="gallery-img">
                  </div>
                <div class="featured-overlay"></div>
            </div>
          </a>
        </div>
        <div class="featured-imagebox featured-imagebox-gallery">
            <a href="https://via.placeholder.com/365x354" data-fancybox="gallery">
            <div class="featured-link">
                <div class="featured-thumbnail">
                    <img class="img-fluid" src="https://via.placeholder.com/365x354" alt="gallery-img">
                  </div>
                <div class="featured-overlay"></div>
            </div>
          </a>
        </div>
        <div class="featured-imagebox featured-imagebox-gallery">
            <a href="https://via.placeholder.com/365x354" data-fancybox="gallery">
            <div class="featured-link">
                <div class="featured-thumbnail">
                    <img class="img-fluid" src="https://via.placeholder.com/365x354" alt="gallery-img">
                  </div>
                <div class="featured-overlay"></div>
            </div>
          </a>
        </div>
      </div>
</section>
${DarkFooter({})}
<!-- progress -->
<div id="progress">
      <span id="progress-value"><i class="fa-solid fa-arrow-up"></i></span>
</div>
</body> 
    `


    return `       
<!DOCTYPE html>
<html lang="${lang}">
${Head({})}
${body}
`
}
