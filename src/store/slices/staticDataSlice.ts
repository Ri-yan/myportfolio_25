import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { staticData } from '../../data/static';
import { staticDemoData } from '../../data/static.demo';

type StaticMode = 'demo' | 'live';
const getMode = (): StaticMode => import.meta.env.VITE_MODE === 'demo' ? 'demo' : 'live';

const initialState = {
  live: staticData,
  demo: staticDemoData,
};

export const staticDataSlice = createSlice({
  name: 'staticData',
  initialState,
  reducers: {},
});

const getStaticData = (state: RootState) => state.staticData[getMode()];

export const selectAppData = (state: RootState) => getStaticData(state).app;
export const selectHeroData = (state: RootState) => getStaticData(state).hero;
export const selectAboutData = (state: RootState) => getStaticData(state).about;
export const selectServicesData = (state: RootState) => getStaticData(state).services;
export const selectSkillsData = (state: RootState) => getStaticData(state).skills;
export const selectProjectsData = (state: RootState) => getStaticData(state).projects;
export const selectTestimonialsData = (state: RootState) => getStaticData(state).testimonials;
export const selectContactData = (state: RootState) => getStaticData(state).contact;
export const selectFooterData = (state: RootState) => getStaticData(state).footer;

export default staticDataSlice.reducer;
