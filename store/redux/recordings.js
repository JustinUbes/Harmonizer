import { createSlice } from '@reduxjs/toolkit';

const recSlice = createSlice({
    name:"recordings",
    initialState:{
        recordings: []
    },
    reducers: {
        addRec: (state,action) => {
            state.recordings.push(action.payload);
        },
        delRec: (state,action) => {
            state.recordings = state.recordings.filter(recording => recording.uri !== action.payload.uri);
        },
        clearRec: (state,action) => {
            state.recordings = [];
        }
    }
});

export const addRec = recSlice.actions.addRec;
export const delRec = recSlice.actions.delRec;
export const clearRec = recSlice.actions.clearRec;
export default recSlice.reducer;