import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePageNumberAction } from "../../features/grid/grid-slice";
import { RootState } from "../../store";
import "./pagination.css";


const Pagination: FC = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector((state: RootState) => state.gridReducer.totalPage);
  const currentPage = useSelector((state: RootState) => state.gridReducer.currentPage);
  
  const maxVisibilityButtons = 4;
  
  const getPages = () => {
    const pageNumber = [];
    for (let i = 1; i < totalPages + 1; i++) {
      pageNumber.push(i);
    }
    return pageNumber;
  };

  const onPageChange = (pageNo : any) => {
    dispatch(changePageNumberAction(pageNo));
  }

  const nextPrevHandle = (type: string) => {
    if (currentPage <= 1 && type === "previous") return;
    if (currentPage >= getPages().length && type === "next") return;
    const newPage = type === "previous" ? currentPage - 1 : currentPage + 1;
    onPageChange(newPage);
  };

  const getEndAllowShowPage = () => {
    const pg = Math.min(currentPage + maxVisibilityButtons - 1, getPages().length);
    const pageNumber = [];
    for (let i = currentPage; i < pg + 1; i++) {
      pageNumber.push(i);
    }
    return pageNumber;
  };
  const changePage = (string: string) => {
    if (currentPage <= 1 && string === "first") return;
    if (currentPage >= getPages().length && string === "last") return;
    onPageChange(string === "first" ? 1 : totalPages);
  };

  return (
    <div style={{ display: "inline-block", width: "100%"}}>
      <button key="firstBtn" className="prevNextBtn" type="button" onClick={() => changePage("first")}>
        {"<<"}
      </button>
      <button key="prevBtn" className="prevNextBtn" type="button" onClick={() => nextPrevHandle("previous")}>
        {"<"}
      </button>
      {getEndAllowShowPage().map((page) => (
        <button
          className={`pages ${currentPage === page ? "grayBackGround" : "whiteBackGround"}`}
          type="button"
          onClick={() => onPageChange(page)}
          key={`pageNoBtn${page}`}  
        >
          {page}
        </button>
      ))}
      <button key="nextBtn" className="prevNextBtn" type="button" onClick={() => nextPrevHandle("next")}>
        {">"}
      </button>
      <button key="lastBtn" className="prevNextBtn" type="button" onClick={() => changePage("last")}>
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
