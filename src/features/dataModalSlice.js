import {createSlice} from '@reduxjs/toolkit';

const dataModalSlice = createSlice({
    name: 'modal',
    initialState: [],
    reducers: {
        dataModal: (state, action) => {
            return {...state, ...action.payload}
        }
    }
});

export const { dataModal } = dataModalSlice.actions;
export default dataModalSlice.reducer;
