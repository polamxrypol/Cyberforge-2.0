import React from 'react';
import { Download, Star, Code, Share2 } from 'lucide-react';
import { AIModel } from '../../types';

interface ModelCardProps {
  model: AIModel;
  onDownload: (modelId: string) => void;
  onDeploy: (modelId: string) => void;
}

const ModelCard: React.FC<ModelCardProps> = ({ model, onDownload, onDeploy }) => {
  const frameworkColors: Record<string, string> = {
    tensorflow: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
    pytorch: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    keras: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    other: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
  };

  const categoryColors: Record<string, string> = {
    'computer-vision': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    'nlp': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'reinforcement-learning': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    'generative': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
    'other': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`text-xs px-2 py-1 rounded-full ${frameworkColors[model.framework]}`}>
            {model.framework}
          </span>
          <span className={`text-xs px-2 py-1 rounded-full ${categoryColors[model.category]}`}>
            {model.category.replace('-', ' ')}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {model.name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {model.description}
        </p>
        
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
          <div className="flex items-center mr-4">
            <Download size={16} className="mr-1" />
            <span>{model.downloadCount}</span>
          </div>
          <div className="flex items-center">
            <Star size={16} className="mr-1 text-yellow-400" />
            <span>{model.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
            {model.owner.name.substring(0, 2).toUpperCase()}
          </div>
          <div className="ml-2">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {model.owner.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {new Date(model.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 flex justify-between">
        <button 
          onClick={() => onDownload(model.id)}
          className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400"
        >
          <Download size={16} className="mr-1" />
          Download
        </button>
        <button 
          onClick={() => onDeploy(model.id)}
          className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400"
        >
          <Code size={16} className="mr-1" />
          Deploy
        </button>
        <button className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400">
          <Share2 size={16} className="mr-1" />
          Share
        </button>
      </div>
    </div>
  );
};

export default ModelCard;