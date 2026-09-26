import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 1. Create Async Thunk
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",

  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Failed to fetch users");
    return response.json();
  },
);

// 2. Initail State
const initialState = {
  users: [],
  loading: false,
  error: null,
};

// 3. Create Slice
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  // 4. Extra Reducers - handle lifecycle of async thunk
  extraReducers: (builder) => {
    builder

      //API request started
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch users";
      });
  },
});


export default userSlice.reducer