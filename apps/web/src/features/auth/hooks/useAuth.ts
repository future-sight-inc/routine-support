import { useAppDispatch, useAppSelector } from "app/hooks";
import { useState } from "react";
import { authAPI } from "../authAPI";
import { authActions } from "../authSlice";
import { UserLoginDto, UserRegisterDto, UserUpdateDto } from "../types";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const { user, isLogged } = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const login = async (data: UserLoginDto) => {
    try {
      setLoading(true);

      const user = await authAPI.login(data);

      dispatch(authActions.setUser(user));
    } catch (error) {
      dispatch(authActions.setUser(null));
      throw error;
    } finally {
      setIsChecked(true);
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);

      await authAPI.logout();
    } catch {
    } finally {
      dispatch(authActions.setUser(null));
      setIsChecked(true);
      setLoading(false);
    }
  };

  const register = async (data: UserRegisterDto) => {
    try {
      setLoading(true);

      const user = await authAPI.register(data);

      dispatch(authActions.setUser(user));
    } catch (error) {
      dispatch(authActions.setUser(null));
      throw error;
    } finally {
      setIsChecked(true);
      setLoading(false);
    }
  };

  const getUser = async () => {
    try {
      setLoading(true);

      const user = await authAPI.getUser();

      dispatch(authActions.setUser(user));
    } catch {
      dispatch(authActions.setUser(null));
    } finally {
      setIsChecked(true);
      setLoading(false);
    }
  };

  const updateUser = async (data: UserUpdateDto) => {
    try {
      setLoading(true);

      const user = await authAPI.updateUser(data);

      dispatch(authActions.setUser(user));
    } catch {
      dispatch(authActions.setUser(null));
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
