import { Observable } from 'rxjs/Observable';

/**
 * @description ultity function used to easily create an action an creator
 * @param {*} type the action type
 * @param  {...any} argNames define the properties for the action object
 */
export const makeActionCreator = (type, ...argNames) => function (...args) {
  const action = { type };

  if (argNames.length > 1) {
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
  } else {
    // set default key to payload if no keys are passed as arguments to the function
    action.payload = args[0];
  }

  return action;
};

/**
 * @description utlity function to easly create a GET request epic. Should not be used when an argument is needed to call the endpoint
 * @param {*} type the action type
 * @param {*} apiUrl the url to call
 * @param {*} successAction the action to fire after success in the GET request
 * @param {*} errorAction the error action to fire after an error in the GET request
 */
export const makeGetEpic = (type, apiUrl, successAction, errorAction) => function (action$, store) {
  return action$.ofType(type).mergeMap((action) => {
    const {
      account: {
        userInfo: { id: accessToken },
      },
    } = store.getState();

    const params = {
      method: 'GET',
      url: apiUrl,
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
    };

    return Observable.ajax(params)
      .map((xhr) => {
        const { response } = xhr;
        return successAction(response);
      })
      .catch((xhr) => {
        const { response } = xhr;
        return Observable.of(errorAction(response));
      });
  });
};
