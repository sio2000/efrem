import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Star, Trophy } from '@phosphor-icons/react';

interface SocialLink {
  platform: string;
  url: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface UserProfileProps {
  username: string;
  displayName: string;
  bio: string;
  profilePicture?: string;
  points: number;
  socialLinks?: SocialLink[];
  achievements?: Achievement[];
  recentActivity?: string[];
}

const UserProfile: React.FC<UserProfileProps> = ({
  username,
  displayName,
  bio,
  profilePicture,
  points,
  socialLinks = [],
  achievements = [],
  recentActivity = [],
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-1 bg-gradient-to-br from-blue-400/40 via-white/30 to-purple-300/40 rounded-3xl shadow-2xl backdrop-blur-md border-4 border-transparent hover:border-blue-400 transition-all duration-500 group"
      style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
    >
      <div className="bg-white/60 dark:bg-gray-900/60 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 relative overflow-hidden">
        {/* Animated Border Effect */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none z-0 group-hover:animate-border-glow" style={{boxShadow: '0 0 40px 10px rgba(59,130,246,0.2)'}} />
        {/* Profile Section */}
        <div className="flex-1 z-10">
          <div className="flex items-center gap-6 mb-8">
            <div className="relative">
              {profilePicture ? (
                <img
                  src={profilePicture}
                  alt={displayName}
                  className="w-28 h-28 rounded-2xl object-cover border-4 border-blue-200 shadow-lg"
                />
              ) : (
                <div className="w-28 h-28 rounded-2xl bg-blue-100 flex items-center justify-center border-4 border-blue-200 shadow-lg">
                  <User size={56} className="text-blue-600" />
                </div>
              )}
              <button
                className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 shadow-lg transition-all"
                onClick={() => setIsEditing(!isEditing)}
                title="Edit Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 drop-shadow-sm">{displayName}</h1>
              <p className="text-blue-700 font-mono text-lg">@{username}</p>
              <div className="flex items-center gap-2 mt-3">
                <Trophy className="text-yellow-500 animate-bounce" />
                <span className="text-gray-800 font-semibold text-lg">{points} points</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2 text-blue-900">Bio</h2>
            <p className="text-gray-800 italic">{bio}</p>
          </div>

          {socialLinks.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2 text-blue-900">Social Links</h2>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Achievements and Activity Section */}
        <div className="flex-1 z-10">
          {achievements.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2 text-blue-900">Achievements</h2>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    className="bg-gradient-to-br from-blue-100/60 to-purple-100/60 p-4 rounded-xl flex items-center gap-3 shadow-md relative group cursor-pointer"
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    whileTap={{ scale: 0.98, rotate: 2 }}
                  >
                    <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                      <Trophy className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{achievement.title}</h3>
                    </div>
                    {/* Tooltip */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-20 hidden group-hover:block min-w-[180px]">
                      <div className="bg-white/90 text-gray-800 text-xs rounded-lg shadow-lg px-4 py-2 border border-blue-200 animate-fade-in">
                        {achievement.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {recentActivity.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <Star className="text-blue-600 animate-spin-slow" />
                    <span>{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfile; 