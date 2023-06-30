import { buildHelper } from './buildHelper.mjs'
import { homeFactory } from '@pages/home'
import { menusFactory } from '@pages/menus'
import { dishesFactory } from '@pages/dishes'
import { detailsFactory } from '@pages/details'
import { contactsFactory } from '@pages/contacts'
import { cartFactory } from '@pages/cart'
import { checkoutFactory } from '@pages/checkout'
import { aboutFactory } from '@pages/about'

import { blogHomeFactory } from '@pages/blog'
import { blogDetailsFactory } from '@pages/blog-details'

const config = {
  outdir: 'dist',
}

const home = {
  out: homeFactory({ lang: 'en' }),
}

const menus = {
  out: menusFactory({ lang: 'en' }),
  page: '/menus',
}

const dishes = {
  out: dishesFactory({ lang: 'en' }),
  page: '/dishes',
}

const details = {
  out: detailsFactory({ lang: 'en' }),
  page: '/details',
}

const contacts = {
  out: contactsFactory({ lang: 'en' }),
  page: '/contacts',
}

const blog = {
  out: blogHomeFactory({ lang: 'en' }),
  page: '/blog',
}

const blogDetails = {
  out: blogDetailsFactory({ lang: 'en' }),
  page: '/blog-details',
}

const about = {
  out: aboutFactory({ lang: 'en' }),
  page: '/about',
}

const cart = {
  out: cartFactory({ lang: 'en' }),
  page: '/cart',
}

const checkout = {
  out: checkoutFactory({ lang: 'en' }),
  page: '/checkout',
}

await buildHelper({
  config,
  pages: [
    home,
    menus,
    dishes,
    details,
    contacts,
    about,
    blog,
    blogDetails,
    cart,
    checkout,
  ],
})
