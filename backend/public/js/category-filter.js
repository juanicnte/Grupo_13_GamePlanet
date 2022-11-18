
window.addEventListener('load', function () {

  document.querySelector("#category1").addEventListener('click', e => {
    console.log('lo intenta1')
    e.preventDefault()
    const category1 = document.querySelector('#category1')
    const listItems = document.querySelectorAll('.list-group-item')
    listItems.forEach((item) => {
      if (item.categoryId == 1) {
        item.style.display = '';
      }
      else {
        item.style.display = 'none';
      }
    })    
   })

  
   document.querySelector("#category2").addEventListener('click', e => {
    console.log('lo intenta2')
    e.preventDefault()

    const category2 = document.querySelector('#category2')
    const listItems = document.querySelectorAll('.list-group-item')
    listItems.forEach((item) => {
      if (item.categoryId == 2) {
        item.style.display = '';
      }
      else {
        item.style.display = 'none';
      }
    })    
   })

   document.querySelector("#category3").addEventListener('click', e => {
    console.log('lo intenta3')
    e.preventDefault()

    const category3 = document.querySelector('#category3')
    const listItems = document.querySelectorAll('.list-group-item')
    listItems.forEach((item) => {
      console.log(item)

      if (item.categoryId == 3) {
        item.style.display = '';
      }
      else {
        console.log('entro 3')
        item.style.display = 'none';
      }
    })    
   })

   document.querySelector("#category4").addEventListener('click', e => {
    console.log('lo intenta4')
    e.preventDefault()

    const category4 = document.querySelector('#category4')
    const listItems = document.querySelectorAll('.list-group-item')
    listItems.forEach((item) => {
      if (item.categoryId == 4) {
        item.style.display = '';
      }
      else {
        item.style.display = 'none';
      }
    }) 
   })
    
})

  /*document.querySelector('#category2').addEventListener('click', filterCategories('#category2', 2))
  document.querySelector('#category3').addEventListener('click', filterCategories('#category3', 3))
  document.querySelector('#category4').addEventListener('click', filterCategories('#category4', 4))
  function filterCategories(name, cat) {
    console.log('lo intenta3')
    console.log(name)

    const category1 = document.querySelector(name)
    const listItems = document.querySelectorAll('.list-group-item')

    listItems.forEach((item) => {
      let text = item.textContent;
      if (item.categoryId == cat) {
        item.style.display = '';
      }
      else {
        item.style.display = 'none';
      }
    })
  }
})
*/