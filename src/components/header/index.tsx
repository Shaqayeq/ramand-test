import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { changeSearchTermAction } from "../../features/grid/grid-slice";
import "./header.css";

const HeaderPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const searchTerm  = useSelector((state: RootState) => state.gridReducer.searchTerm);

    const changeSearchTerm = (term: string) => {
        dispatch(changeSearchTermAction(term));
    }

    return (
        <div className="header">
            <input 
                type="text" 
                className="search-box" 
                value={searchTerm} 
                onChange={(e) => changeSearchTerm(e.target.value)}
                placeholder="عبارت جستجو را وارد نمایید"
            />
        </div>
    )
}

export default HeaderPage;