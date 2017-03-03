# _Pizza Ordering_

#### A program for ordering pizza, 3/03/17

### By Stormi Hoebelheinrich

## Description

#### This website contains a form for selecting the type of pizza you want and then outputs a receipt with the price given the type of pizza that you selected. You can choose what type of pizza (build your own or a selection of premium pizzas), size (personal to extra large), any number of toppings, and choose carry out or delivery. Base price is $7 for a basic, no topping, personal sized pizza with no delivery. Premium pizzas cost an extra $3, each additional topping costs $1, size increases the price by $3 per incremental increase. Carry out is no additional cost, and delivery costs $5. When you submit the form by clicking "Add to Order," the panel on the right is populated with information about the last pizza submitted. Each order submitted is added to the cart which you can inspect by clicking the Shopping Cart button on the top left or the View Cart button below receipt total. If you selected delivery, a form to submit your address will appear after clicking "Submit Order." After submitting your order, an alert will communicate that your order was received and when your pizza will be ready. The page will then refresh. You can also start over and refresh the page by clicking the "start over" button.  

### Specifications

| Behavior |   Input   |   Output   |
|----------|:---------:|:----------:|
| Output can set base price of basic pizza at $7 | basic pizza | type: build your own, size: personal, toppings = [], price = 7 |
| Output can set price of premium pizza(not build your own) to $10 | Mushroom Madness| type: Mushroom Madness, size: personal, toppings = [], price = 10 |
| Output can increase price of pizza by $1 for each topping selected| extra cheese | toppings = [extra cheese], price = +1 |
| Output can increase price of pizza based on size| extra large | size = [extra large], price = +12 |
| Output can increase price of pizza for delivery| delivery | delivery = [delivery], price = +5 |
| Output can track number of pizzas added to cart| 2 pizzas | cart = [pizza, pizza] |
| Output can total cost of items in cart| pizza 1 price: 12, pizza 2 price 10 | total = 22 |


###This is the initial release (1.0):
https://github.com/stormihoebe/pizza


## Setup/Installation Requirements
Open the terminal and preform the following:
* clone repository
* open index.html in web browser
* fill out form for your desired pizza
* click Add to Order button
* review your pizza on in the right panel and view your cart by clicking "View Cart".
* submit your order by clicking "Submit Order" button.
* add address information of delivery was requested.


## Known Bugs

The program seems to have no known bugs. It is not optimized for all screen sizes using bootstrap.

## Support and contact details

Contact Stormi at Epicodus

#Built with the following tools:

* Atom (https://atom.io/)
* GitHub (https://github.com/)
* Git (https://git-scm.com/)
* Bootstrap (http://getbootstrap.com/)
* jQuery (https://jquery.com/)

#License

*This software is licensed under the MIT license.*

Copyright (c) 2017 Stormi Hoebelheinrich
