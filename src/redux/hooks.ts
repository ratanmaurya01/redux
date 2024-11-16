import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Custom hook to use the correct dispatch type
export const useAppDispatch = () => useReduxDispatch<AppDispatch>();

// Custom hook to use the correct selector type
export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
