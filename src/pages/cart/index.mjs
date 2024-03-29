import { Head, Header, LightFooter } from '@website/components'

export const cartFactory = ({ lang = 'en' }) => {
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
               <h2>Shop Cart</h2>
               <p>A magical combination that sent aromas to the taste buds</p>
            </div>
            <ol class="breadcrumb">
               <li class="breadcrumb-item">
                 <a href="index.html"><i class="fa-solid fa-house"></i> Home</a>
               </li>
               <li class="breadcrumb-item active" aria-current="page">Shop</li>
               <li class="breadcrumb-item active" aria-current="page">Shop Cart</li>
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
<section class="gap">
   <div class="container">
      <form class="woocommerce-cart-form">
            <div style="overflow-x:auto;overflow-y: hidden;">
              <table class="shop_table table-responsive">
                    <thead>
                        <tr>
                            <th class="product-name">Product</th>
                            <th class="product-quantity">Quantity</th>
                            <th class="product-subtotal">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="product-name">
                                <img alt="img" src="https://via.placeholder.com/111x111">
                                <div>
                                    <a href="#">Blue Cheese & Ham</a>
                                    <span>Sausage, three rashers of streaky bacon</span>
                                </div>
                            </td>
                            <td class="product-quantity">
                                <input type="number" class="input-text" value="1">
                            </td>
                            <td class="product-subtotal">
                                <span class="woocommerce-Price-amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>9.00</bdi></span>
                            </td>
                        </tr>
                        <tr>
                            <td class="product-name">
                                <img alt="img" src="https://via.placeholder.com/111x111">
                                <div>
                                    <a href="#">Blue Cheese & Ham</a>
                                    <span>Sausage, three rashers of streaky bacon</span>
                                </div>
                            </td>
                            <td class="product-quantity">
                                <input type="number" class="input-text" value="1">
                            </td>
                            <td class="product-subtotal">
                                <span class="woocommerce-Price-amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>9.00</bdi></span>
                            </td>
                        </tr>
                        <tr>
                            <td class="product-name">
                                <img alt="img" src="https://via.placeholder.com/111x111">
                                <div>
                                    <a href="#">Blue Cheese & Ham</a>
                                    <span>Sausage, three rashers of streaky bacon</span>
                                </div>
                            </td>
                            <td class="product-quantity">
                                <input type="number" class="input-text" value="1">
                            </td>
                            <td class="product-subtotal">
                                <span class="woocommerce-Price-amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>9.00</bdi></span>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                           <tr class="coupon">
                              <td colspan="3">
                                 <div class="d-flex align-items-center justify-content-between">
                                    <button type="submit" name="apply_coupon" class="apply-coupon" value="Apply coupon">Apply coupon</button>
                                    <button type="submit" name="update_cart" class="update-cart" value="Update cart" disabled="" aria-disabled="true">Update Cart</button>
                                 </div>
                              </td>
                           </tr>
                    </tfoot>
              </table>
            </div>
         <div class="row mt-5">
            <div class="col-lg-4">
               <div class="coupon-area">
                     <h3>Apply Coupon</h3>
                     <div class="coupon">
                        <input type="text" name="coupon_code" class="input-text" placeholder="Coupon Code">
                        <button type="submit" name="apply_coupon"><span>Apply coupon</span>
                        </button>
                     </div>
               </div>
            </div>
            <div class="col-lg-8">
               <div class="cart_totals">
                     <h4>Cart Totals</h4>
                     <div class="shop_table-boder">
                        <table class="shop_table_responsive">
                           <tbody>
                              <tr class="cart-subtotal">
                                    <th>Sub total:</th>
                                    <td>
                                       <span class="woocommerce-Price-amount">
                                                  <bdi>
                                          <span class="woocommerce-Price-currencySymbol">$</span>250.00
                                       </bdi>
                                       </span>
                                    </td>
                              </tr>
                              <tr class="Shipping">
                                    <th>Shipping:</th>
                                    <td>
                                       <span class="woocommerce-Price-amount amount">
                                                      free
                                       </span>
                                    </td>
                               </tr>
                               <tr class="Total">
                                     <th>Total:</th>
                                     <td>
                                        <span class="woocommerce-Price-amount">
                                        <bdi>
                                           <span>$</span>250.00
                                        </bdi>
                                        </span>
                                     </td>
                                </tr>
                            </tbody>
                        </table>
                     </div>
                      <div class="wc-proceed-to-checkout">
                        <a href="#" class="button">
                           <span>Proceed to checkout</span>
                           </a>
                  </div>
                     </div>
            </div>
         </div>
      </form>
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
