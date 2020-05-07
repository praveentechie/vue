import EventEmitter from './event-emitter';

const NODE_SERVER_PORT = 4040;

async function restClient ({requestUrl, method = 'GET', body, unsetContentType = false}) {
  console.log('body', body);
  let completeUrl = buildCompleteUrl(requestUrl);
  const response = await fetch(completeUrl, {
    headers: {
      'Accept': 'application/json, text/plain, */*',
      ...!unsetContentType && {'Content-Type': 'application/json'}
    },
    credentials: 'include',
    method,
    ...body && {body: JSON.stringify(body)}
  });
  let responseResult;
  EventEmitter.emit('updateExpiration');
  if (response.ok) {
    let responseJson = await response.text();
    return responseJson ? JSON.parse(responseJson) : {};
  } else {
    responseResult = await Promise.reject(response);
  }
  return responseResult;
}

function buildCompleteUrl(requestUrl) {
  return `http://localhost:${NODE_SERVER_PORT}${requestUrl}`;
}

export default restClient;
