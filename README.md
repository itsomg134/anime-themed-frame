# anime-themed-frame

# 🎌 Anime Edition Dashboard

A beautiful, modern anime tracking dashboard built with React and Tailwind CSS. Track your watching progress, discover trending shows, and manage your anime schedule all in one sleek interface.

![Dashboard Preview](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

## ✨ Features

- **📊 Real-time Stats** - Track watching status, completed shows, favorites, and total watch time
- **▶️ Continue Watching** - Resume your anime with visual progress bars and episode tracking
- **🔥 Trending Section** - Stay updated with the hottest anime and score trends
- **📅 Weekly Schedule** - Never miss a new episode with the color-coded release calendar
- **👤 User Profile** - Display your otaku level and viewing achievements
- **🎨 Beautiful UI** - Glassmorphic design with gradient backgrounds and smooth animations
- **⏰ Live Clock** - Real-time clock and date display
- **🌈 Responsive Design** - Works perfectly on desktop, tablet, and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/anime-dashboard.git
cd anime-dashboard
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## 🛠️ Built With

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Unsplash** - Placeholder images (replace with your anime covers)

## 📁 Project Structure

```
anime-dashboard/
├── src/
│   ├── components/
│   │   └── AnimeDashboard.jsx
│   ├── App.js
│   └── index.js
├── public/
├── package.json
└── README.md
```

## 🎨 Customization

### Adding Your Own Anime

Edit the `animeList` array in `AnimeDashboard.jsx`:

```javascript
const animeList = [
  { 
    id: 1, 
    title: "Your Anime Title", 
    episode: "S1 E1", 
    progress: 50, 
    rating: 9.0, 
    img: "your-image-url.jpg" 
  },
  // Add more anime...
];
```

### Changing the Color Scheme

Modify the gradient classes in the main container:

```javascript
// Current: Purple to Blue
className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900"

// Example: Pink to Orange
className="bg-gradient-to-br from-pink-900 via-rose-900 to-orange-900"
```

### Updating Stats

Modify the stats cards to display your actual data:

```javascript
<p className="text-3xl font-bold mt-1">24</p> // Change these values
```

## 🔮 Future Enhancements

- [ ] Integration with MyAnimeList/AniList API
- [ ] User authentication and data persistence
- [ ] Advanced filtering and search functionality
- [ ] Recommendations engine
- [ ] Watch history timeline
- [ ] Social features (share lists, reviews)
- [ ] Dark/Light theme toggle
- [ ] Export watchlist as PDF

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern anime streaming platforms
- Icons by [Lucide](https://lucide.dev/)
- Placeholder images from [Unsplash](https://unsplash.com/)

## 📧 Contact

YOm Gedam

GitHub: @itsomg134

Email: omgedam123098@gmail.com

Twitter (X): @omgedam

LinkedIn: Om Gedam

Portfolio: https://ogworks.lovable.app
