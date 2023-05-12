import { createAsyncThunk } from '@reduxjs/toolkit';
import { ResponseDataModel, PropsMethodModel, GridDataModel } from '../../contract/grid-contract';

const fetchData = createAsyncThunk<ResponseDataModel, PropsMethodModel>("getFetchData",
    async (propsMethod: PropsMethodModel) => {
        const { searchTerm, pageNo, pageSize } = propsMethod;
        // بر این فرض کد نوشته شده است که مقدار 20 خط از سمت سرویس دریافت میشود
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        let responseData = await response.json() as GridDataModel[]
        responseData = responseData.filter((item) => item.title.includes(searchTerm));
        const total = responseData.length;
        return {
            data: responseData.slice((pageNo - 1) * pageSize, pageNo * pageSize),
            total: total
        }
    });

export {
    fetchData,
}