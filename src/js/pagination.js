import Pagination from 'tui-pagination';
import { mainMovieEx } from './main-movies';

const pagin = document.querySelector('#pagination');

export const paginationInit = {
  startPage: 1,
  searchType: '',
  pagination: null,
};

export const createPagination = (page, itemsPerPage, totalItems) => {
  const options = {
    totalItems,
    itemsPerPage,
    visiblePages: 5,
    page,
    centerAlign: true,
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination(pagin, options);
  paginationInit.pagination = pagination;

  pagination.on('afterMove', async event => {
    const currentPage = event.page;
    mainMovieEx(currentPage);
  });
  return pagination;
};
