import { categoriesConstants } from "../actions/constants";

const initState = {
	categories: [],
	loading: false,
	error: null,
};

const categoriesReducers = (state = initState, action) => {
	switch (action.type) {
		case categoriesConstants.GET_ALL_CATEGORIES_REQUEST:
			state = {
				...state,
				loading: true,
			};
			break;

		case categoriesConstants.GET_ALL_CATEGORIES_SUCCESS:
			state = {
				...state,
				categories: action.payload.categories,
				loading: false,
			};
			break;

		case categoriesConstants.ADD_NEW_CATEGORIES_REQUEST:
			state = {
				...state,
				loading: true,
			};
			break;

		case categoriesConstants.ADD_NEW_CATEGORIES_SUCCESS:
			state = {
				...state,
				loading: false,
			};
			break;

		case categoriesConstants.ADD_NEW_CATEGORIES_FAILURE:
			state = {
				...initState,
			};
			break;

		default:
			break;
	}

	return state;
};

export default categoriesReducers;