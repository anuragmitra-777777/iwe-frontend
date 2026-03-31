import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Data from SignUp page
  userData: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    title: '',
  },
  // Data from Organization Selection
  organizationType: null, // 'liaison' or 'business'
  // Data from Company Info page
  companyData: {
    companyName: '',
    ueid: '',
    cageCode: '',
    website: '',
    classification: 'small',
    programs: [],
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = { ...state.userData, ...action.payload };
    },
    setOrganizationType: (state, action) => {
      state.organizationType = action.payload;
    },
    setCompanyData: (state, action) => {
      state.companyData = { ...state.companyData, ...action.payload };
    },
    resetOnboarding: () => initialState,
  }
});

export const { setUserData, setOrganizationType, setCompanyData, resetOnboarding } = authSlice.actions;
export default authSlice.reducer;