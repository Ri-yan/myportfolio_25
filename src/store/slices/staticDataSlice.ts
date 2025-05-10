import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import {staticData} from '../../data/static';

const initialState = staticData;

export const staticDataSlice = createSlice({
  name: 'staticData',
  initialState,
  reducers: {},
});
export const selectAppData = (state: RootState):any => state.staticData.app;
export const selectHeroData = (state: RootState) :any  => state.staticData.hero;
export const selectAboutData = (state: RootState) :any  => state.staticData.about;
export const selectServicesData = (state: RootState) :any  => state.staticData.services;
export const selectSkillsData = (state: RootState) :any  => state.staticData.skills;
export const selectProjectsData = (state: RootState) :any  => state.staticData.projects;
export const selectTestimonialsData = (state: RootState) :any  => state.staticData.testimonials;
export const selectContactData = (state: RootState) :any  => state.staticData.contact;
export const selectFooterData = (state: RootState) :any  => state.staticData.footer;

export default staticDataSlice.reducer;