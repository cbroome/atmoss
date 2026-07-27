interface LambdaEvent {
  resource?: string;
  path?: string;
  httpMethod?: string;
  headers?: Record<string, string> | null;
  queryStringParameters?: Record<string, string> | null;
  body?: string | null;
}

interface LambdaResponse {
  resource?: string;
  path?: string;
  httpMethod?: string;
  headers?: Record<string, string> | null;
  queryStringParameters?: Record<string, string> | null;
  body?: string | null;
}

interface HandlerResult {
  body: string;
  statusCode: number;
}

exports.handler = async (event: LambdaEvent): Promise<HandlerResult> => {
  // Extract specific properties from the event object
  const { resource, path, httpMethod, headers, queryStringParameters, body } =
    event;
  const response: LambdaResponse = {
    resource,
    path,
    httpMethod,
    headers,
    queryStringParameters,
    body,
  };
  return {
    body: JSON.stringify(response, null, 2),
    statusCode: 200,
  };
};
