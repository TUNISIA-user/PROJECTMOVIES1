
import *  as actions from "./ActionTypes"

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_MOVIE_TO_WATCHLIST:
        return {
            ...state,
            watchlist : [action.payload,...state.watchlist]
        }

        case actions.REMOVE_MOVIE_FROM_WATCHLIST:
            return {
                ...state,
                watchlist : state.watchlist.filter((item)=>item.imdbId !==action.payload)
            }

            case actions.MOVE_TO_WATCHLIST:
                return {
                    ...state,
                    watched : state.watchlist.filter((item)=>item.imdbid !==action.payload.imdbId),
                    Watchlist :[action.payload,...state.watchlist]
                }



                case actions.ADD_MOVIE_TO_WATCHED:
                    return {
                        ...state,
                        watchlist : state.watchlist.filter((movie)=>movie.imdbId!==action.payload.imdbId),
                        watched : [action.payload,...state]
                    }
            
                    case actions.REMOVE_MOVIE_FROM_WATCHED:
                        return {
                            ...state,
                            watchlist : state.watched.filter(
                                (movie)=>movie.imdbd !==action.payload
                            )
                        } 
  }
};
