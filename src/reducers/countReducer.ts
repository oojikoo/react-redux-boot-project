import { produce } from "immer";
import { getType } from "typesafe-actions";
import { actions } from "../actions";
import { ReduxAction } from "../types/ReduxAction";
import { ReduxState } from "../types/ReduxState";

export interface State {
    number: number
}

export const initialState: State = {
    number: 0
};

export const countReducer = (
    state: State = initialState,
    action: ReduxAction
): State => {
    return produce(state, draft => {
        switch (action.type) {
        case getType(actions.increment): {
            draft.number += 1;
            return draft;
            break;
        }
        case getType(actions.decrement): {
            draft.number -= 1;
            return draft;
            break;
        }
        case getType(actions.addBigAmount): {
            draft.number += action.payload.amount;
            return draft;
            break;
        }
        default:
            return state;
        }
    });
};

export const getCurrentTime = (state: ReduxState) => state.count.number;
