import axios from "axios";
const FETCH_UPLOAD_IMAGE = "image/FETCH_UPLOAD_IMAGE";
const FETCH_UPLOAD_SUCCESS = "image/FETCH_UPLOAD_SUCCESS";
const FETCH_UPLOAD_ERROR = "image/FETCH_UPLOAD_ERROR";
const RESET_MESSAGES = "image/RESET_MESSAGES";

const initialState = {
  image: null,
  loading: false,
  error: "",
  success: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPLOAD_IMAGE:
      return { ...state, loading: true };
    case FETCH_UPLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        image: action.payload.data,
        success: action.payload.msg,
      };
    case FETCH_UPLOAD_ERROR:
      return { ...state, loading: false, error: action.payload.msg };
    case RESET_MESSAGES:
      return { ...state, error: "", success: "" };

    default:
      return { ...state };
  }
};

export const uploadImage = (body) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_UPLOAD_IMAGE });
    try {
      const response = await axios.post("api/images", body);
      console.log(response.data);
      dispatch({ type: FETCH_UPLOAD_SUCCESS, payload: response.data });
      setTimeout(() => dispatch(resetMessages()), 3000);
    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_UPLOAD_ERROR, payload: error.msg });
      setTimeout(() => dispatch(resetMessages()), 3000);
    }
  };
};

const resetMessages = () => {
  return { type: RESET_MESSAGES };
};
