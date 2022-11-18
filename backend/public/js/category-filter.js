
window.addEventListener('load', function () {

  function filterCategories(name, idCategoria) {

    const category3 = document.querySelector(name)
    const listItems = document.querySelectorAll('.list-group-item')
    listItems.forEach((item) => {
      const category3 = item.querySelector('#categoryId')

      if (category3.value == idCategoria) {
        item.style.display = '';
      }
      else {
        item.style.display = 'none';
      }
    })    
   }

  document.querySelector("#category1").addEventListener('click',  e => {
    filterCategories("#category1", 1) })

  
   document.querySelector("#category2").addEventListener('click', e => {
    filterCategories("#category2", 2) })

   document.querySelector("#category3").addEventListener('click', e => {
    filterCategories("#category3", 3) })
   
   document.querySelector("#category4").addEventListener('click', e => {
    filterCategories("#category4", 4) })
    
})