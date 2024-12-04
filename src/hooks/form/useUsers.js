// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Actions Imports
import {
    fetchAllAction,
    // fetchAction,
    // addAction,
    // updateAction,
    // deleteAction,
} from '../../store/apps/users'

export const useUsers = () => {

    // ** Hook
    const dispatch = useDispatch()
    const store = useSelector((state) => state.users)

    const getUsers = async () => {
        dispatch(fetchAllAction())
    }

    // const getSurveyCategoryById = async (id) => {
    //     dispatch(fetchAction(id))
    // }

    // const addSurveyCategory = async (data) => {
    //     return dispatch(addAction({ ...data }))
    // }

    // const updateSurveyCategory = async (id, data) => {
    //     return dispatch(updateAction({ id, data }))
    // }

    // const deleteSurveyCategory = async (id) => {
    //     return dispatch(deleteAction(id))
    // }

    return {
        store,
        // addSurveyCategory,
        // updateSurveyCategory,
        // deleteSurveyCategory,
        getUsers,
        // getSurveyCategoryById,
        // getSurveyCategoryWithTemplates
    }

}
