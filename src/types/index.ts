export interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  role: 'user' | 'admin';
}

export interface Channel {
  id: string;
  name: string;
  description: string;
  type: 'public' | 'private';
  ownerId: string;
  createdAt: string;
}

export interface Message {
  id: string;
  content: string;
  userId: string;
  channelId: string;
  createdAt: string;
  attachments?: Attachment[];
}

export interface Attachment {
  id: string;
  url: string;
  type: 'image' | 'file' | 'model';
  name: string;
}

export interface AIModel {
  id: string;
  name: string;
  description: string;
  category: 'computer-vision' | 'nlp' | 'reinforcement-learning' | 'generative' | 'other';
  framework: 'tensorflow' | 'pytorch' | 'keras' | 'other';
  owner: User;
  downloadCount: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

export interface CyberTool {
  id: string;
  name: string;
  description: string;
  category: 'penetration-testing' | 'vulnerability-assessment' | 'forensics' | 'cryptography' | 'other';
  documentation: string;
  createdAt: string;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  category: 'ai' | 'cybersecurity' | 'programming';
  content: string;
  author: User;
  createdAt: string;
}