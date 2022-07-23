import { useEffect, useState } from "react";

import {
  coachActions,
  LoginCoachDto,
  RegisterCoachDto,
  UpdateCoachDto,
} from "@routine-support/domains";
import { SocketUserTypeEnum } from "@routine-support/types";
import { useAppDispatch, useAppSelector } from "apps/mobile/src/app/hooks";
import { coachAuthAPI } from "apps/mobile/src/services/ApiService";
import { io } from "socket.io-client";

export const useCoach = () => {
  const dispatch = useAppDispatch();

  const { coach, isLogged, socketConnection } = useAppSelector((state) => state.coachAuth);
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

      const user = await coachAuthAPI.login(data);

      dispatch(coachActions.setCoach(user));
    } catch (error) {
      console.log("error", error);
      dispatch(coachActions.setCoach(null));
      throw error;
    } finally {
      setIsChecked(true);
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);

      await coachAuthAPI.logout();
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

      const user = await coachAuthAPI.register(data);

      dispatch(coachActions.setCoach(user));
    } catch (error) {
      dispatch(coachActions.setCoach(null));
      throw error;
    } finally {
      setIsChecked(true);
      setLoading(false);
    }
  };

  const getCoach = async () => {
    try {
      setLoading(true);

      const user = await coachAuthAPI.getCoach();

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

      const user = await coachAuthAPI.updateCoach(data);

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

      await coachAuthAPI.deleteCoach();
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
