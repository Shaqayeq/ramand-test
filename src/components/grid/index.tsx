import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchData } from "../../features/grid/action";
import { GridDataModel, PropsMethodModel } from "../../contract/grid-contract";
import { changeShowModalAction, setSelectedItemAction } from "../../features/grid/grid-slice";
import ModalPopup from "../modal";
import "./grid.css";

const GridPage: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { fetchingdata, data, searchTerm, currentPage } = useSelector((state: RootState) => state.gridReducer);

    useEffect(() => {
        dispatch(fetchData({ searchTerm: searchTerm, pageNo: currentPage, pageSize: 20 } as PropsMethodModel))
    }, [searchTerm, currentPage]);

    const showModal = (item: GridDataModel) => {
        dispatch(setSelectedItemAction(item));
        dispatch(changeShowModalAction(true));
    }

    return (
        <>
            <div className="container mt-3">
                <ModalPopup />
                <div className="row">
                    <span className="item">عنوان</span>
                    <span className="item">تکمیل شده</span>
                    <span className="item" style={{ width: "40px" }} >عملیات</span>
                </div>
                {
                    fetchingdata &&
                    data?.map((item) => {
                        return (
                            <div className="row" key={`row${item.id}`}>
                                <span className="item" key={`title${item.id}`}>
                                    {item.title}
                                </span>
                                <span className="item" key={item.id}>
                                    {item.completed
                                        ? <i className="check-icon" />
                                        : <i className="close-icon" />
                                    }
                                </span>
                                <span onClick={() => showModal(item)} className="item" style={{ width: "40px" }} key={`icon${item.id}`}>
                                    <i className="pen-icon" />
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default GridPage;