Weather Real-Time 🌦️

A real-time weather dashboard built with React, Vite, and Tailwind CSS, powered by the OpenWeather API. Search any city, view live weather data, and save your favorite locations for quick access.

Features

Real-time weather data — current conditions for any city worldwide via the OpenWeather API
Smart search — geocoding-based city search (name → lat/lng → weather), with debounced input for smooth typing
Favorites system — save cities to a favorites list with duplicate prevention (matched by coordinates)
Click-outside-to-close — favorites modal closes automatically when clicking outside
Persistent favorites — saved locations stored in localStorage via Context API
Dynamic background — background imagery adapts to current weather conditions
Loading states — clear loading indicators while fetching data

Tech Stack

React 19
Vite — build tool and dev server
Tailwind CSS v4 — styling
Context API — global state management (weather data, favorites)
OpenWeather API — weather data + geocoding

Project Structure (Key Files)

src/
├── components/
│ ├── Header.jsx # Navigation + favorites modal trigger
│ ├── Search.jsx # City search with debounced input
│ └── FavoriteListModal.jsx # Favorites list UI
├── context/
│ ├── WeatherContext.jsx # Weather data state
│ └── FavoriteContext.jsx # Favorites state + localStorage sync
├── hooks/
│ ├── useWeather.js # Weather fetching logic
│ └── useDebounce.js # Debounce hook for search input
└── data/
└── location-data.js # Location lookup helpers

Getting Started

Prerequisites

Node.js (LTS recommended)
An OpenWeather API key

Installation

bashgit clone https://github.com/mfhsohag01/weather-real-time.git
cd weather-real-time
npm install

Environment Variables

Create a .env file in the root directory:

VITE_OPENWEATHER_API_KEY=your_api_key_here

Run Locally

bashnpm run dev

The app will be available at http://localhost:5173.

Build for Production

bashnpm run build

Known Bugs Fixed Along the Way

This project has been a hands-on learning ground for real-world React debugging, including:

Case-sensitive and partial-match search bugs causing incorrect location fallback
A subtle race condition where incomplete typed input, combined with debounce timing, triggered an unintended default location fetch
useContext destructuring mismatches (array vs. object)
Missing useEffect dependencies causing stale state
Missing return in array filter callbacks

Roadmap

Autocomplete-style substring search
Improved error handling UI (network failures, invalid cities)
Deployment (Netlify/Vercel)

Author

mfhsohag01 — GitHub

License

This project is open source and available under the MIT License.
