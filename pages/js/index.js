'use strict'

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const $burgerIcon = $('#burger')
const $navbarMenu = $('#nav-links')

$burgerIcon.addEventListener('click', () => $navbarMenu.classList.toggle('is-active'))

const $tabs = $$('.tabs li')
const $tabContentBoxes = $$('#tab-content > div')

$tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    $tabs.forEach(item => item.classList.remove('is-active'))
    tab.classList.add('is-active')
    const { target } = tab.dataset
    $tabContentBoxes.forEach(box => {
      if (box.id === target) box.classList.remove('is-hidden')
      else box.classList.add('is-hidden')
    })
  })
})

const $signupButton = $('#signup')
const $modalBg = $('.modal-background')
const $modal = $('.modal')

$signupButton.addEventListener(
  'click',
  () => $modal.classList.add('is-active')
)

$modalBg.addEventListener(
  'click',
  () => $modal.classList.remove('is-active')
)
