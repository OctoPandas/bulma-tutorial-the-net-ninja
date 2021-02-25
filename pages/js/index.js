'use strict'

const $ = document.querySelector.bind(document)

const $burgerIcon = $('#burger')
const $navbarMenu = $('#nav-links')

$burgerIcon.addEventListener('click', () => $navbarMenu.classList.toggle('is-active'))
