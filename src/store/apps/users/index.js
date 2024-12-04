// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

import Service from '../../../services/user.service'

// ** Types Imports

// ** Single Fetch Action
// export const fetchAction = createAsyncThunk(
//     'user/fetch',
//     async (id) => {
//         const response = await Service.getById(id);
//         return response.data
//     }
// )

// ** Fetch Action
export const fetchAllAction = createAsyncThunk(
    'user/fetchAll',
    async (data, { dispatch, getState }) => {
        dispatch(slice.actions.handleStatus('pending'))
        try {
            const response = await Service.getUsers();
            dispatch(slice.actions.handleStatus('success'))
            return response.data.data
        } catch (error) {
            toast.error(error.response.data.message || "Something went wrong!")
            dispatch(slice.actions.handleStatus('error'))
        }
    }
)

// // ** Add Action
// export const addAction = createAsyncThunk(
//     'user/add',
//     async (data, { getState, dispatch }) => {
//         dispatch(slice.actions.handleStatus('pending'))
//         try {
//             const response = await Service.add(data);
//             toast.success(response.data.message)
//             dispatch(slice.actions.handleStatus('success'))
//             dispatch(fetchAllAction())
//             dispatch(fetchAllWithTemplatesAction())
//             return response.data;
//         } catch (error) {
//             toast.error(error.response.data.message || "Something went wrong!")
//             dispatch(slice.actions.handleStatus('error'))
//         }
//     }
// )

// ** Update Action
// export const updateAction = createAsyncThunk(
//     'user/update',
//     async ({ id, data }, { getState, dispatch }) => {
//         dispatch(slice.actions.handleStatus('pending'))
//         try {
//             const response = await Service.update(id, data);
//             toast.success("Survey Category updated succesfully!")
//             dispatch(slice.actions.handleStatus('success'))
//             dispatch(fetchAllAction())
//             dispatch(fetchAllWithTemplatesAction())
//             return response.data;
//         } catch (error) {
//             toast.error(error.response.data.message || "Something went wrong!")
//             dispatch(slice.actions.handleStatus('error'))
//         }
//     }
// )

// ** Delete Action
// export const deleteAction = createAsyncThunk(
//     'user/delete',
//     async (id, { getState, dispatch }) => {
//         dispatch(slice.actions.handleStatus('pending'))
//         try {
//             const response = await Service.delete(id);
//             toast.success(response.data.message)
//             dispatch(slice.actions.handleStatus('success'))
//             dispatch(fetchAllWithTemplatesAction())
//             return response.data
//         } catch (error) {
//             toast.error(error.response.data.message || "Something went wrong!")
//             dispatch(slice.actions.handleStatus('error'))
//             return error.response.data;
//         }
//     }
// )

export const slice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        user: {},
        total: 0,
        status: "idle"
    },
    reducers: {
        handleStatus: (state, action) => {
            return { ...state, status: action.payload }
        },

    },
    extraReducers: builder => {
        builder.addCase(fetchAllAction.fulfilled, (state, action) => {
            const { data, count } = action.payload;

            state.users = data || []
            state.total = count || 0
        })
        // builder.addCase(fetchAction.fulfilled, (state, action) => {
        //     const data = action.payload;
        //     return { ...state, surveytemplate: data.data }
        // })
    }
})

export default slice.reducer