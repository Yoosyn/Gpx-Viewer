# 🗺️ GPX Analyzer & Alpine Ski Track Viewer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5 / JS](https://img.shields.io/badge/Stack-HTML5%20%7C%20JavaScript%20%7C%20CSS3-blue)](https://developer.mozilla.org/)

**GPX Analyzer** is a web-based interactive tool for visualizing, analyzing, and inspecting GPX track files. It features specialized algorithms for **Alpine Skiing Descent Detection**, interactive map layers (including winter skiing maps), elevation/speed charts, multi-language support (English & Polish), and customizable detection thresholds.

---

## ✨ Features

- ⛷️ **Alpine Skiing Descent Detection**: Automatically identifies individual ski runs, calculates elevation drop, slope gradients, top speeds, and filters out lift rides.
- 🚴 **Cycling & Running Track Analysis**: General GPX track inspection showing total distance, duration, elevation gain/loss, speed profiles, and active time.
- 🗺️ **Interactive Maps**: Toggle between standard OpenStreetMap topography and specialized Winter/Ski layers.
- 📈 **Dynamic Charts**: Interactive elevation and speed graphs powered by Chart.js (with zoom & sync on hover).
- ⚙️ **Customizable Detection Thresholds**: Fine-tune descent detection algorithms directly from the UI (Min. elevation drop, Min. speed, Min. slope).
- 🌐 **Multilingual (i18n)**: Instant switching between English and Polish.
- 📂 **Multi-file Support**: Upload and analyze multiple GPX tracks simultaneously.

---

## 🚀 Live Demo & Getting Started

### 🌐 Online Demo
Access the live web application here:  
👉 **[https://yoosyn.github.io/Gpx-Viewer/](https://yoosyn.github.io/Gpx-Viewer/)**

### 💻 Running Locally

Since GPX Analyzer is a client-side application built with pure HTML, CSS, and Vanilla JavaScript, no build step or node package manager is required.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Yoosyn/Gpx-Viewer.git
   cd Gpx-Viewer
   ```

2. **Open in browser:**
   Simply double-click `index.html` or open it with your preferred local web server (e.g., VS Code *Live Server*).

---

## 🛠️ Built With

- **[Leaflet.js](https://leafletjs.com/)** – Interactive map rendering and custom layers
- **[Chart.js](https://www.chartjs.org/)** – Dynamic elevation and speed visualization
- **[toGeoJSON](https://github.com/mapbox/togeojson)** – Parsing GPX data into GeoJSON format
- **[jQuery](https://jquery.com/)** – DOM interactions & event management

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
