import React, { createContext, useReducer } from "react";
import type {TOption,TGender} from "../type/type"
export enum ACTION_TYPES {
  ADD_SELECTED_LIST = "ADD_SELECTED_LIST",
  DELETE_SELECTED_LIST = "DELETE_SELECTED_LIST",
}

type IAction =
  | {
      type: ACTION_TYPES.ADD_SELECTED_LIST;
      payload: ISelectedTag;
    }
  | {
      type: ACTION_TYPES.DELETE_SELECTED_LIST;
      payload: ISelectedTag;
    };

interface IContext {
  selectedTag: ISelectedTag;
  dispatch: React.Dispatch<IAction>;
}

const selectorReducer: React.Reducer<ISelectedTag, IAction> = (
  _selectedTag: ISelectedTag,
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

export interface ISelectedTag {
  [key:string]:Array<TOption|TGender>;
}

export const SelectedTagContext = createContext({} as IContext);

const SelectedTagProvider: React.FC = ({ children }) => {
  const initial= {
    1: [], //brand string[]
    2: [], //gender "M"|"F"|"Both"[]
    3: [], //snowboard size [number,number][]
    4: [],//helmet size [number,number][]
    5: [],//snowboard boots size number[]
    6:[], //binding size S/M/L/XL[]
  } as ISelectedTag

  
  const [selectedTag, dispatch] = useReducer(selectorReducer, initial);

  return (
    <SelectedTagContext.Provider value={{ selectedTag, dispatch }}>
      {children}
    </SelectedTagContext.Provider>
  );
};

export default SelectedTagProvider;
