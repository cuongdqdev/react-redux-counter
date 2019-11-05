import { INCREASE, DECREASE } from '../constants/counter';

const initState = {
    count: 0
};
export default function counterReducer(state = initState, action) {
    switch (action.type) {
        case DECREASE:
            return {
                count: state.count - 1
            };
        case INCREASE:
            return {
                count: state.count + 1
            };

        default:
            return state;
    }
}