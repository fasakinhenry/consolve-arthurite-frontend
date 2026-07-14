# 🌐 Urbanpulse — Informal Transit Intelligence & Mobility Data Platform

Urbanpulse is a state-of-the-art web application designed to collect, process, and visualize fragmented mobility data from Nigeria's informal transit networks (Danfos, Kekes, Okadas). It transforms chaotic transit inputs into structured, actionable intelligence for urban planners, government agencies, and transportation operators.

This repository contains the **Frontend React Application**, styled with the latest Tailwind CSS v4, and featuring rich simulations, responsive dashboards, and AI-powered recommendations.

---

## 🚀 Key Features & Dashboards

Urbanpulse provides three distinct portals tailored to different roles in the transit ecosystem:

### 1. 🚶 Rider Dashboard (`/dashboard/rider`)
*Designed for commuters and riders navigating the informal network.*
- **Route Estimator:** Search origins and destinations to find available transit connections.
- **Wait Time & Fare Estimator:** Simulates real-time fares (in Nigerian Naira ₦) and expected waiting times based on historical queue patterns.
- **Ride Dispatch Simulation:** Tracks progress as simulated vehicles are assigned, trips are started, and rides are completed.

### 2. 🛺 Driver Dashboard (`/dashboard/driver`)
*Empowering informal transit drivers to participate in the data grid.*
- **Vehicle Registration:** Drivers can quickly register their vehicle parameters (License Plate, Vehicle Type—Danfo/Keke/Okada, Route, Capacity).
- **GPS Telemetry Simulation:** An active toggle switch simulating real-time GPS location sharing.
- **Trip Dispatch Board:** Receives and processes real-time requests for passenger pickups along their registered route.

### 3. 📊 Intelligence Dashboard (`/dashboard/intelligence`)
*A control panel for urban planners, researchers, and operators.*
- **Transit Metrics:** Displays real-time counts of total trips, active vehicles, peak corridors, average wait times, growth rates, and daily financial yields.
- **Route Analytics:** Visualizes corridor efficiency indices, passenger volumes, and growth trends.
- **AI Insights Engine:** Leverages advanced AI summaries (designed for Amazon Bedrock integration) to suggest operational routing optimizations, fleet investment strategies, and traffic mitigation advice.
- **Simulation Suite:** Allows developers to seed mock trip data to simulate high-traffic load scenarios.

---

## 🛠️ Technical Stack

- **Framework:** [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite 8](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (using Vite plugin `@tailwindcss/vite` and CSS variables via `@theme`)
- **Routing:** [React Router v6](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **API Client:** [Axios](https://axios-http.com/)

---

## 📁 Project Structure

```
consolve-arthurite-frontend/
├── index.html              # HTML Entrypoint & SEO Meta Tags
├── package.json            # Scripts & dependencies
├── vite.config.ts          # Vite build config with Tailwind v4
├── src/
│   ├── main.tsx            # React application entrypoint
│   ├── App.tsx             # Routes definition
│   ├── index.css           # Tailwind v4 theme, fonts, typography scale, custom styling
│   ├── assets/             # Brand logos & static assets
│   └── pages/
│       ├── landing/        # Brand home page (Hero, Stats, CTA, FAQ, Footer)
│       ├── auth/           # Login & Registration pages
│       └── dashboard/      # Custom role-based dashboards:
│           ├── rider.tsx   # Rider console
│           ├── driver.tsx  # Driver console
│           └── intelligence.tsx # Operations & Planner console
```

---

## ⚡ Getting Started

This project is configured to work with either **Bun** or **npm**.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+) or [Bun](https://bun.sh/) installed.

### Installation
Clone the repository and install the dependencies:

```bash
# Navigate to the workspace directory
cd consolve-arthurite-frontend

# Install dependencies using Bun
bun install

# Or using npm
npm install
```

### Run the Development Server
Launch the project locally on your machine:

```bash
# Start server with Bun
bun dev

# Or with npm
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port specified in the terminal).

### Build for Production
Create an optimized build for deployment:

```bash
# Build with Bun
bun run build

# Or with npm
npm run build
```

---

## 🔌 API Integration Details

The app connects to the **Urbanpulse Backend** at `http://localhost:5000/api/v1`. If the backend is offline, the app gracefully falls back to a high-fidelity client-side simulator.

The frontend expects the following endpoints:

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/analytics/dashboard` | `GET` | Fetches core metrics (trips, vehicles, wait times, daily yield) |
| `/analytics/routes/top` | `GET` | Fetches route analytics and growth data |
| `/ai/insights` | `GET` | Retrieves active AI insights & urban planning recommendations |
| `/ai/insights/generate` | `POST` | Triggers LLM insights generation via Amazon Bedrock |
| `/trips/seed` | `POST` | Seeds mock trip data for real-time simulation |

---

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

---
*Urbanpulse — Digitizing the pulse of African mobility.*
