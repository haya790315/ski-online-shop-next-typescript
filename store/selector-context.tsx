import React, { createContext, useReducer } from "react";

export const SelectedTagContext = createContext({} as IContext);

export enum ACTION_TYPES {
  ADD_SELECTED_LIST = "ADD_SELECTED_LIST",
  DELETE_SELECTED_LIST = "DELETE_SELECTED_LIST",
}

type IAction =
  | {
      type: ACTION_TYPES.ADD_SELECTED_LIST;
      payload: string[];
    }
  | {
      type: ACTION_TYPES.DELETE_SELECTED_LIST;
      payload: string[];
    };

interface IContext {
  selectedTag: string[];
  dispatch: React.Dispatch<IAction>;
}

const selectorReducer: React.Reducer<string[], IAction> = (
  _selectedTag: string[],
  action: IAction
) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_SELECTED_LIST: {
      return action.payload;
    }
    case ACTION_TYPES.DELETE_SELECTED_LIST: {
      return action.payload;
    }
    default:
      throw new Error("Unknown action");
  }
};

const SelectedTagProvider: React.FC = ({ children }) => {
  const initialState: string[] = ["Burton","Nitro"];

  const [selectedTag, dispatch] = useReducer(selectorReducer, initialState);

  return (
    <SelectedTagContext.Provider value={{ selectedTag, dispatch }}>
      {children}
    </SelectedTagContext.Provider>
  );
};

export default SelectedTagProvider;
