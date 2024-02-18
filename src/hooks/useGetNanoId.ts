import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/redux.hooks';
import { RootState } from '../store/store';
import { addNanoId } from '../actions/auth/common.auth.actions';
import { NANO_ID_KEY } from '../constants/common.key';
import { setLoadingAuthDetails } from '../store/slices/auth.slice';

export const useGetNanoId = () => {
  const nanoId = useAppSelector((state: RootState) => state.auth.nanoId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (nanoId) {
      dispatch(setLoadingAuthDetails(false));
    }
    if (!nanoId) {
      dispatch(addNanoId(window.localStorage.getItem(NANO_ID_KEY)));
    }
  }, [dispatch, nanoId]);

  return nanoId;
};
