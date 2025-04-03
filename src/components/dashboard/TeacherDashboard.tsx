import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTeachers } from '../../context/TeacherContext';
import { useChat } from '../../context/ChatContext';
import { Calendar, Users, MessageSquare, BookOpen } from 'lucide-react';

const TeacherDashboard = () => {
  const { user } = useAuth();
  const { teachers } = useTeachers();
  const { messages } = useChat();

  const stats = [
    {
      title: 'Total Students',
      value: '150',
      icon: Users,
      change: '+12.5%',
      changeType: 'positive',
    },
    {
      title: 'Active Courses',
      value: '8',
      icon: BookOpen,
      change: '+5.0%',
      changeType: 'positive',
    },
    {
      title: 'Messages',
      value: messages.length.toString(),
      icon: MessageSquare,
      change: '+24.5%',
      changeType: 'positive',
    },
    {
      title: 'Upcoming Classes',
      value: '12',
      icon: Calendar,
      change: '0%',
      changeType: 'neutral',
    },
  ];

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <stat.icon className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {stat.title}
                        </dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900">
                            {stat.value}
                          </div>
                          <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                            stat.changeType === 'positive' ? 'text-green-600' : 
                            stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-500'
                          }`}>
                            {stat.change}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
            <div className="flow-root">
              <ul className="-mb-8">
                {[1, 2, 3].map((item, itemIdx) => (
                  <li key={item}>
                    <div className="relative pb-8">
                      {itemIdx !== 2 ? (
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center ring-8 ring-white">
                            <Users className="h-4 w-4 text-white" />
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500">
                              New student enrolled in <span className="font-medium text-gray-900">Mathematics 101</span>
                            </p>
                          </div>
                          <div className="text-sm text-gray-500">
                            <time dateTime="2024-03-13">1h ago</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Upcoming Schedule</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((class_) => (
                <div key={class_} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="bg-indigo-100 p-2 rounded-lg">
                      <BookOpen className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Advanced Mathematics</p>
                      <p className="text-sm text-gray-500">Room 301</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    09:00 AM - 10:30 AM
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;