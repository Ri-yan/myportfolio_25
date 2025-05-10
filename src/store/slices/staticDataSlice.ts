import { createSlice } from '@reduxjs/toolkit';
import staticData from '../../data/static.json';
import type { RootState } from '../index';

const initialState = staticData;

export const staticDataSlice = createSlice({
  name: 'staticData',
  initialState,
  reducers: {},
});
export const selectLinksData = (state: RootState) => state.staticData.links;
export const selectHeroData = (state: RootState) => state.staticData.hero;
export const selectAboutData = (state: RootState) => state.staticData.about;
export const selectServicesData = (state: RootState) => state.staticData.services;
export const selectSkillsData = (state: RootState) => state.staticData.skills;
export const selectProjectsData = (state: RootState) => state.staticData.projects;
export const selectTestimonialsData = (state: RootState) => state.staticData.testimonials;
export const selectContactData = (state: RootState) => state.staticData.contact;
export const selectFooterData = (state: RootState) => state.staticData.footer;

export default staticDataSlice.reducer;