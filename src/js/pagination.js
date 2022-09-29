import Pagination from 'tui-pagination';
// import { fetchMoves } from './';
// import {} from
// import {} from Тут будуть імпорти робочих функцій пошуку,топ фільмів та кнопки підняття угору

//////////////////////////

async function fetchFilms() {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=a115fde3660c9e5b413d785f288ed44e`
  );
  const films = await data.json();

  return films.results;
}
//////////////////////////

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

  const pagination = new Pagination('pagination', options);
  paginationInit.pagination = pagination;

  pagination.on('afterMove', async event => {
    const currentPage = event.page;
    if (paginationInit.searchType === 'popular films') {
      fetchMoves(currentPage);
      // pageUp();
    }
    if (paginationInit.searchType === 'search films') {
      fetchFilms(currentPage);
      // pageUp();
    }
  });
  return pagination;
};
