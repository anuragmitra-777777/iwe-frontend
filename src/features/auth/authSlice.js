import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // 1. Updated to match all SignUp.jsx fields
  userData: {
    firstName: '',
    lastName: '',
    preferredName: '',
    email: '',
    phone: '',
    title: '',
  },
  
  // Holds 'liaison', 'business' (from select-org) 
  // AND 'yes', 'no' (from company-registration)
  organizationType: null, 

  // 2. Updated to match ALL CompanyInfo.jsx fields exactly
  companyData: {
    companyName: '',
    website: '',
    ueid: '',
    cageCode: '',
    ein: '',
    founder: '',
    foundedYear: '',
    stateReg: '',
    regCode: '',
    state: '',
    address: '',
    city: '',
    zip: '',
    classification: '',
    programs: [],
    linkedin: '',
    facebook: '',
    youtube: '',
    instagram: ''
  },
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = { ...state.userData, ...action.payload };
    },

    // 3. Removed the strict array check so 'yes' and 'no' are accepted
    setOrganizationType: (state, action) => {
      state.organizationType = action.payload;
    },

    setCompanyData: (state, action) => {
      state.companyData = { ...state.companyData, ...action.payload };
    },

    setPrograms: (state, action) => {
      state.companyData.programs = action.payload;
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    resetOnboarding: () => ({ ...initialState }),
  },
});

export const {
  setUserData,
  setOrganizationType,
  setCompanyData,
  setPrograms,
  setLoading,
  setError,
  resetOnboarding,
} = authSlice.actions;

export const selectUserData = (state) => state.auth.userData;
export const selectCompanyData = (state) => state.auth.companyData;
export const selectOrganizationType = (state) => state.auth.organizationType;

export default authSlice.reducer;