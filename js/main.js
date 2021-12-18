const swiper = new Swiper('.swiper', {
  // Optional parameters
  
  loop: true,

  

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

  
});


// const tabslink = document.querySelectorAll('.tabs-link');
// const linktext = document.querySelectorAll('.tabs-link-text');



// console.log(tabslink);
// console.log(linktext);

// добавление класса active


// tabslink.forEach((btnItem, index) => {      
//   btnItem.addEventListener('click', () => {
//     tabslink.forEach((btnItem) => {
//     btnItem.classList.remove('tabs-link-active')
//   })
//     btnItem.classList.add('tabs-link-active')
// })
// })

// const buttons = document.querySelectorAll('.btn');
// const lists = document.querySelectorAll('.feature-sub')


// tabslink.forEach((btnItem, index) => {      
//   btnItem.addEventListener('click', () => {
//     tabslink.forEach((btnItem) => {
//       })
    
//     linktext.forEach((listItem) => {  //перебираем весь список listItem перебираемый элемент
//       listItem.classList.add('tabs-hidden') //добавим всем кнопкам класс hidden

// })
//     linktext[index].classList.remove('tabs-hidden')
//   })

// })


// const buttons = document.querySelectorAll('.btn');
// const lists = document.querySelectorAll('.feature-sub')


// buttons.forEach((btnItem, index) => {      
//   btnItem.addEventListener('click', () => {
//     buttons.forEach((btnItem) => {
//       })
    
//     lists.forEach((listItem) => {  //перебираем весь список listItem перебираемый элемент
//       listItem.classList.add('hidden') //добавим всем кнопкам класс hidden

// })
//     lists[index].classList.remove('hidden')
//   })

// })




// ------------------------------ подключение active

// const tabsLink = document.querySelectorAll('.tabs-link');
// const linktext = document.querySelectorAll('.tabs-link-text');


// tabsLink.forEach((btnItem, index) => {      
//   btnItem.addEventListener('click', () => {
//     tabsLink.forEach((btnItem) => {
//     btnItem.classList.remove('tabs-link-active')
//   })
//     btnItem.classList.add('tabs-link-active')
// })
// })


// ---------------------------------

const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]')
const tabsContentElems = document.querySelectorAll('[data-tabs-field]')

for(let btn of tabsHandlerElems){
  // console.log(btn);
  btn.addEventListener('click', () => {   //btn переменная в которую при каждой итерации будет попадать каждый перебираемый элемент
    tabsHandlerElems.forEach(item => item.classList.remove('tabs-link-active'))  //design-list__item_active - класс который меняем
    btn.classList.add('tabs-link-active')  // по клику перебираем все кнопки и удаляем класс у всех кнопок
    // console.dir(btn);


      // console.dir(btn.dataset.tabsHandler);
      

      tabsContentElems.forEach(content => {
        if (content.dataset.tabsField === btn.dataset.tabsHandler){
          content.classList.remove('hidden')
        } else {
          content.classList.add('hidden')
        }

      })

      })
    
  }

// -----------------------------

// const buttons = document.querySelectorAll('.tabs-item');
// const lists = document.querySelectorAll('.tabs-link-text')


// buttons.forEach((btnItem, index) => {      
//   btnItem.addEventListener('click', () => {
//     buttons.forEach((btnItem) => {
//       })
    
//     lists.forEach((listItem) => {  //перебираем весь список listItem перебираемый элемент
//       listItem.classList.add('hidden') //добавим всем кнопкам класс hidden

// })
//     lists[index].classList.remove('hidden')
//   })

// })

// ---------------------------




