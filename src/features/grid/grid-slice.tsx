import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GridDataModel, ResponseDataModel } from '../../contract/grid-contract';
import { fetchData } from "./action";

export interface GridSliceState {
    data?: GridDataModel[],
    fetchingdata?: boolean,
    errorMessage: string,
    searchTerm: string,
    totalPage: number,
    currentPage: number,
    showModal: boolean,
    selectedItem: GridDataModel | null,
}

const initialState: GridSliceState = {
    data: [],
    fetchingdata: false,
    errorMessage: "",
    searchTerm: "",
    totalPage: 10,
    currentPage: 1,
    showModal: false,
    selectedItem: null,
}

const changeSearchTerm = (state: GridSliceState, action: PayloadAction<string>) => {
    state.searchTerm = action.payload;
}

const changePageNumber = (state: GridSliceState, action: PayloadAction<number>) => {
    state.currentPage = action.payload;
}

const changeShowModal = (state: GridSliceState, action: PayloadAction<boolean>) => {
    state.showModal = action.payload;
}

const setSelectedItem = (state: GridSliceState, action: PayloadAction<GridDataModel>) => {
    state.selectedItem = action.payload;
}

const editSelectedItem = (state: GridSliceState, action: PayloadAction<GridDataModel>) => {
    const findedIndex = state.data?.findIndex((item) => {
        return item.id == action.payload.id
    });
    if (findedIndex && findedIndex > 0 && state.data) {
        state.data[findedIndex].title = action.payload.title;
    }
}

const GridSlice = createSlice({
    name: "grid",
    initialState,
    // extraReducers: {
    //     [fetchData.fulfilled] : (state: GridSliceState, action : PayloadAction<GridDataModel[]> ) => {
    //         state.data = action.payload;
    //         state.fetchingdata = true;
    //     },
    //     [fetchData.pending] : (state: GridSliceState) => {
    //         state.fetchingdata = false;
    //     },
    //     [fetchData.rejected]: (state: GridSliceState) => {
    //         state.fetchingdata = false;
    //         state.errorMessage = "Something went error";
    //     }, 
    // },
    extraReducers(builder) {
        builder
            .addCase(fetchData.fulfilled, (state: GridSliceState, action: PayloadAction<ResponseDataModel>) => {
                state.fetchingdata = true;
                state.data = action.payload.data;
                state.totalPage = action.payload.total / 20;
            })
            .addCase(fetchData.pending, (state: GridSliceState) => {
                state.fetchingdata = false;
            })
            .addCase(fetchData.rejected, (state: GridSliceState) => {
                state.fetchingdata = false;
                state.errorMessage = "Something went error";
            })
    },
    reducers: {
        changeSearchTerm,
        changePageNumber,
        changeShowModal,
        setSelectedItem,
        editSelectedItem,
    },
});

export const {
    changeSearchTerm: changeSearchTermAction,
    changePageNumber: changePageNumberAction,
    changeShowModal: changeShowModalAction,
    setSelectedItem: setSelectedItemAction,
    editSelectedItem: editSelectedItemAction,

} = GridSlice.actions;

export default GridSlice.reducer;