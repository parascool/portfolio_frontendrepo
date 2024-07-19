import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import FileDownload from 'js-file-download';
import  toast  from 'react-hot-toast';


export const getResumeData = createAsyncThunk("resume/resumeData", async () => {
    try {
        const response = await axios.get('https://portfolio-backend-2ts0.onrender.com/getResume', {
            responseType: 'blob'
        });
        FileDownload(response.data, "Paras_Pardhi_mernstack_developer.pdf");
        console.log(response);
        return response.data; 
    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Failed to download Resume';
        toast.error(message);
       
    }
});
const resumeSlice = createSlice({
    name: "resume",
    initialState : {
        loading: false,
        list : [],
        error : '',
    },

    extraReducers : (builder) => {
        builder.addCase(getResumeData.pending, (state) => {
            state.loading = true;
        })
        .addCase(getResumeData.fulfilled, (state, action) => {
            state.loading = false;
            state.list = action.payload || []
        })
        .addCase(getResumeData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'something went wrong'
        })
    },

});

export const getResume = (state) => state.resume.list
export const getResumeLoading = (state) => state.resume.loading
export const getResumeError = (state) => state.resume.error

export default resumeSlice.reducer