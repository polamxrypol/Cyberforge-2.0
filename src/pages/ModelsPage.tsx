import React, { useState } from 'react';
import { Search, Filter, Plus, Database } from 'lucide-react';
import ModelCard from '../components/models/ModelCard';
import { AIModel } from '../types';

const ModelsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFramework, setSelectedFramework] = useState<string | null>(null);
  
  // Sample data for demonstration
  const sampleModels: AIModel[] = [
    {
      id: '1',
      name: 'ResNet-50 Vision Model',
      description: 'Pre-trained ResNet-50 model for image classification tasks with high accuracy on ImageNet dataset.',
      category: 'computer-vision',
      framework: 'pytorch',
      owner: { id: '1', name: 'Alex Johnson', email: 'alex@example.com', image: '', role: 'user' },
      downloadCount: 1256,
      rating: 4.7,
      createdAt: '2023-10-15T14:48:00.000Z',
      updatedAt: '2023-11-01T09:30:00.000Z'
    },
    {
      id: '2',
      name: 'BERT-base NLP Model',
      description: 'Pre-trained BERT model for natural language processing tasks like sentiment analysis and text classification.',
      category: 'nlp',
      framework: 'tensorflow',
      owner: { id: '2', name: 'Sarah Miller', email: 'sarah@example.com', image: '', role: 'user' },
      downloadCount: 2340,
      rating: 4.9,
      createdAt: '2023-09-20T10:24:00.000Z',
      updatedAt: '2023-10-25T16:15:00.000Z'
    },
    {
      id: '3',
      name: 'StyleGAN2 Generator',
      description: 'Advanced GAN model for generating high-quality synthetic images with controllable style attributes.',
      category: 'generative',
      framework: 'tensorflow',
      owner: { id: '3', name: 'Mike Chen', email: 'mike@example.com', image: '', role: 'user' },
      downloadCount: 1875,
      rating: 4.6,
      createdAt: '2023-08-12T08:30:00.000Z',
      updatedAt: '2023-09-28T11:45:00.000Z'
    },
    {
      id: '4',
      name: 'DQN Reinforcement Learning',
      description: 'Deep Q-Network implementation for reinforcement learning environments with optimized exploration strategies.',
      category: 'reinforcement-learning',
      framework: 'pytorch',
      owner: { id: '4', name: 'Emma Wilson', email: 'emma@example.com', image: '', role: 'user' },
      downloadCount: 982,
      rating: 4.5,
      createdAt: '2023-07-05T15:20:00.000Z',
      updatedAt: '2023-08-18T13:10:00.000Z'
    },
    {
      id: '5',
      name: 'MobileNetV3 Lite',
      description: 'Optimized MobileNetV3 model for edge device deployment with minimal computational requirements.',
      category: 'computer-vision',
      framework: 'keras',
      owner: { id: '5', name: 'David Park', email: 'david@example.com', image: '', role: 'user' },
      downloadCount: 1543,
      rating: 4.8,
      createdAt: '2023-11-02T09:40:00.000Z',
      updatedAt: '2023-11-20T14:25:00.000Z'
    },
    {
      id: '6',
      name: 'GPT-2 Text Generator',
      description: 'Fine-tuned GPT-2 model for creative text generation and content creation applications.',
      category: 'nlp',
      framework: 'pytorch',
      owner: { id: '6', name: 'Lisa Brown', email: 'lisa@example.com', image: '', role: 'user' },
      downloadCount: 2105,
      rating: 4.7,
      createdAt: '2023-10-08T11:15:00.000Z',
      updatedAt: '2023-11-15T10:30:00.000Z'
    }
  ];

  const categories = [
    { value: 'computer-vision', label: 'Computer Vision' },
    { value: 'nlp', label: 'Natural Language Processing' },
    { value: 'reinforcement-learning', label: 'Reinforcement Learning' },
    { value: 'generative', label: 'Generative Models' },
    { value: 'other', label: 'Other' }
  ];

  const frameworks = [
    { value: 'tensorflow', label: 'TensorFlow' },
    { value: 'pytorch', label: 'PyTorch' },
    { value: 'keras', label: 'Keras' },
    { value: 'other', label: 'Other' }
  ];

  // Filter models based on search and filters
  const filteredModels = sampleModels.filter(model => {
    const matchesSearch = 
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      model.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || model.category === selectedCategory;
    const matchesFramework = !selectedFramework || model.framework === selectedFramework;
    
    return matchesSearch && matchesCategory && matchesFramework;
  });

  const handleDownload = (modelId: string) => {
    console.log(`Downloading model with ID: ${modelId}`);
  };

  const handleDeploy = (modelId: string) => {
    console.log(`Deploying model with ID: ${modelId}`);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">AI Model Repository</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Discover, share, and deploy machine learning models
          </p>
        </div>
        
        <button className="mt-4 lg:mt-0 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md flex items-center transition-colors hover:from-cyan-600 hover:to-blue-700">
          <Plus size={18} className="mr-2" />
          Upload Model
        </button>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:text-white"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative min-w-[160px]">
              <select
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="w-full appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 pl-10 pr-8 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:text-white"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
              <Filter className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            
            <div className="relative min-w-[160px]">
              <select
                value={selectedFramework || ''}
                onChange={(e) => setSelectedFramework(e.target.value || null)}
                className="w-full appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 pl-10 pr-8 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:text-white"
              >
                <option value="">All Frameworks</option>
                {frameworks.map(framework => (
                  <option key={framework.value} value={framework.value}>
                    {framework.label}
                  </option>
                ))}
              </select>
              <Database className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
        </div>
      </div>
      
      {filteredModels.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <Database size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No models found</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Try adjusting your search or filters to find what you're looking for.
          </p>
          <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md transition-colors hover:from-cyan-600 hover:to-blue-700">
            Upload a New Model
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map(model => (
            <ModelCard
              key={model.id}
              model={model}
              onDownload={handleDownload}
              onDeploy={handleDeploy}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ModelsPage;