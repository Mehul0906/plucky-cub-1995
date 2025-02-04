import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "../actionType";


const initalstate = {
  isError: false,
  isLoading: false,
  data: [],
};

export const descriptionreducer = (state = initalstate, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_REQUEST:
      return { ...state, isLoading: payload };
    case GET_PRODUCT_SUCCESS:
      return { ...state, data: payload };
    case GET_PRODUCT_FAILURE:
      return { ...state, isError: payload };
    default:
      return state;
  }
};
