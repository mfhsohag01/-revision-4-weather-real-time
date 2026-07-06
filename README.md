# 🌦️ Weather Real-Time

A modern real-time weather dashboard built with **React**, **Vite**, and **Tailwind CSS**, powered by the **OpenWeather API**.

Search any city, view live weather conditions, and save your favorite locations for quick access. This project focuses on clean UI, reusable React architecture, and solving real-world frontend challenges such as debounce timing, race conditions, duplicate prevention, and persistent state management.

---

## 🚀 Live Demo

🔗 https://revision-4-weather-real-time-5ldf-alpha.vercel.app

---

## 📸 Preview

> Add your project screenshot here.

```md
![Weather Dashboard](./public/preview.png)
```

---

## ✨ Features

- 🌍 Real-time weather information using the OpenWeather API
- 🔍 Smart city search using geocoding
- ⌨️ Debounced search for smooth typing experience
- ⭐ Save favorite cities
- 🚫 Duplicate favorite prevention
- 💾 Persistent favorites using localStorage
- ❌ Click-outside-to-close favorites modal
- 🎨 Dynamic background based on current weather
- ⏳ Loading spinner while fetching weather
- 📱 Responsive user interface
- ⚡ Fast performance powered by Vite

---

## 🛠️ Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- JavaScript (ES6+)
- Context API
- OpenWeather API
- LocalStorage

---

## 📁 Project Structure

```text
weather-real-time/
├── public/
│   └── preview.png                  # Project screenshot
│
├── src/
│   ├── components/
│   │   ├── Header.jsx               # Navbar + Favorites modal + Click-outside-close
│   │   ├── Search.jsx               # Debounced city search
│   │   └── FavoriteListModal.jsx    # Favorites modal UI
│   │
│   ├── context/
│   │   ├── WeatherContext.jsx       # Weather global state
│   │   └── FavoriteContext.jsx      # Favorites state + localStorage
│   │
│   ├── hooks/
│   │   ├── useWeather.js            # Weather fetching logic
│   │   └── useDebounce.js           # Debounce hook
│   │
│   ├── data/
│   │   └── location-data.js         # Location lookup helpers
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── .npmrc                           # legacy-peer-deps=true
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm
- OpenWeather API Key

---

## 📦 Installation

```bash
git clone https://github.com/mfhsohag01/weather-real-time.git

cd weather-real-time

npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root.

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

---

## ▶️ Run Locally

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🧩 Engineering Challenges Solved

This project was also a practical exercise in debugging real-world React applications.

### Search & Debounce

- Fixed case-sensitive city search
- Prevented incorrect weather fetch caused by incomplete debounced input
- Solved debounce race condition using `useCallback`

### Favorites

- Implemented duplicate prevention using latitude & longitude comparison
- Added click-outside detection to close the favorites modal
- Fixed missing `return` inside the `filter()` callback

### React

- Fixed Context API destructuring mismatches
- Resolved stale state caused by missing dependencies
- Improved component structure through refactoring

### UI & UX

- Added loading spinner while fetching weather
- Verified loading state using Slow 4G throttling
- Fixed dynamic background rendering issues

---

## 🚀 Future Improvements

- 🔍 Autocomplete city suggestions
- 📅 5-day weather forecast
- 🌡️ Celsius / Fahrenheit toggle
- 🌙 Dark / Light mode
- ⚠️ Better error handling UI
- 📲 Progressive Web App (PWA)

---

## 👨‍💻 Author

**Sohag**

GitHub: https://github.com/mfhsohag01

---

## 📄 License

This project is licensed under the **MIT License**.
