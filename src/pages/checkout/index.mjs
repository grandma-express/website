import { Head, Header, LightFooter } from '@website/components'

export const checkoutFactory = ({ lang = 'en' }) => {
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
               <h2>Cart Checkout</h2>
               <p>A magical combination that sent aromas to the taste buds</p>
            </div>
            <ol class="breadcrumb">
               <li class="breadcrumb-item">
                 <a href="index.html"><i class="fa-solid fa-house"></i> Home</a>
               </li>
               <li class="breadcrumb-item active" aria-current="page">Shop Cart</li>
               <li class="breadcrumb-item active" aria-current="page">Cart Checkout</li>
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
        <form class="checkout-meta donate-page">
            <div class="row">
                <div class="col-lg-8">
                    <h3 class="pb-3">Billing details</h3>
                        <div class="col-lg-12">
                            <input type="text" class="input-text " name="billing_name" placeholder="Complete Name">
                            <input type="email" class="input-text " name="billing_email" placeholder="Email address">
                            <select name="billing_country" class="nice-select Advice country_to_state">
                                <option>Country</option>
                                <option>Select Topic 1</option>
                                <option>Select Topic 2</option>
                                <option>Select Topic 3</option>
                                <option>Select Topic 4</option>
                            </select>
                            <div class="row">
                            <div class="col-lg-6">
                                <select name="billing_country" class="nice-select Advice city">
                                    <option>City</option>
                                    <option>Select Topic 1</option>
                                    <option>Select Topic 2</option>
                                    <option>Select Topic 3</option>
                                    <option>Select Topic 4</option>
                                </select>
                            </div>
                            <div class="col-lg-6">
                                <select name="billing_country" class="nice-select Advice state province">
                                    <option>State / Province</option>
                                    <option>Select Topic 1</option>
                                    <option>Select Topic 2</option>
                                    <option>Select Topic 3</option>
                                    <option>Select Topic 4</option>
                                </select>
                            </div>
                            <div class="col-lg-6">
                                <input type="text" name="Postal_Code" placeholder="Postal Code">
                            </div>
                            <div class="col-lg-6">
                                <input type="tel" class="input-text " name="billing_phone"  placeholder="Phone">
                            </div>
                            </div>
                            <input type="text" name="Address" placeholder="Address">
                            <div class="ship-address">
                                <div class="d-flex">
                                <input type="radio" id="Create" name="Create" value="Create">
                                <label for="Create">
                                    Create an account for later use
                                </label>
                                </div>
                                <div class="d-flex">
                                <input type="radio" id="ShipAddress" name="Create" value="ShipAddress">
                                <label for="ShipAddress">
                                        Ship to same Address
                                </label>
                                </div>
                            </div>
                        </div>
                        <div class="woocommerce-additional-fields">
                            <textarea name="order_comments" class="input-text " placeholder="Order Note"></textarea>
                        </div>
                </div>
                <div class="col-lg-4">
                    <div class="cart_totals-checkout" style="background-image: url(/assets/img/patron.jpg)">
                        <div class="cart_totals cart-Total">
                                <h4>Cart Total</h4>
                                <table class="shop_table_responsive">
                                    <tbody>
                                        <tr class="cart-subtotal">
                                            <th>Subtotal:</th>
                                            <td>
                                                <span class="woocommerce-Price-amount">
                                                <bdi>
                                                    <span class="woocommerce-Price-currencySymbol">$</span>358.00
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
                                                    <span>$</span>358.00
                                                </bdi>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                        <div class="checkout-side">
                            <h3>Payment Method</h3>
                            <ul>
                                <li>
                                    <input type="radio" id="Bank_Payment" name="Bank_Payment" value="Bank_Payment">
                                    <label for="Bank_Payment">
                                            Bank Payment
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="Check_Payment" name="Bank_Payment" value="Check_Payment">
                                    <label for="Check_Payment">
                                            Check Payment
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="PayPal" name="Bank_Payment" value="Check_Payment">
                                    <label for="PayPal">
                                            PayPal
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" id="Cash on Delivery" name="Bank_Payment" value="Check_Payment">
                                    <label for="Cash on Delivery">
                                            Cash on Delivery
                                    </label>
                                </li>
                            </ul>
                            <button type="submit" class="button"><span>Place Order</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
      </div>
   </section>
<!-- jQuery -->
${LightFooter({})}

<!-- progress -->
<div id="progress">
      <span id="progress-value"><i class="fa-solid fa-arrow-up"></i></span>
</div>
</body>

`
}
