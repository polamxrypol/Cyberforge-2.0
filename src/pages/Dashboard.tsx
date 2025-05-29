import React from 'react';
import { Users, Bot, Database, Shield, BookOpen, BarChart, TrendingUp, Activity } from 'lucide-react';
import DashboardCard from '../components/dashboard/DashboardCard';
import StatCard from '../components/dashboard/StatCard';

const Dashboard: React.FC = () => {
  // Sample data for demonstration
  const stats = [
    { title: 'Active Channels', value: 24, change: 12, icon: <Users size={20} />, gradient: 'from-cyan-500 to-blue-600' },
    { title: 'AI Models', value: 156, change: 8, icon: <Database size={20} />, gradient: 'from-purple-500 to-indigo-600' },
    { title: 'Bot Integrations', value: 18, change: -3, icon: <Bot size={20} />, gradient: 'from-amber-500 to-orange-600' },
    { title: 'Security Tools', value: 42, change: 15, icon: <Shield size={20} />, gradient: 'from-emerald-500 to-green-600' },
  ];
  
  const dashboardCards = [
    { 
      title: 'Channels & Collaboration', 
      description: 'Create and manage secure channels for team collaboration', 
      icon: <Users size={24} />,
      gradient: 'from-cyan-500 to-blue-600',
      path: '/channels'
    },
    { 
      title: 'AI Model Repository', 
      description: 'Upload, share and access pre-trained ML/DL models', 
      icon: <Database size={24} />,
      gradient: 'from-purple-500 to-indigo-600',
      path: '/models'
    },
    { 
      title: 'Bot Integrations', 
      description: 'Deploy AI bots for automating routine tasks', 
      icon: <Bot size={24} />,
      gradient: 'from-amber-500 to-orange-600',
      path: '/bots'
    },
    { 
      title: 'Cybersecurity Tools', 
      description: 'Access tools for penetration testing and vulnerability assessment', 
      icon: <Shield size={24} />,
      gradient: 'from-emerald-500 to-green-600',
      path: '/cyber-tools'
    },
    { 
      title: 'Learning Resources', 
      description: 'Tutorials and guides on ML/DL and cybersecurity', 
      icon: <BookOpen size={24} />,
      gradient: 'from-pink-500 to-rose-600',
      path: '/learn'
    },
    { 
      title: 'Analytics', 
      description: 'Insights and statistics about your projects and activities', 
      icon: <BarChart size={24} />,
      gradient: 'from-blue-500 to-indigo-600',
      path: '/analytics'
    },
  ];
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome to CyberForge</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Your collaborative AI and cybersecurity platform
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
            gradient={stat.gradient}
          />
        ))}
      </div>
      
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Platform Overview
          </h2>
          <div className="flex items-center text-cyan-600 dark:text-cyan-400 text-sm font-medium">
            <Activity size={16} className="mr-1" />
            <span>Live Updates</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardCards.map((card, index) => (
            <DashboardCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              gradient={card.gradient}
              onClick={() => console.log(`Navigate to ${card.path}`)}
            />
          ))}
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Activity Overview
          </h2>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <TrendingUp size={16} className="mr-1" />
            <span className="text-sm">Last 30 Days</span>
          </div>
        </div>
        
        <div className="h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
          <p className="text-gray-500 dark:text-gray-400">
            Activity chart will be displayed here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;