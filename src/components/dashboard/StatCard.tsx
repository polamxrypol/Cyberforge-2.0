import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
  gradient?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  icon,
  gradient = 'from-cyan-500 to-blue-600'
}) => {
  const isPositive = change && change > 0;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{value}</p>
          
          {change !== undefined && (
            <div className="flex items-center mt-2">
              <span className={`flex items-center text-sm ${
                isPositive ? 'text-green-500' : 'text-red-500'
              }`}>
                {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                {Math.abs(change)}%
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                vs last month
              </span>
            </div>
          )}
        </div>
        
        <div className={`p-3 rounded-lg bg-gradient-to-r ${gradient} text-white`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;