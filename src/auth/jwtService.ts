const allowedEndpoints = {
  login: "/auth/login",
  signup: "/auth/signup",
};

export const validateEndpoint = (endpoint: string) => {
  return Object.values(allowedEndpoints).includes(endpoint);
};
