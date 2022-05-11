import Constants from "expo-constants";

const ENV = {
  dev: {
    apiEndpoint: "http://192.168.2.7:4000/api",
    socketEndpoint: "http://192.168.2.7:4000",
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
