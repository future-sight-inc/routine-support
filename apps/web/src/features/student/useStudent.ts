import { useState } from "react";

import { CreateStudentDto, Student } from "@routine-support/domains";

import { useAppSelector } from "../../app/hooks";
import { ActivityFilterService } from "../../services/ActivityFilterService";
import { coachStudentAPI } from "../../services/ApiService";

export const useStudent = () => {
  const [loading, setLoading] = useState(false);
  const [studentModalOpened, setStudentModalOpened] = useState(false);
  const [settingsModalOpened, setSettingsModalOpened] = useState(false);

  const [student, setStudent] = useState<Student | undefined>();
  const coachId = useAppSelector((state) => state.coach.coach?._id);

  const createStudent = async (student: CreateStudentDto) => {
    if (coachId) {
      try {
        setLoading(true);

        const response = await coachStudentAPI.createStudent({
          ...student,
          coachId,
        });

        ActivityFilterService.addProperty(response.data._id);

        setStudentModalOpened(false);
      } finally {
        setLoading(false);
      }
    }
  };

  const updateStudent = async (student: Student) => {
    try {
      setLoading(true);

      await coachStudentAPI.updateStudent(student);

      setStudentModalOpened(false);
    } finally {
      setLoading(false);
    }
  };

  const deleteStudent = async (student: Student) => {
    try {
      setLoading(true);

      await coachStudentAPI.deleteStudent(student._id);

      ActivityFilterService.removeProperty(student._id);

      setStudentModalOpened(false);
    } finally {
      setLoading(false);
    }
  };

  const openStudentModal = (student: Student) => {
    setStudent(student);
    setStudentModalOpened(true);
  };

  const openNewStudentModal = () => {
    setStudent(undefined);
    setStudentModalOpened(true);
  };

  const closeStudentModal = () => {
    setStudent(undefined);
    setStudentModalOpened(false);
  };

  const updateSettings = async (student: Student) => {
    try {
      setLoading(true);

      await coachStudentAPI.updateStudent(student);

      setSettingsModalOpened(false);
    } finally {
      setLoading(false);
    }
  };

  const openSettingsModal = (student: Student) => {
    setStudent(student);
    setSettingsModalOpened(true);
  };

  const closeSettingsModal = () => {
    setStudent(undefined);
    setSettingsModalOpened(false);
  };

  return {
    models: {
      student,
      studentModalOpened,
      settingsModalOpened,
      loading,
    },
    operations: {
      setStudent,
      createStudent,
      updateStudent,
      deleteStudent,
      openStudentModal,
      openNewStudentModal,
      closeStudentModal,
      updateSettings,
      openSettingsModal,
      closeSettingsModal,
    },
  };
};
