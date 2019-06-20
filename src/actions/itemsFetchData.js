import { itemsIsLoading, itemsHasErrored, itemsFetchDataSuccess } from ".";

export function itemsFetchData(url) {
  return dispatch => {
    dispatch(itemsIsLoading(true));
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(itemsFetchDataSuccess(items)))
      .then(items => console.log("items loaded", items))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
