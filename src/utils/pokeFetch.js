const {urlBase} = require('@constants/url');

export const pokeFetch = async pokemon => {
  try {
    let response = await fetch(`${urlBase}${pokemon}`);
    let json = await response.json();
    return json;
  } catch {
    error => {
      console.log(error);
    };
  }
};
