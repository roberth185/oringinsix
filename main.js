/*abre e fecha o menu quando clicar nos icones hamburguer e X */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*quando clicar em um item do menu, escoder o menu*/

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
/*----scrollrevel- mostra elementos --*/
const scrollReveal = scrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image
#about .image, #about .text,
#service .header, #service .card`,
  { interval: 200 }
)

/*menu ativo conforme a seção visivel na pagina*/
const sections = document.querySelectorAll('main section [id]')
function activeMenuAtCurrentSection() {}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
