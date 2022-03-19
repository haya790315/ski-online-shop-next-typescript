import React, { createContext, useReducer, useContext } from "react";
import type { TOption } from "../type/type";
export enum ACTION_TYPES {
  ADD_SELECTED_LIST = "ADD_SELECTED_LIST",
  DELETE_SELECTED_LIST = "DELETE_SELECTED_LIST",
  CLEAR_SELECTED_LIST = "CLEAR_SELECTED_LIST",
  RESTORE_SELECTED_LIST = "RESTORE_SELECTED_LIST",
}
type TPayload = { id: number; value: TOption };

type TRestorePayload =  {  value: ISelectedTag };

type IAction =
  | {
      type: ACTION_TYPES.ADD_SELECTED_LIST;
      payload: TPayload;
    }
  | {
      type: ACTION_TYPES.DELETE_SELECTED_LIST;
      payload: TPayload;
    }
  | {
      type: ACTION_TYPES.CLEAR_SELECTED_LIST;
      payload: Pick<TPayload,"id">;
    }
  | {
      type: ACTION_TYPES.RESTORE_SELECTED_LIST;
      payload: TRestorePayload;
    };
export interface ISelectedTag {
  [key: string]: Array<TOption>;
}
interface IContext {
  selectedTag: ISelectedTag;
  dispatch: React.Dispatch<IAction>;
}

const selectorReducer: React.Reducer<ISelectedTag, IAction> = (
  selectedTag: ISelectedTag,
  { type, payload}: IAction
) => {
  if (type === ACTION_TYPES.ADD_SELECTED_LIST ) {
    const thisTypeTag = selectedTag[payload.id];

    return { ...selectedTag, [payload.id]: [...thisTypeTag, payload.value] };
  } else if (type === ACTION_TYPES.DELETE_SELECTED_LIST ) {
    const thisTypeTag = selectedTag[payload.id];

    const newSelectedTag = thisTypeTag.filter(
      (item) => item.toString() !== payload.value.toString()
    );

    return {
      ...selectedTag,
      [payload.id]: newSelectedTag,
    };
  } else if (type === ACTION_TYPES.RESTORE_SELECTED_LIST) {
    return payload.value
  } else if (type === ACTION_TYPES.CLEAR_SELECTED_LIST) {
    return {
      ...selectedTag,
      [payload.id]: [],
    };
  } else {
    throw new Error("missing id or value");
  }
};

export const SelectedTagContext = createContext({} as IContext);

const SelectedTagProvider: React.FC = ({ children }) => {
  let initial = {
    1: [], //brand string[]
    2: [], //gender "M"|"F"|"Both"[]
    3: [], //snowboard size [number,number][]
    4: [], //helmet size [number,number][]
    5: [], //snowboard boots size number[]
    6: [], //binding size S/M/L/XL[]
  } as ISelectedTag;

  const [selectedTag, dispatch] = useReducer(selectorReducer, initial);

  return (
    <SelectedTagContext.Provider value={{ selectedTag, dispatch }}>
      {children}
    </SelectedTagContext.Provider>
  );
};

const useSelectedTagContext = () => {
  if (SelectedTagContext === undefined) {
    throw new Error("This is not in the provider");
  }

  return useContext(SelectedTagContext);
};

export { SelectedTagProvider, useSelectedTagContext };
