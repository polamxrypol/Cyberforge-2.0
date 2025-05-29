import React from 'react';
import { Hash, Lock, User, Users } from 'lucide-react';
import { Channel } from '../../types';

interface ChannelListProps {
  channels: Channel[];
  activeChannel?: string;
  onSelectChannel: (channelId: string) => void;
}

const ChannelList: React.FC<ChannelListProps> = ({
  channels,
  activeChannel,
  onSelectChannel
}) => {
  return (
    <div className="bg-gray-800 w-64 h-full overflow-y-auto">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold text-white flex items-center">
          <Users size={18} className="mr-2" />
          Channels
        </h2>
        <button className="mt-2 text-sm text-cyan-400 hover:text-cyan-300 flex items-center">
          + Create Channel
        </button>
      </div>
      
      <div className="p-2">
        {channels.length === 0 ? (
          <div className="text-center py-6 text-gray-500">
            <p>No channels available</p>
            <button className="mt-2 text-sm text-cyan-400 hover:text-cyan-300">
              Create your first channel
            </button>
          </div>
        ) : (
          <ul className="space-y-1">
            {channels.map((channel) => (
              <li key={channel.id}>
                <button
                  onClick={() => onSelectChannel(channel.id)}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center ${
                    activeChannel === channel.id
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {channel.type === 'private' ? (
                    <Lock size={16} className="mr-2 flex-shrink-0" />
                  ) : (
                    <Hash size={16} className="mr-2 flex-shrink-0" />
                  )}
                  <span className="truncate">{channel.name}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="p-4 mt-auto border-t border-gray-700">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center">
            <User size={16} />
          </div>
          <div className="ml-2">
            <p className="text-sm font-medium text-white">John Doe</p>
            <p className="text-xs text-gray-400">Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelList;