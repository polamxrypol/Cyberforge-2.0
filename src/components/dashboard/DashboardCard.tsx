import React from 'react';

interface DashboardCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  count?: number;
  gradient?: string;
  onClick?: () => void;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  description,
  icon,
  count,
  gradient = 'from-cyan-500 to-blue-600',
  onClick
}) => {
  return (
    <div 
      onClick={onClick}
      className={`relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className={`p-3 rounded-lg bg-gradient-to-r ${gradient} text-white`}>
            {icon}
          </div>
          {count !== undefined && (
            <div className="text-3xl font-bold text-gray-700 dark:text-gray-300">
              {count}
            </div>
          )}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}></div>
    </div>
  );
};

export default DashboardCard;