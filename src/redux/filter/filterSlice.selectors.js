import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter.filter;

export const selectFilterValue = createSelector(
    selectFilter,
    filter => filter.filter
)