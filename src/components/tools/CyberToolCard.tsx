import React from 'react';
import { Terminal, BookOpen, Download, Shield } from 'lucide-react';
import { CyberTool } from '../../types';

interface CyberToolCardProps {
  tool: CyberTool;
  onLaunch: (toolId: string) => void;
  onViewDocs: (toolId: string) => void;
}

const CyberToolCard: React.FC<CyberToolCardProps> = ({ 
  tool, 
  onLaunch, 
  onViewDocs 
}) => {
  const categoryIcons: Record<string, React.ReactNode> = {
    'penetration-testing': <Shield size={20} />,
    'vulnerability-assessment': <Shield size={20} />,
    'forensics': <Terminal size={20} />,
    'cryptography': <Terminal size={20} />,
    'other': <Terminal size={20} />
  };

  const categoryColors: Record<string, string> = {
    'penetration-testing': 'from-red-500 to-orange-500',
    'vulnerability-assessment': 'from-yellow-500 to-amber-500',
    'forensics': 'from-blue-500 to-indigo-500',
    'cryptography': 'from-purple-500 to-violet-500',
    'other': 'from-gray-500 to-slate-500'
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-lg bg-gradient-to-r ${categoryColors[tool.category]} text-white mr-4`}>
            {categoryIcons[tool.category]}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {tool.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {tool.category.replace('-', ' ')}
            </p>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
          {tool.description}
        </p>
        
        <div className="flex items-center justify-between">
          <button 
            onClick={() => onLaunch(tool.id)}
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-colors"
          >
            <Terminal size={16} className="inline mr-1" />
            Launch Tool
          </button>
          
          <button 
            onClick={() => onViewDocs(tool.id)}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center"
          >
            <BookOpen size={16} className="mr-1" />
            Documentation
          </button>
        </div>
      </div>
      
      <div className={`h-1 bg-gradient-to-r ${categoryColors[tool.category]} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}></div>
    </div>
  );
};

export default CyberToolCard;