
import { 
    getAllFeirasFirebase, 
    updateFeiraFirebase } 
  from "../functions/feira";
  import { GET_ALL_FEIRAS, UPDATE_FEIRA, SET_CURRENT_FEIRA } from "./actionTypes";
  
  export const getAllFeiras = () => {
    return async dispatch => {
      let allFeiras = await getAllFeirasFirebase()
      dispatch({
        type: GET_ALL_FEIRAS,
        payload: allFeiras
      })
    };
  };
  
  
  export const updateFeira = (feira) => {
    return async dispatch => {
      await updateFeiraFirebase(feira)
      dispatch({
        type: UPDATE_FEIRA,
        payload: feira
      })
    }
  }

  export const setCurrentFeira = (feira) => {
    return{
      type: SET_CURRENT_FEIRA,
      payload: feira
    }
  }