import { FlexDiv, TextSlice } from '@/shared/ui';
import { FC } from 'react';
import classes from './Pagination.module.scss';

interface PaginationProps {
  pagesCount: number;
  currentPage: number;
  changePage: (arg0: number) => void;
}

const Pagination: FC<PaginationProps> = ({pagesCount, currentPage, changePage}) => {
  const buttonsValues = [
    currentPage >= 3 ? currentPage - 2 : undefined,
    currentPage >= 2 ? currentPage - 1 : undefined,
    currentPage,
    currentPage <= pagesCount - 1 ? currentPage + 1 : undefined,
    currentPage <= pagesCount - 2 ? currentPage + 2 : undefined,
  ]

  return (
    <div className={classes.pagination}>
      {currentPage > 3 &&
        <button
          onClick={() => changePage(1)}
          className={classes.pagination__button}
        >
          <TextSlice size={'extra_small'} font={'rubik'}>
            {1}
          </TextSlice>
        </button>
      }

      {currentPage > 3 &&
        <TextSlice size={'extra_small'} font={'rubik'}>...</TextSlice>
      }

      {buttonsValues.map(p => 
        p
        ?
        <button
          key={p}
          onClick={() => changePage(p)}
          className={
            p !== currentPage 
            ? 
            classes.pagination__button 
            :
            classes.pagination__button
            +
            ' '
            +
            classes.pagination__button_active
          }
        >
          <TextSlice size={'extra_small'} font={'rubik'}>
            {p}
          </TextSlice>
        </button>
        :
        ''
      )}

      {currentPage < pagesCount - 2 &&
        <TextSlice size={'extra_small'} font={'rubik'}>...</TextSlice>
      }

      {currentPage < pagesCount - 2 &&
        <button
          onClick={() => changePage(pagesCount)}
          className={classes.pagination__button}
        >
          <TextSlice size={'extra_small'} font={'rubik'}>
            {pagesCount}
          </TextSlice>
        </button>
      }
    </div>
  );
};

export default Pagination;