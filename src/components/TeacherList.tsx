import React, { useState } from 'react';
import { Trash2, MessageCircle } from 'lucide-react';
import { useTeachers } from '../context/TeacherContext';
import Chat from './Chat';

const TeacherList = () => {
  const { teachers, deleteTeacher } = useTeachers();
  const [selectedTeacher, setSelectedTeacher] = useState<number | null>(null);
  
  // Simulating current user (admin) with ID 0
  const currentUserId = 0;

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">Teacher Directory</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{teacher.name}</h3>
                  <p className="text-indigo-600">{teacher.subject}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedTeacher(teacher.id)}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => deleteTeacher(teacher.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span> {teacher.email}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Phone:</span> {teacher.phone}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Experience:</span> {teacher.experience} years
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {selectedTeacher && (
          <div className="lg:sticky lg:top-8">
            <Chat
              currentUserId={currentUserId}
              otherUserId={selectedTeacher}
              otherUserName={teachers.find(t => t.id === selectedTeacher)?.name || ''}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherList;