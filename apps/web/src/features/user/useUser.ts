import { useState } from "react";

import {
  UserLoginDto,
  userAPI,
  userActions,
  UserRegisterDto,
  UserUpdateDto,
} from "@routine-support/domains";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const useUser = () => {
  const dispatch = useAppDispatch();

  const { user, isLogged } = useAppSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const login = async (data: UserLoginDto) => {
    try {
      setLoading(true);

      const user = await userAPI.login(data);

      dispatch(userActions.setUser(user));
    } catch (error) {
      dispatch(userActions.setUser(null));
      throw error;
    } finally {
      setIsChecked(true);
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);

      await userAPI.logout();
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(userActions.setUser(null));
      setIsChecked(true);
      setLoading(false);
    }
  };

  const register = async (data: UserRegisterDto) => {
    try {
      setLoading(true);

      const user = await userAPI.register(data);

      dispatch(userActions.setUser(user));
    } catch (error) {
      dispatch(userActions.setUser(null));
      throw error;
    } finally {
      setIsChecked(true);
      setLoading(false);
    }
  };

  const getUser = async () => {
    try {
      setLoading(true);

      const user = await userAPI.getUser();

      dispatch(userActions.setUser(user));
    } catch {
      dispatch(userActions.setUser(null));
    } finally {
      setIsChecked(true);
      setLoading(false);
    }
  };

  const updateUser = async (data: UserUpdateDto) => {
    try {
      setLoading(true);

      const user = await userAPI.updateUser(data);

      dispatch(userActions.setUser(user));
    } catch {
      dispatch(userActions.setUser(null));
    } finally {
      setIsChecked(true);
      setLoading(false);
    }
  };

  return {
    models: {
      user,
      isLogged,
      isChecked,
      loading,
    },
    operations: {
      login,
      register,
      logout,
      getUser,
      updateUser,
    },
  };
};
