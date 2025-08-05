'use strict';
const searchMenu = document.querySelector('.search__menu');
const searchBtnSelect = document.querySelector('.search__btn--select');
const searchBtnItems = document.querySelectorAll('.search__btn--item');
const searchText = document.querySelector('.search__text');

const searchBtnItem = document.querySelector('.search__btn--item');

searchBtnSelect.addEventListener('click', () => {
  searchMenu.classList.toggle('search__menu--show');
});

searchBtnItems.forEach(item => {
  item.addEventListener('click', e => {
    const searchTitle =
      e.currentTarget.querySelector('.search__title').innerText;
    searchText.innerText = searchTitle;

    searchMenu.classList.remove('search__menu--show');
  });
});
