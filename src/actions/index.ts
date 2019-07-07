import { createStandardAction } from "typesafe-actions";


const countActions = {
    increment: createStandardAction("count/INCREMENT")(),
    decrement: createStandardAction("count/DECREMENT")(),
    fetchBigAmount: createStandardAction("count/FETCH_BIG_AMOUNT")(),
    addBigAmount: createStandardAction("count/ADD_BIG_AMOUNT")<{amount: number}>(),
};

export const actions = {
    ...countActions
};
