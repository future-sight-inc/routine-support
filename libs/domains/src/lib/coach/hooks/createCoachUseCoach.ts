import { createCoachAuthAPI } from "../api";
import { useDispatch } from "react-redux";

import { useEffect, useState } from "react";

import {
  coachActions,
  CoachState,
  LoginCoachDto,
  RegisterCoachDto,
  studentActions,
  UpdateCoachDto,
} from "@routine-support/domains";
import { SocketUserTypeEnum } from "@routine-support/types";
import io from "socket.io-client";

interface State {
  coachAuth: CoachState;
}

interface Deps {
  coachApi: ReturnType<typeof createCoachAuthAPI>;
  useStoreState: () => State;
}

const useCoach = ({ coachApi, useStoreState }: Deps) => {
  const {
    coachAuth: { coach, isLogged, socketConnection },
  } = useStoreState();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (coach && !socketConnection) {
      dispatch(
        coachActions.setSocketConnection(
          io({
            auth: {
              userId: coach._id,
              userType: SocketUserTypeEnum.Coach,
            },
          })
        )
      );
    }
  }, [coach, socketConnection]);

  const login = async (data: LoginCoachDto) => {
    try {
      setLoading(true);

      const user = await coachApi.login(data);

      dispatch(coachActions.setCoach(user));
    } catch (error) {
      dispatch(coachActions.setCoach(null));
      throw error;
    } finally {
      setIsChecked(true);
      setLoading(false);
      dispatch(studentActions.setStudent(null));
    }
  };

  const logout = async () => {
    try {
      setLoading(true);

      await coachApi.logout();
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(coachActions.setCoach(null));
      dispatch(coachActions.setSocketConnection(null));
      setIsChecked(true);
      setLoading(false);
    }
  };

  const register = async (data: RegisterCoachDto) => {
    try {
      setLoading(true);

      const user = await coachApi.register(data);

      dispatch(coachActions.setCoach(user));
    } catch (error) {
      dispatch(coachActions.setCoach(null));
      throw error;
    } finally {
      setIsChecked(true);
      setLoading(false);
      dispatch(studentActions.setStudent(null));
    }
  };

  const getCoach = async () => {
    try {
      setLoading(true);

      const user = await coachApi.getCoach();

      dispatch(coachActions.setCoach(user));
    } catch {
      dispatch(coachActions.setCoach(null));
    } finally {
      setIsChecked(true);
      setLoading(false);
    }
  };

  const updateCoach = async (data: UpdateCoachDto) => {
    try {
      setLoading(true);

      const user = await coachApi.updateCoach(data);

      dispatch(coachActions.setCoach(user));
    } catch {
      dispatch(coachActions.setCoach(null));
    } finally {
      setIsChecked(true);
      setLoading(false);
    }
  };

  const deleteCoach = async () => {
    try {
      setLoading(true);

      await coachApi.deleteCoach();
    } finally {
      dispatch(coachActions.setCoach(null));
      setIsChecked(true);
      setLoading(false);
    }
  };

  return {
    models: {
      coach,
      isLogged,
      isChecked,
      loading,
      socketConnection,
    },
    operations: {
      login,
      register,
      logout,
      getCoach,
      updateCoach,
      deleteCoach,
    },
  };
};

export const createCoachUseCoach = (deps: Deps) => () => useCoach(deps);
