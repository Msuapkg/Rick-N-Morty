import {createSlice} from '@reduxjs/toolkit';

const infoCardSlice = createSlice({
    name: 'info-card',
    initialState: [],
    reducers: {
        getData: (state, action) => {
            return {...state, ...action.payload}
        },
    }
});

export const {getData} = infoCardSlice.actions
export default infoCardSlice.reducer;