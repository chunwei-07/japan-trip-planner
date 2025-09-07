# 🗾 Japan Trip Planner

A personal, interactive web application designed to help plan and track travel itineraries for Japan. Built from the ground up with a modern, free-of-charge tech stack, this app focuses on providing a simple, map-centric planning experience.

**[App Screenshot Soon]**

## ✨ Core Features

This project is being built in phases. Here is the current status:

-   [x] **Interactive Map of Japan:** Utilizes Leaflet.js with modern CartoDB map tiles for a clean aesthetic.
-   [x] **Custom Pin Dropping:** Click anywhere on the map to add a new "spot" to your plan.
-   [x] **Data Persistence:** All pins are automatically saved to the browser `localStorage`, so data is preserved between sessions.
-   [x] **Visited vs. Planned Status:** Each pin can be toggled between "Planned" (blue) and "Visited" (green), with corresponding color changes on the map.
-   [ ] **Route Planning:** Select multiple pins to visualize a travel route.
-   [ ] **Notes & Categories:** Add custom notes and tags (e.g., "Food", "Shrine", "Shopping") to each pin.
-   [ ] **PWA Functionality:** Installable on Android devices with basic offline support.
-   [ ] **AI-Powered Suggestions:** (Future Goal) Integrate the Gemini LLM to get travel recommendations.

## 🛠️ Tech Stack

This project is committed to using a completely free and open-source tech stack.

-   **Frontend Framework:** [React](https://reactjs.org/) with [Vite](https://vitejs.dev/) for a fast and modern development experience.
-   **Mapping Library:** [Leaflet.js](https://leafletjs.com/) with [React Leaflet](https://react-leaflet.js.org/) for its simplicity and robustness.
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) for a utility-first, highly customizable design system.
-   **State Management:** [Zustand](https://github.com/pmndrs/zustand) for simple, boilerplate-free global state management.
-   **Local Storage:** Native browser `localStorage` for data persistence, managed via Zustand's `persist` middleware.

## 🚀 Getting Started

To run this project locally on your own machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/chunwei-07/japan-trip-planner.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd japan-trip-planner
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173` (or the port specified in your terminal).
