## E-commerce-Website


### **Description**
#### Design and develop an eCommerce website using HTML, CSS, JavaScript. The purpose of this project is to display the project's UI, and for this reason, the shopping cart, etc., is not dynamic.

I used the [`swiper js`](https://swiperjs.com/) library to show the products and make a slider

I used poor js code to filter products instead of using js libraries :
> I used built-in custom attributes

```javascript
const tabs  = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[content]');

  tabs.forEach((tab) => {
    tab.addEventListener('click' , () => {
      const target = document.querySelector(tab.dataset.target)
      
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove('active-tab')
      })
      target.classList.add('active-tab')

      tabs.forEach((tabs) => {
        tabs.classList.remove('active-tab')
      })

      tab.classList.add('active-tab')

    })
    })    

```

----

Click to view the project [demo](https://alirezanezami1.github.io/E-commerce-Website/)  
