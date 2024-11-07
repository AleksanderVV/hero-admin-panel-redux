import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersFetching: state => {state.filtersLoadingStatus = 'loading'},
        filtersFetched: (state, actions) => {
            state.filtersLoadingStatus = 'idle';
            state.filters = actions.payload;
        },
        filtersFetchingError: state => {state.filtersLoadingStatus = 'error'},
        activeFilterChanged: (state, actions) => {
            state.activeFilter = actions.payload;
        }
    }
});

const {actions, reducer} = filtersSlice;

export default reducer;
export const {
    filtersFetching,
    filtersFetched,
    filtersFetchingError,
    activeFilterChanged,
} = actions;
