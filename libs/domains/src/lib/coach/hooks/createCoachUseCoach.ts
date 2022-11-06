import { createCoachAuthAPI } from "../api";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

import {
  coachActions,
  LoginCoachDto,
  RegisterCoachDto,
  UpdateCoachDto,
} from "@routine-support/domains";
import { SocketUserTypeEnum } from "@routine-support/types";
import io from "socket.io-client";

interface Deps {
  coachApi: ReturnType<typeof createCoachAuthAPI>;
}

export const createCoachUseCoach =
  ({ coachApi }: Deps) =>
    () => {
      const dispatch = useDispatch();

      const { coach, isLogged, socketConnection } = useSelector((state: any) => state.coachAuth);
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
