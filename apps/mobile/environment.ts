import Constants from "expo-constants";

const ENV = {
  dev: {
    apiEndpoint: "https://routine-support.herokuapp.com/api",
    socketEndpoint: "https://routine-support.herokuapp.com",
  },
  prod: {
    apiEndpoint: "https://routine-support.herokuapp.com/api",
    socketEndpoint: "https://routine-support.herokuapp.com",
  },
};

export const getEnvVars = (env = Constants.manifest?.releaseChannel) => {
  if (__DEV__) {
    return ENV.dev;
  } else if (env === "prod") {
    return ENV.prod;
  }

  return ENV.dev;
};
