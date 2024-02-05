import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from '@mui/icons-material';
import React, { ReactNode } from 'react';

interface PaginationButtonProps {
  toPageNumber: number;
  children: ReactNode;
  handleChangePage: (pageNumber: number) => void;
  extraClass?: string;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  toPageNumber,
  children,
  handleChangePage,
  extraClass = '',
}) => {
  return (
    <div className={`flex justify-center items-center ${extraClass}`} >
      <a className="text-primary cursor-pointer" onClick={() => handleChangePage(toPageNumber)}>
        {children}
      </a>
    </div>
  );
};

interface MyPaginationProps {
  pageNumber: number;
  pageCount: number;
  handleChangePage: (pageNumber: number) => void;
}
interface Classes {
  pagination?: string;
  // Add more properties here if necessary
}

export const MyPagination: React.FC<MyPaginationProps> = ({ pageNumber, pageCount, handleChangePage }) => {
  const classes: Classes = {};

  let items: ReactNode[] = [];
  let i = 0;
  items.push(
    <PaginationButton toPageNumber={1} key={`pagination first`} handleChangePage={handleChangePage} extraClass="iconbutton">
      <div className='!bg-primary flex justify-center items-center rounded-full p-3 mr-1'>
        <KeyboardDoubleArrowLeft className='w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] !font-extrabold text-white' />
      </div>
    </PaginationButton>
  );
  items.push(
    <PaginationButton toPageNumber={pageNumber > 2 ? pageNumber - 1 : 1} key={`pagination prev`} handleChangePage={handleChangePage} extraClass="iconbutton">
      <div className='!bg-primary flex justify-center items-center rounded-full p-3 mr-1'>
        <KeyboardArrowLeftOutlined className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] !font-extrabold text-white" />
      </div>
    </PaginationButton>
  );
  let startNumber = pageNumber <= 6 ? 1 : pageNumber - 5;
  let EndNumber = pageCount <= pageNumber + 5 ? pageCount : pageNumber + 5;

  for (i = startNumber; i < pageNumber; i++) {
    items.push(
      <PaginationButton toPageNumber={i} key={`pagination ${i}`} handleChangePage={handleChangePage}>
        <div className=' flex justify-center items-center rounded-full p-3 mr-1 text-white w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]' style={{backgroundColor:"#198754"}}>
          {i}
        </div>
      </PaginationButton>
    );
  }

  items.push(
    <PaginationButton toPageNumber={i} key={`pagination current`} extraClass="active" handleChangePage={handleChangePage}>
      <div className=' flex justify-center items-center rounded-full p-3 mr-1 text-white w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]' style={{backgroundColor:"#E7B730"}}>
        {i}
      </div>
    </PaginationButton>
  );

  for (i = pageNumber + 1; i <= EndNumber; i++) {
    items.push(
      <PaginationButton toPageNumber={i} key={`pagination ${i}`} handleChangePage={handleChangePage}>
        <div className=' flex justify-center items-center rounded-full p-3 mr-1 text-white w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]' style={{backgroundColor:"#198754"}}>
          {i}
        </div>
      </PaginationButton>
    );
  }

  items.push(
    <PaginationButton toPageNumber={pageNumber < pageCount ? pageNumber + 1 : pageCount} key={`pagination next`} handleChangePage={handleChangePage} extraClass="iconbutton">
      <div className='!bg-primary flex justify-center items-center rounded-full p-3 mr-1'>
        <KeyboardArrowRightOutlined className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] !font-extrabold text-white" />
      </div>
    </PaginationButton>
  );
  items.push(
    <PaginationButton toPageNumber={pageCount} key={`pagination last`} handleChangePage={handleChangePage} extraClass="iconbutton">
      <div className='!bg-primary flex justify-center items-center rounded-full p-3 mr-1'>
        <KeyboardDoubleArrowRight className='w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] !font-extrabold text-white' />
      </div>
    </PaginationButton>
  );

  return (
    <div className=" ps-pagination">
      <ul className={`flex pagination ${classes.pagination}`}>{items}</ul>
      {/* <span className="px-4 block w-full sm:w-auto text-center py-2 border-t border-white sm:py-0 sm-border-none opacity-70">
            Page {pageNumber} of {pageCount}
          </span> */}
    </div>
  );
};

