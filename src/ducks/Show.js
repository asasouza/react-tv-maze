//Modules
import mapKeys from 'lodash/mapKeys';
//Providers
import RequestProvider from 'providers/RequestProvider';
//Endpoints
import { LOOKUP_SHOW, SEARCH_SHOWS } from 'constants/APIEndpoints';
//Types
export const SHOWS_FETCH_FAILED = 'shows_fetch_failed';
export const SHOWS_FETCH_SUCCESS = 'shows_fetch_success';
export const SHOWS_REQUESTING = 'shows_requesting';
export const SHOW_ADD_FAVORITE = 'show_add_favorite';
export const SHOW_REMOVE_FAVORITE = 'show_remove_favorite';

//Reducer
const INITIAL_STATE = {
	error: null,
	requesting: false,
	shows: [],
	show: null,
	favoriteShows: [],
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SHOWS_FETCH_FAILED:
			return { ...INITIAL_STATE, error: action.payload, favoriteShows: state.favoriteShows };

		case SHOWS_FETCH_SUCCESS:
			return { ...INITIAL_STATE, shows: action.payload, favoriteShows: state.favoriteShows };

		case SHOWS_REQUESTING:
			return { ...state, requesting: true };

		case SHOW_ADD_FAVORITE: {
			if (state.favoriteShows.indexOf(action.payload) === -1) {
				return { ...state, favoriteShows: [...state.favoriteShows, action.payload] };
			}
			return state;
		}

		case SHOW_REMOVE_FAVORITE: {
			const index = state.favoriteShows.indexOf(action.payload);

			if (index > -1) {
				const favoriteShows = state.favoriteShows;
				favoriteShows.splice(index, 1);
				return { ...state, favoriteShows: [...favoriteShows] };
			}
			return state;
		}

		default:
			return state;
	}
};

//Actions
export const fetchShowList = (data) => {
	return dispatch => {
		dispatch({
			type: SHOWS_REQUESTING
		});

		RequestProvider.get(`${SEARCH_SHOWS}?q=${data.term}`)
		.then(response => {
			const shows = mapKeys(response, (value) => {
				return value.show.id;
			});
			dispatch({
				type: SHOWS_FETCH_SUCCESS,
				payload: shows
			});
		})
		.catch(err => {
			console.log(err);
		});
	};
};

export const fetchShow = (data) => {
	return dispatch => {
		dispatch({
			type: SHOWS_REQUESTING
		});
		RequestProvider.get(`${LOOKUP_SHOW}/82`)
		.then(response => {
			console.log(response);
		})
		.catch(err => {
			console.log(err);
		});
	};
};

export const addFavoriteShow = (data) => {
	return {
		type: SHOW_ADD_FAVORITE,
		payload: data.id
	};
};

export const removeFavoriteShow = (data) => {
	return {
		type: SHOW_REMOVE_FAVORITE,
		payload: data.id
	};
};
