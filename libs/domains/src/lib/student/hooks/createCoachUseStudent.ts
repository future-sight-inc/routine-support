import { useState } from "react";
import { CoachState } from "../../coach";
import { createCoachStudentAPI } from "../api";
import { CreateStudentDto, Student } from "../types";

interface State {
  coachAuth: CoachState;
}

interface Deps {
  studentApi: ReturnType<typeof createCoachStudentAPI>;
  useStoreState: () => State;
}

const useStudent = ({ studentApi, useStoreState }: Deps) => {
  const [loading, setLoading] = useState(false);
  const [studentModalOpened, setStudentModalOpened] = useState(false);
  const [settingsModalOpened, setSettingsModalOpened] = useState(false);

  const [student, setStudent] = useState<Student | undefined>();
  const {
    coachAuth: { coach },
  } = useStoreState();
  const coachId = coach?._id;

  const createStudent = async (student: CreateStudentDto) => {
    if (coachId) {
      try {
        setLoading(true);

        await studentApi.createStudent({
          ...student,
          coachId,
        });

        setStudentModalOpened(false);
      } finally {
        setLoading(false);
      }
    }
  };

  const updateStudent = async (student: Student) => {
    try {
      setLoading(true);

      await studentApi.updateStudent(student);

      setStudentModalOpened(false);
    } finally {
      setLoading(false);
    }
  };

  const deleteStudent = async (student: Student) => {
    try {
      setLoading(true);

      await studentApi.deleteStudent(student._id);

      setStudentModalOpened(false);
    } finally {
      setLoading(false);
    }
  };

  const openStudentModal = (student?: Student) => {
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

      await studentApi.updateStudent(student);

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

export const createCoachUseStudent = (deps: Deps) => () => useStudent(deps);
