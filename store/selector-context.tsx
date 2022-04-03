import React, { createContext, useReducer, useContext } from "react";
import type { TOption } from "type/ProductType";
export enum ACTION_TYPES {
  ADD_SELECTED_LIST = "ADD_SELECTED_LIST",
  DELETE_SELECTED_LIST = "DELETE_SELECTED_LIST",
  CLEAR_SELECTED_LIST = "CLEAR_SELECTED_LIST",
  RESTORE_SELECTED_LIST = "RESTORE_SELECTED_LIST",
}
type TPayload = { id: number; value: TOption };

type TRestorePayload = { value: ISelectedTag };

type TAdd = { type: ACTION_TYPES.ADD_SELECTED_LIST; payload: TPayload };
type TDel = { type: ACTION_TYPES.DELETE_SELECTED_LIST; payload: TPayload };
type TClear = {
  type: ACTION_TYPES.CLEAR_SELECTED_LIST;
  payload: Pick<TPayload, `id`>;
};
type TRstore = {
  type: ACTION_TYPES.RESTORE_SELECTED_LIST;
  payload: TRestorePayload;
};
type IAction = TAdd | TDel | TClear | TRstore;

export type ISelectedTag = Record<number, Array<TOption>>;
interface IContext {
  selectedTag: ISelectedTag;
  selectedTagDispatch: React.Dispatch<IAction>;
}

const selectorReducer: React.Reducer<ISelectedTag, IAction> = (
  selectedTag: ISelectedTag,
  action: IAction
) => {
  if (action.type === ACTION_TYPES.ADD_SELECTED_LIST) {
    const thisTypeTag = selectedTag[action.payload.id];

    return {
      ...selectedTag,
      [action.payload.id]: [...thisTypeTag, action.payload.value],
    };
  } else if (
    action.type === ACTION_TYPES.DELETE_SELECTED_LIST &&
    action.payload.id &&
    action.payload.value
  ) {
    const thisTypeTag = selectedTag[action.payload.id];

    const newSelectedTag = thisTypeTag.filter(
      (item) => item.toString() !== action.payload.value.toString()
    );

    return {
      ...selectedTag,
      [action.payload.id]: newSelectedTag,
    };
  } else if (action.type === ACTION_TYPES.RESTORE_SELECTED_LIST) {
    return action.payload.value;
  } else if (
    action.type === ACTION_TYPES.CLEAR_SELECTED_LIST &&
    action.payload.id
  ) {
    return {
      ...selectedTag,
      [action.payload.id]: [],
    };
  } else {
    return selectedTag;
  }
};

export const SelectedTagContext = createContext({} as IContext);

const SelectedTagProvider: React.FC = ({ children }) => {
  const initial = {
    1: [], //brand string[]
    2: [], //gender "M"|"F"|"Both"[]
    3: [], //snowboard size [number,number][]
    4: [], //helmet size [number,number][]
    5: [], //snowboard boots size number[]
    6: [], //binding size S/M/L/XL[]
  } as ISelectedTag;

  const [selectedTag, selectedTagDispatch] = useReducer(selectorReducer, initial);

  return (
    <SelectedTagContext.Provider value={{ selectedTag, selectedTagDispatch }}>
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
