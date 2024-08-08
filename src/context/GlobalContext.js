import { useReducer, createContext } from "react";
import {reducer} from "./reducer";

const inititaleState = {
  watchlist: [],
  watched: []
  
};

export const GlobalContext = createContext(inititaleState);

const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, inititaleState);

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        MoviesDispatch: dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

export const NAHDI_GAYTH = () => {
  return useContext(GlobalContext);
};
