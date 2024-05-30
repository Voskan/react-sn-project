import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { auth, googleProvider, githubProvider } from "@/configs/firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";

interface AuthState {
  user: any;
  status: "idle" | "loading" | "failed";
}

const initialState: AuthState = {
  user: null,
  status: "idle",
};

export const signInWithGoogle = createAsyncThunk(
  "auth/signInWithGoogle",
  async () => {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  }
);

export const signInWithGithub = createAsyncThunk(
  "auth/signInWithGithub",
  async () => {
    const result = await signInWithPopup(auth, githubProvider);
    return result.user;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await signOut(auth);
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInWithGoogle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      })
      .addCase(signInWithGoogle.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(signInWithGithub.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signInWithGithub.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      })
      .addCase(signInWithGithub.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = "idle";
        state.user = null;
      });
  },
});

export default authSlice.reducer;
