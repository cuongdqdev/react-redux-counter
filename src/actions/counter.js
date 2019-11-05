import { INCREASE, DECREASE } from '../constants/counter';

export const counterIncrease = () => ({ type: INCREASE });
export const counterDecrease = () => ({ type: DECREASE });