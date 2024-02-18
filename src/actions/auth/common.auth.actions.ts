import { v4 as uuidv4 } from 'uuid';
import { setHasDetails, setNanoId } from '../../store/slices/auth.slice';
import { AppDispatch } from '../../store/store';
import { NANO_ID_KEY } from '../../constants/common.key';
import { Obj } from '../../constants/types';

export const addNanoId =
  (payload?: string | null) => async (dispatch: AppDispatch) => {
    if (payload) {
      // get user details here
      // for testing if nano id then set to true
      dispatch(setHasDetails(!!window.localStorage.getItem('user-detail')));
      dispatch(setNanoId(payload));
      return;
    }
    //   Make Api call here
    const apiCallResult = uuidv4().toString();
    window.localStorage.setItem(NANO_ID_KEY, apiCallResult);
    // check if data exist
    dispatch(setNanoId(apiCallResult));
  };

export const saveDetails = (payload: Obj) => (dispatch: AppDispatch) => {
  // Do api call for (payload)
  dispatch(setHasDetails(true));
  window.localStorage.setItem('user-detail', JSON.stringify(payload));
};
