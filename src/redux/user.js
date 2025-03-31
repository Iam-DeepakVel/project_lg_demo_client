import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import Cookies from "js-cookie";
import { get } from "../helpers/apiService";

export const fetchUserDetails = createAsyncThunk(
  'user/fetchUserDetails',
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = Cookies.get('access_token');
      if (!accessToken) {
        return null;
      }
      const data = await get("/api/v1/user/get-user");  
      return {
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        createdAt: data?.createdAt,
        referralCode: data?.referralCode,
        isAuthenticated: data?._id ? true : false,
      };
    } catch (error) {
      Cookies.remove('access_token');
      return rejectWithValue(error.message || 'Error fetching user details');
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      name: "",
      email: "",
      phone: "",
      isAuthenticated: false,
      createdAt: "",
      referralCode: "",
      loading: true,
      error: null,
      initialized: false
    }
  },
  reducers: {
    resetAuthState: (state) => {
      state.value = {
        ...state.value,
        loading: false,
        initialized: true,
        error: null
      };
    },
    login: (state, action) => {
      state.value = { ...state.value, ...action.payload, loading: false, initialized: true };
    },
    logout: (state) => {
      Cookies.remove('access_token');
      state.value = {
        name: "",
        email: "",
        phone: "",
        createdAt: "",
        referralCode: "",
        isAuthenticated: false,
        loading: false,
        error: null,
        initialized: true
      };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state) => {
        state.value.loading = true;
        state.value.error = null;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        if (action.payload) {
          state.value = {
            ...state.value,
            ...action.payload,
            loading: false,
            initialized: true
          };
        } else {
          state.value = {
            ...state.value,
            isAuthenticated: false,
            loading: false,
            initialized: true
          };
        }
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.value = {
          ...state.value,
          loading: false,
          error: action.payload,
          isAuthenticated: false,
          initialized: true
        };
      });
  }
});

export const { login, logout, resetAuthState } = userSlice.actions;
export default userSlice.reducer;