import { useEffect, useState } from "react";

import {
  coachActions,
  LoginCoachDto,
  RegisterCoachDto,
  UpdateCoachDto,
} from "@routine-support/domains";
import io from "socket.io-client";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { coachAPI } from "../../services/ApiService";

export const useCoach = () => {
  const dispatch = useAppDispatch();

  const { coach, isLogged, socketConnection } = useAppSelector(
    (state) => state.coach
  );
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (coach && !socketConnection) {
      dispatch(
        coachActions.setSocketConnection(
          io({
            auth: {
              coachId: coach._id,
            },
          })
        )
      );
    }
  }, [coach, socketConnection]);

  const login = async (data: LoginCoachDto) => {
    try {
      setLoading(true);

      const user = await coachAPI.login(data);

      dispatch(coachActions.setCoach(user));
    } catch (error) {
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

      await coachAPI.logout();
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(coachActions.setCoach(null));
      setIsChecked(true);
      setLoading(false);
    }
  };

  const register = async (data: RegisterCoachDto) => {
    try {
      setLoading(true);

      const user = await coachAPI.register(data);

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

      const user = await coachAPI.getCoach();

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

      const user = await coachAPI.updateCoach(data);

      dispatch(coachActions.setCoach(user));
    } catch {
      dispatch(coachActions.setCoach(null));
    } finally {
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
    },
  };
};
