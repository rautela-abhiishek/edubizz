import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Teacher {
  id: number;
  name: string;
  subject: string;
  email: string;
  phone: string;
  experience: number;
}

interface TeacherContextType {
  teachers: Teacher[];
  addTeacher: (teacher: Omit<Teacher, 'id'>) => void;
  deleteTeacher: (id: number) => void;
}

const TeacherContext = createContext<TeacherContextType | undefined>(undefined);

export const useTeachers = () => {
  const context = useContext(TeacherContext);
  if (!context) {
    throw new Error('useTeachers must be used within a TeacherProvider');
  }
  return context;
};

interface TeacherProviderProps {
  children: ReactNode;
}

export const TeacherProvider = ({ children }: TeacherProviderProps) => {
  const [teachers, setTeachers] = useState<Teacher[]>([
    {
      id: 1,
      name: "John Doe",
      subject: "Mathematics",
      email: "john.doe@school.com",
      phone: "123-456-7890",
      experience: 5
    }
  ]);

  const addTeacher = (teacherData: Omit<Teacher, 'id'>) => {
    const newTeacher = {
      ...teacherData,
      id: teachers.length > 0 ? Math.max(...teachers.map(t => t.id)) + 1 : 1
    };
    setTeachers([...teachers, newTeacher]);
  };

  const deleteTeacher = (id: number) => {
    setTeachers(teachers.filter(teacher => teacher.id !== id));
  };

  return (
    <TeacherContext.Provider value={{ teachers, addTeacher, deleteTeacher }}>
      {children}
    </TeacherContext.Provider>
  );
};