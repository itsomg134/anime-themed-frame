import React, { useState, useEffect } from 'react';
import { Play, Pause, Heart, Star, TrendingUp, Clock, Calendar, User } from 'lucide-react';

const AnimeDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedAnime, setSelectedAnime] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const animeList = [
    { id: 1, title: "Attack on Titan", episode: "S4 E28", progress: 85, rating: 9.2, img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=600&fit=crop" },
    { id: 2, title: "Demon Slayer", episode: "S3 E7", progress: 60, rating: 9.0, img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=600&fit=crop" },
    { id: 3, title: "Jujutsu Kaisen", episode: "S2 E23", progress: 92, rating: 8.9, img: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400&h=600&fit=crop" },
    { id: 4, title: "One Piece", episode: "E1090", progress: 45, rating: 9.1, img: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=600&fit=crop" },
  ];

  const trendingAnime = [
    { title: "Frieren", score: 9.4, trend: "+12%" },
    { title: "Spy x Family", score: 8.8, trend: "+8%" },
    { title: "Chainsaw Man", score: 8.7, trend: "+15%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Anime Dashboard
            </h1>
            <p className="text-purple-300 mt-1">Your personalized anime tracker</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono">{currentTime.toLocaleTimeString()}</div>
            <div className="text-sm text-purple-300">{currentTime.toLocaleDateString()}</div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-300 text-sm">Watching</p>
              <p className="text-3xl font-bold mt-1">24</p>
            </div>
            <Play className="text-pink-400" size={32} />
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-300 text-sm">Completed</p>
              <p className="text-3xl font-bold mt-1">156</p>
            </div>
            <Star className="text-yellow-400" size={32} />
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-300 text-sm">Favorites</p>
              <p className="text-3xl font-bold mt-1">42</p>
            </div>
            <Heart className="text-red-400" size={32} />
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-300 text-sm">Hours Watched</p>
              <p className="text-3xl font-bold mt-1">2,341</p>
            </div>
            <Clock className="text-blue-400" size={32} />
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Continue Watching */}
        <div className="lg:col-span-2 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Play size={24} className="text-pink-400" />
            Continue Watching
          </h2>
          <div className="space-y-4">
            {animeList.map((anime) => (
              <div
                key={anime.id}
                className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer border border-purple-500/20"
                onClick={() => setSelectedAnime(anime)}
              >
                <div className="flex gap-4">
                  <img
                    src={anime.img}
                    alt={anime.title}
                    className="w-24 h-36 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{anime.title}</h3>
                    <p className="text-purple-300 text-sm mb-3">{anime.episode}</p>
                    
                    <div className="mb-2">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{anime.progress}%</span>
                      </div>
                      <div className="w-full bg-purple-900/50 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all"
                          style={{ width: `${anime.progress}%` }}
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star size={16} fill="currentColor" />
                      <span className="font-semibold">{anime.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trending */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp size={20} className="text-green-400" />
              Trending Now
            </h2>
            <div className="space-y-3">
              {trendingAnime.map((anime, idx) => (
                <div key={idx} className="bg-white/5 rounded-lg p-3 border border-purple-500/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold">{anime.title}</span>
                    <span className="text-green-400 text-sm">{anime.trend}</span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    <Star size={14} fill="currentColor" />
                    <span>{anime.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Calendar size={20} className="text-blue-400" />
              This Week
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="bg-pink-500 rounded-full w-2 h-2" />
                <span>Monday - Demon Slayer S3</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="bg-purple-500 rounded-full w-2 h-2" />
                <span>Wednesday - Jujutsu Kaisen</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="bg-blue-500 rounded-full w-2 h-2" />
                <span>Friday - One Piece</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="bg-indigo-500 rounded-full w-2 h-2" />
                <span>Saturday - Frieren</span>
              </div>
            </div>
          </div>

          {/* User Profile */}
          <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-full p-3">
                <User size={32} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Anime Fan</h3>
                <p className="text-purple-300 text-sm">Level 42 Otaku</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <p className="text-sm text-purple-300">Member since 2021</p>
              <p className="text-2xl font-bold mt-1">1,247 Episodes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDashboard;