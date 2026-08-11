// ===== LOCALIZATION SYSTEM =====
const userLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
const currentLang = userLang.startsWith('pl') ? 'pl' : 'en';

const translations = {
    pl: {
        page_title: "GPX Analyzer - Profesjonalna Analiza Tras",
        page_desc: "Zaawansowana analiza tras GPX z wizualizacją map, wykresów i statystyk dla narciarstwa, kolarstwa i biegania",
        home_title: "GPX Analyzer",
        home_subtitle: "Profesjonalna analiza tras narciarskich, rowerowych i biegowych",
        btn_load_gpx: "📁 Wczytaj Pliki GPX",
        activity_label: "Wybierz rodzaj aktywności:",
        activity_default: "🚴 Rower / Bieg",
        activity_ski: "⛷️ Narciarstwo (Detekcja Zjazdów)",
        nav_analysis_title: "📊 Analiza GPX",
        nav_home: "🏠 Strona Główna",
        nav_ski_analysis: "⛷️ Analiza Zjazdów",
        nav_add_file: "➕ Dodaj Plik",
        debug_title: "DEBUG INFO",
        debug_no_data: "Brak danych...",
        ski_detected_runs: "⛷️ Wykryte zjazdy:",
        files_title: "Pliki GPX",
        draw_start: "🚩 Rysuj Start",
        draw_finish: "🏁 Rysuj Metę",
        clear_gates: "❌ Usuń Linie",
        speed_label: "Prędkość (km/h)",
        btn_back_to_map: "📊 Powrót do Mapy",
        comparison_title: "Porównanie Prędkości Zjazdów",
        detected_sections: "Wykryte Odcinki",
        detail_title: "📉 Szczegóły Zjazdu",
        btn_back_to_list: "🔙 Wróć do Listy",
        stat_distance: "Dystans",
        stat_drop: "Spadek",
        stat_time: "Czas",
        stat_avg_speed: "Śr. Prędkość",
        stat_max_speed: "Max Prędkość",
        selection_title: "🔍 Zaznaczony Fragment",
        stat_slope: "Nachylenie",
        chart_instructions: "💡 Zaznacz fragment na wykresie, aby zobaczyć szczegóły",
        no_files_loaded: "Brak wczytanych plików",

        // JS dynamic strings
        chart_elevation: "Wysokość",
        chart_speed: "Prędkość",
        chart_duration_sec: "Czas trwania (sekundy)",
        chart_elevation_m: "Wysokość (m)",
        chart_speed_kmh: "Prędkość (km/h)",
        chart_time_prefix: "Czas: ",
        chart_elevation_unit: " m npm",
        chart_total_distance: "Dystans całkowity: ",
        err_xml: "Błąd XML",
        err_no_points: "Nie znaleziono punktów w pliku GPX.",
        err_error: "Błąd: ",
        err_load: "Błąd wczytywania: ",
        debug_xml_points: "Punkty XML: ",
        debug_found_time: "Znaleziono <time>: ",
        debug_yes: "TAK",
        debug_no: "NIE",
        debug_first_point: "Pierwszy punkt: ",
        debug_none: "Brak",
        debug_max_speed: "Max Prędkość: ",
        descent_num: "Zjazd #",
        descent_label: "Zjazd ",
        descent_card_dist: "Dystans:",
        descent_card_time: "Czas:",
        descent_card_avg_speed: "Śr. Prędkość:",
        descent_card_segments: "Śr. prędkość na odcinkach (Q1-Q4):",
        descent_card_section: "Odcinek ",
        chart_avg_speed_label: "Średnia Prędkość (km/h)",
        chart_max_speed_label: "Max Prędkość (km/h)",
        chart_ele_unit_detail: "m n.p.m.",

        stat_start_ele: "Wys. Startu",
        stat_finish_ele: "Wys. Mety",
        stat_start_time: "Czas Startu",
        stat_finish_time: "Czas Mety",
        popup_start_title: "Start Zjazdu #",
        popup_finish_title: "Meta Zjazdu #",
        popup_elevation: "Wysokość: ",
        popup_speed: "Prędkość: ",
        popup_time: "Czas: ",
        popup_coords: "Współrzędne: ",
        card_start: "Start:",
        card_finish: "Meta:",
        marker_start_label: "Start",
        marker_finish_label: "Meta",

        // Settings Panel
        settings_title: "⚙️ Ustawienia Detekcji",
        setting_min_drop: "Min. Spadek:",
        setting_min_speed: "Min. Prędkość:",
        setting_min_slope: "Min. Nachylenie:",
        setting_smooth: "Wygładzanie GPS:",
        setting_merge_pauses: "Łączenie Mikropauz",
        setting_max_pause: "Max Czas Pauzy:",

        // Map Layers
        map_layer_winter: "⛷️ Mapa Zimowa / Topo (Esri)",
        map_layer_opentopo: "🏔️ OpenTopoMap",
        map_layer_carto_dark: "🌙 CARTO Dark",
        map_layer_carto_voyager: "🗺️ CARTO Voyager",
        map_layer_satellite: "🛰️ Satelita (Esri)",
        map_layer_osm: "🌐 OpenStreetMap",
        map_overlay_slopes: "⛷️ Trasy Narciarskie & Wyciągi (Waymarked)",
        map_overlay_pistes: "❄️ Piste'y Narciarskie (OpenSnowMap)"
    },
    en: {
        page_title: "GPX Analyzer - Professional Track Analysis",
        page_desc: "Advanced GPX track analysis with visualization of maps, charts, and statistics for skiing, cycling, and running",
        home_title: "GPX Analyzer",
        home_subtitle: "Professional analysis of ski, bike, and running tracks",
        btn_load_gpx: "📁 Load GPX Files",
        activity_label: "Select activity type:",
        activity_default: "🚴 Bike / Run",
        activity_ski: "⛷️ Skiing (Descent Detection)",
        nav_analysis_title: "📊 GPX Analysis",
        nav_home: "🏠 Home Page",
        nav_ski_analysis: "⛷️ Descent Analysis",
        nav_add_file: "➕ Add File",
        debug_title: "DEBUG INFO",
        debug_no_data: "No data...",
        ski_detected_runs: "⛷️ Detected descents:",
        files_title: "GPX Files",
        draw_start: "🚩 Draw Start",
        draw_finish: "🏁 Draw Finish",
        clear_gates: "❌ Clear Lines",
        speed_label: "Speed (km/h)",
        btn_back_to_map: "📊 Back to Map",
        comparison_title: "Descent Speed Comparison",
        detected_sections: "Detected Sections",
        detail_title: "📉 Descent Details",
        btn_back_to_list: "🔙 Back to List",
        stat_distance: "Distance",
        stat_drop: "Vertical Drop",
        stat_time: "Time",
        stat_avg_speed: "Avg. Speed",
        stat_max_speed: "Max Speed",
        selection_title: "🔍 Selected Section",
        stat_slope: "Slope",
        chart_instructions: "💡 Select a section on the chart to see details",
        no_files_loaded: "No files loaded",

        // JS dynamic strings
        chart_elevation: "Elevation",
        chart_speed: "Speed",
        chart_duration_sec: "Duration (seconds)",
        chart_elevation_m: "Elevation (m)",
        chart_speed_kmh: "Speed (km/h)",
        chart_time_prefix: "Time: ",
        chart_elevation_unit: " m a.s.l.",
        chart_total_distance: "Total distance: ",
        err_xml: "XML Error",
        err_no_points: "No points found in the GPX file.",
        err_error: "Error: ",
        err_load: "Loading error: ",
        debug_xml_points: "XML Points: ",
        debug_found_time: "<time> found: ",
        debug_yes: "YES",
        debug_no: "NO",
        debug_first_point: "First point: ",
        debug_none: "None",
        debug_max_speed: "Max Speed: ",
        descent_num: "Descent #",
        descent_label: "Descent ",
        descent_card_dist: "Distance:",
        descent_card_time: "Time:",
        descent_card_avg_speed: "Avg. Speed:",
        descent_card_segments: "Avg. speed in sections (Q1-Q4):",
        descent_card_section: "Section ",
        chart_avg_speed_label: "Average Speed (km/h)",
        chart_max_speed_label: "Max Speed (km/h)",
        chart_ele_unit_detail: "m a.s.l.",
        stat_start_ele: "Start Ele.",
        stat_finish_ele: "Finish Ele.",
        stat_start_time: "Start Time",
        stat_finish_time: "Finish Time",
        popup_start_title: "Descent Start #",
        popup_finish_title: "Descent Finish #",
        popup_elevation: "Elevation: ",
        popup_speed: "Speed: ",
        popup_time: "Time: ",
        popup_coords: "Coordinates: ",
        card_start: "Start:",
        card_finish: "Finish:",
        marker_start_label: "Start",
        marker_finish_label: "Finish",

        // Settings Panel
        settings_title: "⚙️ Detection Settings",
        setting_min_drop: "Min Vertical Drop:",
        setting_min_speed: "Min Speed:",
        setting_min_slope: "Min Slope:",
        setting_smooth: "GPS Smoothing:",
        setting_merge_pauses: "Merge Micro-pauses",
        setting_max_pause: "Max Pause Time:",

        // Map Layers
        map_layer_winter: "⛷️ Winter / Topo Map (Esri)",
        map_layer_opentopo: "🏔️ OpenTopoMap",
        map_layer_carto_dark: "🌙 CARTO Dark",
        map_layer_carto_voyager: "🗺️ CARTO Voyager",
        map_layer_satellite: "🛰️ Satellite (Esri)",
        map_layer_osm: "🌐 OpenStreetMap",
        map_overlay_slopes: "⛷️ Ski Slopes & Lifts (Waymarked)",
        map_overlay_pistes: "❄️ Ski Pistes (OpenSnowMap)"
    }
};

function t(key) {
    const langDict = translations[currentLang] || translations.en;
    return langDict[key] || key;
}

function applyTranslations() {
    $('html').attr('lang', currentLang);
    $('[data-i18n]').each(function () {
        const key = $(this).attr('data-i18n');
        const text = t(key);
        if (text) {
            $(this).text(text);
        }
    });
    $('[data-i18n-attr]').each(function () {
        const attrPair = $(this).attr('data-i18n-attr');
        const [attrName, key] = attrPair.split(':');
        const text = t(key);
        if (text) {
            $(this).attr(attrName, text);
        }
    });
    document.title = t('page_title');
}

let map;
let chart;
let loadedFiles = [];
let hoverMarker;
let gateState = {
    mode: 'idle', // idle, drawing_start, drawing_finish
    startPoints: [],
    finishPoints: [],
    startLine: null,
    finishLine: null
};

// ===== NAVIGATION =====
function showHomePage() {
    document.getElementById('homePage').classList.remove('hidden');
    document.getElementById('analysisPage').classList.add('hidden');
}

function showAnalysisPage() {
    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('analysisPage').classList.remove('hidden');
    document.getElementById('descentAnalysisPage').classList.add('hidden');
    document.getElementById('descentDetailPage').classList.add('hidden');

    // Initialize map and chart if not done yet
    if (!map) {
        initMap();
        initChart();
    }
}

function showDescentAnalysisPage() {
    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('analysisPage').classList.add('hidden');
    document.getElementById('descentAnalysisPage').classList.remove('hidden');
    document.getElementById('descentDetailPage').classList.add('hidden');

    const activeFile = loadedFiles.find(f => f.active);
    if (activeFile) {
        analyzeSki(activeFile);
    }
}

// ===== VERTICAL LINE PLUGIN FOR CHART =====
const verticalLinePlugin = {
    id: 'verticalLine',
    afterDraw: (chart) => {
        if (!chart.tooltip) return;
        if (!chart.tooltip._active || chart.tooltip._active.length === 0) return;
        if (!chart.scales || !chart.scales.y) return;

        const ctx = chart.ctx;
        ctx.save();

        const activePoint = chart.tooltip._active[0];
        const x = activePoint.element.x;
        const topY = chart.scales.y.top;
        const bottomY = chart.scales.y.bottom;

        ctx.beginPath();
        ctx.moveTo(x, topY);
        ctx.lineTo(x, bottomY);
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#aaa';
        ctx.setLineDash([5, 5]);
        ctx.stroke();
        ctx.restore();

        showPointOnMap(activePoint.index);
    },
    afterUpdate: (chart) => {
        if (!chart.tooltip || !chart.tooltip._active || chart.tooltip._active.length === 0) {
            if (hoverMarker) {
                map.removeLayer(hoverMarker);
                hoverMarker = null;
            }
        }
    }
};

// ===== INITIALIZATION =====
$(document).ready(function () {
    applyTranslations();
    initSkiSettingsUI();
    // Start on home page
    showHomePage();
});

let baseLayersMain = {};
let overlaysMain = {};
let layerControlMain = null;

let baseLayersDetail = {};
let overlaysDetail = {};
let layerControlDetail = null;

function createTileLayers() {
    const baseLayers = {
        [t('map_layer_winter')]: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
            maxZoom: 19,
            attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), swisstopo, MapmyIndia, &copy; OpenStreetMap contributors, and the GIS User Community'
        }),
        [t('map_layer_opentopo')]: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            maxZoom: 17,
            attribution: 'Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap (CC-BY-SA)'
        }),
        [t('map_layer_carto_dark')]: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 20,
            subdomains: 'abcd',
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }),
        [t('map_layer_carto_voyager')]: L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            maxZoom: 20,
            subdomains: 'abcd',
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }),
        [t('map_layer_satellite')]: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            maxZoom: 19,
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }),
        [t('map_layer_osm')]: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap contributors'
        })
    };

    const overlayLayers = {
        [t('map_overlay_slopes')]: L.tileLayer('https://tile.waymarkedtrails.org/slopes/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '&copy; <a href="https://slopes.waymarkedtrails.org">Waymarked Trails</a>'
        }),
        [t('map_overlay_pistes')]: L.tileLayer('https://tiles.opensnowmap.org/pistes/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '&copy; <a href="https://www.opensnowmap.org">OpenSnowMap</a>'
        })
    };

    return { baseLayers, overlayLayers };
}

// ===== MAP FUNCTIONS =====
function initMap() {
    map = L.map('map').setView([52.237, 21.017], 13);

    const { baseLayers, overlayLayers } = createTileLayers();
    baseLayersMain = baseLayers;
    overlaysMain = overlayLayers;

    const activity = $('#activityType').val();
    const isSki = activity === 'ski';

    // Default layer: Winter/Topo if ski, else Voyager/Winter
    const initialBaseKey = isSki ? t('map_layer_winter') : t('map_layer_carto_voyager');
    baseLayersMain[initialBaseKey].addTo(map);

    if (isSki) {
        overlaysMain[t('map_overlay_slopes')].addTo(map);
    }

    layerControlMain = L.control.layers(baseLayersMain, overlaysMain, { position: 'topright' }).addTo(map);

    map.on('click', handleMapClick);
}

function showPointOnMap(idx) {
    const activeFile = loadedFiles.find(f => f.active);
    if (!activeFile || !activeFile.points || !activeFile.points[idx]) return;

    const pt = activeFile.points[idx];
    const latlng = [pt.lat, pt.lng];

    if (!hoverMarker) {
        hoverMarker = L.circleMarker(latlng, {
            radius: 8,
            fillColor: "#ff0000",
            color: "#fff",
            weight: 2,
            opacity: 1,
            fillOpacity: 0.9
        }).addTo(map);
    } else {
        hoverMarker.setLatLng(latlng);
    }
}

function drawTrack(fileObj) {
    let feature = fileObj.geoJSON.features.find(f => f.geometry.type === 'LineString');
    if (!feature) feature = fileObj.geoJSON.features.find(f => f.geometry.type === 'MultiLineString');
    if (!feature) return;

    const layer = L.layerGroup().addTo(map);
    fileObj.layer = layer;

    const step = 1;
    const pts = fileObj.points;
    if (pts.length === 0) return;

    for (let i = 0; i < pts.length - 1; i += step) {
        const nextIdx = Math.min(i + step, pts.length - 1);
        const p1 = pts[i];
        const p2 = pts[nextIdx];

        const avgSpeed = (p1.speed + p2.speed) / 2;
        const color = getColorForSpeed(avgSpeed);

        L.polyline([[p1.lat, p1.lng], [p2.lat, p2.lng]], {
            color: color, weight: 5, opacity: 0.9, lineCap: 'round'
        }).addTo(layer);
    }

    const pStart = pts[0];
    const pEnd = pts[pts.length - 1];
    map.fitBounds([[pStart.lat, pStart.lng], [pEnd.lat, pEnd.lng]], { padding: [50, 50] });
}

// ===== CHART FUNCTIONS =====
function initChart() {
    const ctx = document.getElementById('myChart').getContext('2d');

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    label: t('chart_elevation'),
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    data: [],
                    yAxisID: 'y',
                    pointRadius: 0,
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                },
                {
                    label: t('chart_speed'),
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    borderDash: [5, 5],
                    data: [],
                    yAxisID: 'y1',
                    pointRadius: 0,
                    borderWidth: 3,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            scales: {
                x: {
                    type: 'linear',
                    title: { display: true, text: t('chart_duration_sec'), color: '#94a3b8' },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8' }
                },
                y: {
                    position: 'left',
                    title: { display: true, text: t('chart_elevation_m'), color: '#10b981' },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8' }
                },
                y1: {
                    position: 'right',
                    grid: { drawOnChartArea: false },
                    title: { display: true, text: t('chart_speed_kmh'), color: '#f59e0b' },
                    ticks: { color: '#94a3b8' }
                }
            },
            plugins: {
                legend: {
                    labels: { color: '#f1f5f9', font: { size: 12, weight: '600' } }
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    titleColor: '#f1f5f9',
                    bodyColor: '#f1f5f9',
                    borderColor: '#6366f1',
                    borderWidth: 1,
                    callbacks: {
                        title: function (context) {
                            if (!context || !context.length) return '';
                            const seconds = context[0].parsed.x;
                            const date = new Date(0);
                            date.setSeconds(seconds);
                            return t('chart_time_prefix') + date.toISOString().substr(11, 8);
                        },
                        label: function (context) {
                            let label = context.dataset.label || '';
                            if (label) { label += ': '; }
                            if (context.parsed.y !== null) { label += context.parsed.y.toFixed(1); }
                            if (context.dataset.yAxisID === 'y') label += t('chart_elevation_unit');
                            if (context.dataset.yAxisID === 'y1') label += ' km/h';
                            return label;
                        },
                        afterBody: function (context) {
                            if (!context || !context.length) return '';
                            const idx = context[0].dataIndex;
                            const activeFile = loadedFiles.find(f => f.active);

                            if (activeFile && activeFile.points && activeFile.points[idx]) {
                                const pt = activeFile.points[idx];
                                const dist = (pt.dist / 1000).toFixed(2);
                                return '\n' + t('chart_total_distance') + `${dist} km`;
                            }
                            return '';
                        }
                    }
                },
                zoom: {
                    pan: { enabled: true, mode: 'x' },
                    zoom: { wheel: { enabled: true }, pinch: { enabled: true }, mode: 'x' },
                    onZoomComplete: function ({ chart }) {
                        try {
                            syncMapToChart(chart);
                        } catch (e) { console.error(e); }
                    }
                }
            }
        },
        plugins: [verticalLinePlugin]
    });
}

function updateChart(file) {
    if (!chart) return;

    try {
        chart.data.labels = file.points.map(p => p.duration);
        chart.data.datasets[0].data = file.points.map(p => p.ele);
        chart.data.datasets[1].data = file.points.map(p => p.speed);
        chart.update();
        chart.resetZoom();
    } catch (e) {
        console.error("Błąd aktualizacji wykresu:", e);
    }
}

function syncMapToChart(c) {
    if (!c || !c.scales || !c.scales.x) return;

    const minT = c.scales.x.min;
    const maxT = c.scales.x.max;
    const pts = loadedFiles.find(f => f.active)?.points || [];

    if (pts.length === 0) return;
    const startIdx = pts.findIndex(p => p.duration >= minT);
    const endIdx = pts.findLastIndex(p => p.duration <= maxT);

    if (startIdx !== -1 && endIdx !== -1) {
        // Collect all points in the visible range to find correct bounds
        // Just using start/end points is not enough for loop tracks or winding roads
        const visiblePoints = pts.slice(startIdx, endIdx + 1).map(p => [p.lat, p.lng]);

        if (visiblePoints.length > 0) {
            map.fitBounds(visiblePoints, { padding: [50, 50] });
        }
    }
}

// ===== FILE HANDLING =====
$('#fileInput').change(function (e) {
    const files = e.target.files;
    if (files.length === 0) return;

    // Switch to analysis page immediately to initialize map
    showAnalysisPage();

    Array.from(files).forEach(file => {
        const reader = new FileReader();

        reader.onload = function (event) {
            try {
                const gpxText = event.target.result;
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(gpxText, "text/xml");

                if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
                    throw new Error(t('err_xml'));
                }

                const rawData = parseGPXManual(xmlDoc);

                if (!rawData || rawData.length === 0) {
                    throw new Error(t('err_no_points'));
                }

                const geoJSON = toGeoJSON.gpx(xmlDoc);
                processAndStoreFile(file.name, rawData, geoJSON);

            } catch (err) {
                console.error(err);
                alert(t('err_error') + err.message);
                updateDebug(t('err_load') + err.message);
            }
        };
        reader.readAsText(file);
    });

    $(this).val('');
});

// ===== GPX PARSING =====
function parseGPXManual(xmlDoc) {
    const trkpts = xmlDoc.getElementsByTagName("trkpt");
    const points = [];
    let timeFound = false;

    for (let i = 0; i < trkpts.length; i++) {
        const p = trkpts[i];
        const lat = parseFloat(p.getAttribute("lat"));
        const lon = parseFloat(p.getAttribute("lon"));
        let ele = 0;
        const eleTag = p.getElementsByTagName("ele");
        if (eleTag.length > 0) ele = parseFloat(eleTag[0].textContent);

        let timeStr = null;
        const timeTag = p.getElementsByTagName("time");
        if (timeTag.length > 0) {
            timeStr = timeTag[0].textContent;
            timeFound = true;
        }

        points.push({
            lat: lat,
            lon: lon,
            ele: ele,
            timeStr: timeStr,
            timeObj: timeStr ? new Date(timeStr) : null
        });
    }

    updateDebug(`
        ${t('debug_xml_points')}${points.length}<br>
        ${t('debug_found_time')}${timeFound ? t('debug_yes') : t('debug_no')}<br>
        ${t('debug_first_point')}Lat=${points[0]?.lat?.toFixed(4)}, Time=${points[0]?.timeStr || t('debug_none')}
    `);

    return points;
}

function processAndStoreFile(fileName, rawPoints, geoJSON) {
    let points = [];
    let totalDist = 0;
    let totalSeconds = 0;
    const hasTime = rawPoints[0].timeObj !== null;

    for (let i = 0; i < rawPoints.length; i++) {
        const curr = rawPoints[i];
        let speed = 0;
        let distInc = 0;
        let duration = 0;

        if (i > 0) {
            const prev = rawPoints[i - 1];
            distInc = getDistanceFromLatLonInKm(prev.lat, prev.lon, curr.lat, curr.lon) * 1000;

            if (hasTime && curr.timeObj && prev.timeObj) {
                const timeDiff = (curr.timeObj - prev.timeObj) / 1000;
                duration = timeDiff;
                if (timeDiff > 0) speed = (distInc / timeDiff) * 3.6;
            }
        }

        totalDist += distInc;
        if (i === 0 && hasTime) {
            totalSeconds = 0;
        } else if (hasTime && i > 0) {
            totalSeconds += (curr.timeObj - rawPoints[i - 1].timeObj) / 1000;
        } else {
            totalSeconds = i;
        }

        points.push({
            lat: curr.lat,
            lng: curr.lon,
            ele: curr.ele,
            speed: speed,
            dist: totalDist,
            duration: totalSeconds
        });
    }

    let maxSpeed = 0;
    if (points.length > 0) {
        const speeds = points.map(p => p.speed).filter(s => !isNaN(s));
        if (speeds.length > 0) {
            maxSpeed = Math.max(...speeds).toFixed(1);
        }
    }

    updateDebug($('#debug-content').html() + `<br>${t('debug_max_speed')}${maxSpeed} km/h`);

    const fileObj = {
        id: Date.now() + Math.random(),
        name: fileName,
        points: points,
        geoJSON: geoJSON,
        active: true
    };

    // Deactivate other files
    loadedFiles.forEach(f => f.active = false);

    loadedFiles.push(fileObj);
    renderSidebar();
    drawTrack(fileObj);
    updateChart(fileObj);
    analyzeSki(fileObj);
}

// ===== SKI ANALYSIS =====
// ===== SKI ANALYSIS =====
function analyzeSki(file) {
    const type = $('#activityType').val();

    if (type === 'ski') {
        $('#ski-stats').removeClass('hidden');
        $('#ski-settings-panel').removeClass('hidden');
        if (gateState.startLine && gateState.finishLine) {
            detectRunsByGates(file);
        } else {
            detectSkiRuns(file);
        }
    } else {
        $('#ski-stats').addClass('hidden');
        $('#ski-settings-panel').addClass('hidden');
    }
}

// ===== GATE LOGIC =====
function startDrawing(type) {
    gateState.mode = type === 'start' ? 'drawing_start' : 'drawing_finish';

    // UI Feedback
    $('.btn-control').removeClass('active');
    if (type === 'start') $('#btn-draw-start').addClass('active');
    else $('#btn-draw-finish').addClass('active');

    // Clear existing for this type
    if (type === 'start') {
        gateState.startPoints = [];
        if (gateState.startLine) map.removeLayer(gateState.startLine);
        gateState.startLine = null;
    } else {
        gateState.finishPoints = [];
        if (gateState.finishLine) map.removeLayer(gateState.finishLine);
        gateState.finishLine = null;
    }
}

function clearGates() {
    if (gateState.startLine) map.removeLayer(gateState.startLine);
    if (gateState.finishLine) map.removeLayer(gateState.finishLine);

    gateState.startLine = null;
    gateState.finishLine = null;
    gateState.startPoints = [];
    gateState.finishPoints = [];
    gateState.mode = 'idle';

    $('#btn-clear-gates').addClass('hidden');
    $('.btn-control').removeClass('active');

    // Re-run auto detection
    const activeFile = loadedFiles.find(f => f.active);
    if (activeFile) analyzeSki(activeFile);
}

function handleMapClick(e) {
    if (gateState.mode === 'idle') return;

    const latlng = e.latlng;
    const points = gateState.mode === 'drawing_start' ? gateState.startPoints : gateState.finishPoints;

    points.push(latlng);

    if (points.length === 2) {
        // Line complete
        const color = gateState.mode === 'drawing_start' ? '#10b981' : '#ef4444'; // Green / Red
        const line = L.polyline(points, { color: color, weight: 5 }).addTo(map);

        if (gateState.mode === 'drawing_start') gateState.startLine = line;
        else gateState.finishLine = line;

        gateState.mode = 'idle';
        $('.btn-control').removeClass('active');

        // Check if both exist
        if (gateState.startLine && gateState.finishLine) {
            $('#btn-clear-gates').removeClass('hidden');
            const activeFile = loadedFiles.find(f => f.active);
            if (activeFile) detectRunsByGates(activeFile);
        } else if (gateState.startLine || gateState.finishLine) {
            $('#btn-clear-gates').removeClass('hidden');
        }
    }
}

function detectRunsByGates(file) {
    if (!gateState.startLine || !gateState.finishLine) return;

    const startGeo = gateState.startLine.getLatLngs();
    const finishGeo = gateState.finishLine.getLatLngs();

    const pts = file.points;
    const runs = [];

    let inRun = false;
    let runStartIndex = -1;

    // Only detect if crossing start line then crossing finish line
    for (let i = 1; i < pts.length; i++) {
        const p1 = pts[i - 1];
        const p2 = pts[i];

        // Check Start Intersection
        if (!inRun && intersects(p1, p2, startGeo[0], startGeo[1])) {
            inRun = true;
            runStartIndex = i;
        }

        // Check Finish Intersection
        if (inRun && intersects(p1, p2, finishGeo[0], finishGeo[1])) {
            // Found a run
            checkAndAddRun(pts, runStartIndex, i, runs);
            inRun = false;
        }
    }

    detectedRuns = runs;
    $('#run-count').text(runs.length);
    renderRunMarkers(runs);

    if (!document.getElementById('descentAnalysisPage').classList.contains('hidden')) {
        renderDescentAnalysis(runs);
    }
}

// Line Segments Intersection
function intersects(p1, p2, l1, l2) {
    const a = { x: p1.lng, y: p1.lat };
    const b = { x: p2.lng, y: p2.lat };
    const c = { x: l1.lng, y: l1.lat };
    const d = { x: l2.lng, y: l2.lat };

    const det = (b.x - a.x) * (d.y - c.y) - (d.x - c.x) * (b.y - a.y);
    if (det === 0) return false;

    const lambda = ((d.y - c.y) * (d.x - a.x) + (c.x - d.x) * (d.y - a.y)) / det;
    const gamma = ((a.y - b.y) * (d.x - a.x) + (b.x - a.x) * (d.y - a.y)) / det;

    return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
}

let detectedRuns = [];
let runMarkersGroup = null;
let detailMarkersGroup = null;

function formatPointTime(pt) {
    if (!pt) return '-';
    if (pt.timeStr) {
        try {
            const d = new Date(pt.timeStr);
            if (!isNaN(d.getTime())) {
                return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            }
        } catch (e) {}
    }
    return formatTime(pt.duration);
}

function renderRunMarkers(runs) {
    if (!map) return;
    if (!runMarkersGroup) {
        runMarkersGroup = L.layerGroup().addTo(map);
    } else {
        runMarkersGroup.clearLayers();
    }

    runs.forEach(run => {
        const startPt = run.startPoint;
        const finishPt = run.finishPoint;
        if (!startPt || !finishPt) return;

        const startIcon = L.divIcon({
            className: 'custom-gate-marker marker-start',
            html: `🚩 ${t('marker_start_label')} #${run.id}`
        });

        const finishIcon = L.divIcon({
            className: 'custom-gate-marker marker-finish',
            html: `🏁 ${t('marker_finish_label')} #${run.id}`
        });

        const startPopupContent = `
            <div class="gate-popup-content">
                <h4 style="color: #10b981;">🚩 ${t('popup_start_title')}${run.id}</h4>
                <div><strong>${t('popup_elevation')}</strong>${run.startEle.toFixed(0)} ${t('chart_ele_unit_detail')}</div>
                <div><strong>${t('popup_time')}</strong>${run.startTimeFormatted}</div>
                <div><strong>${t('popup_speed')}</strong>${startPt.speed.toFixed(1)} km/h</div>
                <div><strong>${t('popup_coords')}</strong>${startPt.lat.toFixed(4)}, ${startPt.lng.toFixed(4)}</div>
            </div>
        `;

        const finishPopupContent = `
            <div class="gate-popup-content">
                <h4 style="color: #ef4444;">🏁 ${t('popup_finish_title')}${run.id}</h4>
                <div><strong>${t('popup_elevation')}</strong>${run.finishEle.toFixed(0)} ${t('chart_ele_unit_detail')}</div>
                <div><strong>${t('popup_time')}</strong>${run.finishTimeFormatted}</div>
                <div><strong>${t('popup_speed')}</strong>${finishPt.speed.toFixed(1)} km/h</div>
                <div><strong>${t('popup_coords')}</strong>${finishPt.lat.toFixed(4)}, ${finishPt.lng.toFixed(4)}</div>
            </div>
        `;

        const startMarker = L.marker([startPt.lat, startPt.lng], { icon: startIcon })
            .bindPopup(startPopupContent)
            .addTo(runMarkersGroup);

        const finishMarker = L.marker([finishPt.lat, finishPt.lng], { icon: finishIcon })
            .bindPopup(finishPopupContent)
            .addTo(runMarkersGroup);

        run.startMarker = startMarker;
        run.finishMarker = finishMarker;
    });
}

// ===== SKI SETTINGS & DETECTION ALGORITHM =====
let skiSettings = {
    minDrop: 20,       // meters
    minSpeed: 10,      // km/h
    minSlope: 3,       // %
    smoothWindow: 7,   // odd number of points
    mergePauses: true, // boolean
    maxPauseSec: 30    // seconds
};

function initSkiSettingsUI() {
    $('#slider-min-drop').on('input', function () {
        const val = parseInt($(this).val(), 10);
        skiSettings.minDrop = val;
        $('#val-min-drop').text(val + ' m');
        triggerSkiReanalysis();
    });

    $('#slider-min-speed').on('input', function () {
        const val = parseInt($(this).val(), 10);
        skiSettings.minSpeed = val;
        $('#val-min-speed').text(val + ' km/h');
        triggerSkiReanalysis();
    });

    $('#slider-min-slope').on('input', function () {
        const val = parseInt($(this).val(), 10);
        skiSettings.minSlope = val;
        $('#val-min-slope').text(val + ' %');
        triggerSkiReanalysis();
    });

    $('#slider-smooth').on('input', function () {
        const val = parseInt($(this).val(), 10);
        skiSettings.smoothWindow = val;
        $('#val-smooth').text(val + ' pkt');
        triggerSkiReanalysis();
    });

    $('#chk-merge-pauses').on('change', function () {
        const isChecked = $(this).is(':checked');
        skiSettings.mergePauses = isChecked;
        if (isChecked) $('#container-max-pause').removeClass('hidden');
        else $('#container-max-pause').addClass('hidden');
        triggerSkiReanalysis();
    });

    $('#slider-max-pause').on('input', function () {
        const val = parseInt($(this).val(), 10);
        skiSettings.maxPauseSec = val;
        $('#val-max-pause').text(val + ' s');
        triggerSkiReanalysis();
    });
}

function triggerSkiReanalysis() {
    const activeFile = loadedFiles.find(f => f.active);
    if (activeFile) analyzeSki(activeFile);
}

function resetSkiSettings() {
    skiSettings = {
        minDrop: 20,
        minSpeed: 10,
        minSlope: 3,
        smoothWindow: 7,
        mergePauses: true,
        maxPauseSec: 30
    };
    $('#slider-min-drop').val(20);
    $('#val-min-drop').text('20 m');

    $('#slider-min-speed').val(10);
    $('#val-min-speed').text('10 km/h');

    $('#slider-min-slope').val(3);
    $('#val-min-slope').text('3 %');

    $('#slider-smooth').val(7);
    $('#val-smooth').text('7 pkt');

    $('#chk-merge-pauses').prop('checked', true);
    $('#container-max-pause').removeClass('hidden');

    $('#slider-max-pause').val(30);
    $('#val-max-pause').text('30 s');

    triggerSkiReanalysis();
}

function detectSkiRuns(file) {
    const pts = file.points;
    if (!pts || pts.length < 5) return;

    // 1. Moving Average Smoothing over configurable window size
    const w = Math.max(3, skiSettings.smoothWindow | 1); // ensure odd window size
    const halfW = Math.floor(w / 2);

    const smoothedEle = pts.map((p, i) => {
        let sum = 0;
        let count = 0;
        for (let j = Math.max(0, i - halfW); j <= Math.min(pts.length - 1, i + halfW); j++) {
            sum += pts[j].ele;
            count++;
        }
        return sum / count;
    });

    const smoothedSpeed = pts.map((p, i) => {
        let sum = 0;
        let count = 0;
        for (let j = Math.max(0, i - halfW); j <= Math.min(pts.length - 1, i + halfW); j++) {
            sum += pts[j].speed;
            count++;
        }
        return sum / count;
    });

    const rawCandidates = [];
    let isDescending = false;
    let peakIdx = 0;
    let valleyIdx = 0;

    for (let i = 1; i < pts.length; i++) {
        const eleDiff = smoothedEle[i - 1] - smoothedEle[i]; // positive = going down

        if (!isDescending) {
            // Trigger descent start if elevation drops and smoothed speed >= minSpeed * 0.4
            if (eleDiff > 0.1 && smoothedSpeed[i] >= Math.max(3, skiSettings.minSpeed * 0.4)) {
                let localPeak = i - 1;
                for (let j = i - 1; j >= Math.max(0, i - 20); j--) {
                    if (pts[j].ele >= pts[localPeak].ele) {
                        localPeak = j;
                    }
                }
                peakIdx = localPeak;
                isDescending = true;
                valleyIdx = i;
            }
        } else {
            if (smoothedEle[i] < smoothedEle[valleyIdx]) {
                valleyIdx = i;
            }

            const ascFromValley = pts[i].ele - pts[valleyIdx].ele;
            let ascCount = 0;
            for (let k = i; k > Math.max(valleyIdx, i - 6); k--) {
                if (pts[k].ele > pts[k - 1].ele) ascCount++;
            }

            // Termination: elevation gain > 7m (lift), continuous ascent, or end of track
            if (ascFromValley > 7 || ascCount >= 5 || i === pts.length - 1) {
                if (valleyIdx > peakIdx) {
                    rawCandidates.push({ startIdx: peakIdx, endIdx: valleyIdx });
                }
                isDescending = false;
                i = valleyIdx;
            }
        }
    }

    // 2. Refine candidate start/end points
    let processedSegments = [];
    rawCandidates.forEach(cand => {
        const seg = pts.slice(cand.startIdx, cand.endIdx + 1);
        if (seg.length < 2) return;

        // Refine peak start
        let refinedStart = 0;
        let maxEle = seg[0].ele;
        for (let i = 0; i < Math.min(20, seg.length); i++) {
            if (seg[i].ele >= maxEle) {
                maxEle = seg[i].ele;
                refinedStart = i;
            }
        }

        // Refine valley end
        let refinedEnd = seg.length - 1;
        let minEle = seg[seg.length - 1].ele;
        for (let i = seg.length - 1; i >= Math.max(0, seg.length - 20); i--) {
            if (seg[i].ele <= minEle) {
                minEle = seg[i].ele;
                refinedEnd = i;
            }
        }

        const absStart = cand.startIdx + refinedStart;
        const absEnd = cand.startIdx + refinedEnd;

        if (absEnd > absStart) {
            processedSegments.push({ startIdx: absStart, endIdx: absEnd });
        }
    });

    // 3. Merge segments separated by micro-pauses (if enabled)
    if (skiSettings.mergePauses && processedSegments.length > 1) {
        const merged = [];
        let curr = processedSegments[0];

        for (let i = 1; i < processedSegments.length; i++) {
            const next = processedSegments[i];
            const pauseSec = pts[next.startIdx].duration - pts[curr.endIdx].duration;
            const eleGain = pts[next.startIdx].ele - pts[curr.endIdx].ele;

            // Merge if pause duration <= maxPauseSec AND no significant ascent (not taking a lift: eleGain <= 6m)
            if (pauseSec <= skiSettings.maxPauseSec && eleGain <= 6) {
                curr = { startIdx: curr.startIdx, endIdx: next.endIdx };
            } else {
                merged.push(curr);
                curr = next;
            }
        }
        merged.push(curr);
        processedSegments = merged;
    }

    // 4. Validate segments against user criteria (minDrop, minSpeed, minSlope)
    const runs = [];
    processedSegments.forEach(seg => {
        const finalSegment = pts.slice(seg.startIdx, seg.endIdx + 1);
        if (finalSegment.length < 2) return;

        const startPoint = finalSegment[0];
        const finishPoint = finalSegment[finalSegment.length - 1];

        const drop = startPoint.ele - finishPoint.ele;
        const duration = finishPoint.duration - startPoint.duration;
        const dist = finishPoint.dist - startPoint.dist;

        if (dist <= 0 || duration <= 0) return;

        const avgSpeed = finalSegment.reduce((acc, p) => acc + p.speed, 0) / finalSegment.length;
        const maxSpeed = Math.max(...finalSegment.map(p => p.speed));
        const slopePercent = (drop / dist) * 100;

        // Apply criteria
        if (drop >= skiSettings.minDrop &&
            avgSpeed >= skiSettings.minSpeed &&
            slopePercent >= skiSettings.minSlope &&
            duration >= 10 &&
            dist >= 50) {

            runs.push({
                id: runs.length + 1,
                points: finalSegment,
                startPoint: startPoint,
                finishPoint: finishPoint,
                startEle: startPoint.ele,
                finishEle: finishPoint.ele,
                startTimeFormatted: formatPointTime(startPoint),
                finishTimeFormatted: formatPointTime(finishPoint),
                drop: drop,
                duration: duration,
                maxSpeed: maxSpeed,
                avgSpeed: avgSpeed,
                dist: dist,
                startTime: startPoint.duration
            });
        }
    });

    detectedRuns = runs;
    $('#run-count').text(runs.length);
    renderRunMarkers(runs);

    if (!document.getElementById('descentAnalysisPage').classList.contains('hidden')) {
        renderDescentAnalysis(runs);
    }
}

function checkAndAddRun(allPoints, startIdx, endIdx, runsCollection) {
    if (endIdx <= startIdx) return;
    const segment = allPoints.slice(startIdx, endIdx + 1);
    if (segment.length < 2) return;

    let refinedStart = 0;
    let maxEle = segment[0].ele;
    for (let i = 0; i < Math.min(15, segment.length); i++) {
        if (segment[i].ele >= maxEle) {
            maxEle = segment[i].ele;
            refinedStart = i;
        }
    }

    let refinedEnd = segment.length - 1;
    let minEle = segment[segment.length - 1].ele;
    for (let i = segment.length - 1; i >= Math.max(0, segment.length - 15); i--) {
        if (segment[i].ele <= minEle) {
            minEle = segment[i].ele;
            refinedEnd = i;
        }
    }

    const finalSegment = segment.slice(refinedStart, refinedEnd + 1);
    if (finalSegment.length < 2) return;

    const startPoint = finalSegment[0];
    const finishPoint = finalSegment[finalSegment.length - 1];

    const drop = startPoint.ele - finishPoint.ele;
    const duration = finishPoint.duration - startPoint.duration;
    const dist = finishPoint.dist - startPoint.dist;

    if (drop >= Math.min(10, skiSettings.minDrop) && duration >= 5 && dist >= 30) {
        const maxSpeed = Math.max(...finalSegment.map(p => p.speed));
        const avgSpeed = finalSegment.reduce((acc, p) => acc + p.speed, 0) / finalSegment.length;

        runsCollection.push({
            id: runsCollection.length + 1,
            points: finalSegment,
            startPoint: startPoint,
            finishPoint: finishPoint,
            startEle: startPoint.ele,
            finishEle: finishPoint.ele,
            startTimeFormatted: formatPointTime(startPoint),
            finishTimeFormatted: formatPointTime(finishPoint),
            drop: drop,
            duration: duration,
            maxSpeed: maxSpeed,
            avgSpeed: avgSpeed,
            dist: dist,
            startTime: startPoint.duration
        });
    }
}

let descentChart;

function renderDescentAnalysis(runs) {
    const list = document.getElementById('descents-list');
    list.innerHTML = '';

    if (runs.length === 0) return;

    // Calculate Global Min/Max Avg Speed for Color Grading
    const avgSpeeds = runs.map(r => r.avgSpeed);
    const minSpeed = Math.min(...avgSpeeds);
    const maxSpeed = Math.max(...avgSpeeds);

    runs.forEach(run => {
        const segmentStats = calculateRunSegments(run);
        const color = getHeatColor(run.avgSpeed, minSpeed, maxSpeed);
        run.color = color;

        const div = document.createElement('div');
        div.className = 'descent-card';
        div.style.borderLeft = `5px solid ${color}`;

        div.innerHTML = `
            <h4 style="color: ${color}">${t('descent_num')}${run.id}</h4>
            <div class="gate-badge-row">
                <div class="gate-badge start">🚩 ${t('card_start')} <strong>${run.startEle.toFixed(0)}m</strong> (${run.startTimeFormatted})</div>
                <div class="gate-badge finish">🏁 ${t('card_finish')} <strong>${run.finishEle.toFixed(0)}m</strong> (${run.finishTimeFormatted})</div>
            </div>
            <div class="stats-row">
                <span>${t('descent_card_dist')}</span>
                <span class="value">${(run.dist / 1000).toFixed(2)} km (${run.drop.toFixed(0)}m ${t('stat_drop').toLowerCase()})</span>
            </div>
            <div class="stats-row">
                <span>${t('descent_card_time')}</span>
                <span class="value">${formatTime(run.duration)}</span>
            </div>
            <div class="stats-row">
                <span>${t('descent_card_avg_speed')}</span>
                <span class="value">${run.avgSpeed.toFixed(1)} km/h (max ${run.maxSpeed.toFixed(1)})</span>
            </div>
            
            <div class="segments-container">
                 <small>${t('descent_card_segments')}</small>
                 <div class="segments-row">
                    ${segmentStats.map(s => `
                        <div class="segment-box" title="${t('descent_card_section')}${s.index + 1}">
                            ${s.speed.toFixed(0)}
                        </div>
                    `).join('')}
                 </div>
            </div>
        `;
        div.onclick = () => showDescentDetail(run.id);
        div.onmouseenter = () => {
            if (run.startMarker) run.startMarker.openPopup();
        };
        div.style.cursor = 'pointer';
        list.appendChild(div);
    });

    renderDescentChart(runs);
}

function calculateRunSegments(run) {
    // Divide run into 4 equal distance parts
    const totalDist = run.dist;
    const segmentLen = totalDist / 4;
    const segments = [];

    // Normalize distances relative to run start
    const startDist = run.points[0].dist;

    run.points.forEach(p => {
        const relativeDist = p.dist - startDist;
        const segmentIdx = Math.min(Math.floor(relativeDist / segmentLen), 3);

        if (segments[segmentIdx] === undefined) {
            segments[segmentIdx] = { sum: 0, count: 0 };
        }
        segments[segmentIdx].sum += p.speed;
        segments[segmentIdx].count++;
    });

    return segments.map((s, i) => ({
        index: i,
        speed: s && s.count > 0 ? s.sum / s.count : 0
    }));
}

function getHeatColor(value, min, max) {
    if (min === max) return 'rgb(34, 197, 94)'; // Default to green if all same speed

    const ratio = (value - min) / (max - min);

    // Green -> Blue -> Red -> Maroon
    const stops = [
        { r: 34, g: 197, b: 94 },   // Green
        { r: 59, g: 130, b: 246 },  // Blue
        { r: 239, g: 68, b: 68 },   // Red
        { r: 127, g: 29, b: 29 }    // Maroon
    ];

    if (ratio <= 0) return `rgb(${stops[0].r}, ${stops[0].g}, ${stops[0].b})`;
    if (ratio >= 1) return `rgb(${stops[stops.length - 1].r}, ${stops[stops.length - 1].g}, ${stops[stops.length - 1].b})`;

    const scaledRatio = ratio * (stops.length - 1);
    const i = Math.floor(scaledRatio);
    const f = scaledRatio - i;

    const s1 = stops[i];
    const s2 = stops[i + 1];

    const r = Math.round(s1.r + (s2.r - s1.r) * f);
    const g = Math.round(s1.g + (s2.g - s1.g) * f);
    const b = Math.round(s1.b + (s2.b - s1.b) * f);

    return `rgb(${r}, ${g}, ${b})`;
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
}

function renderDescentChart(runs) {
    if (descentChart) descentChart.destroy();

    const ctx = document.getElementById('descentChart').getContext('2d');

    // Sort by ID to keep order
    runs.sort((a, b) => a.id - b.id);

    const labels = runs.map(r => `${t('descent_label')}${r.id}`);
    const avgSpeeds = runs.map(r => r.avgSpeed);
    const maxSpeeds = runs.map(r => r.maxSpeed);
    const backgroundColors = runs.map(r => r.color);

    descentChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: t('chart_avg_speed_label'),
                    data: avgSpeeds,
                    backgroundColor: backgroundColors,
                    borderRadius: 6,
                },
                {
                    label: t('chart_max_speed_label'),
                    data: maxSpeeds,
                    type: 'line',
                    borderColor: '#f59e0b',
                    borderWidth: 2,
                    pointRadius: 4,
                    pointBackgroundColor: '#fff'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: t('chart_speed_kmh'), color: '#94a3b8' },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' }
                },
                x: {
                    ticks: { color: '#94a3b8' },
                    grid: { display: false }
                }
            },
            plugins: {
                legend: { labels: { color: '#f1f5f9' } }
            },
            onClick: (e, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    const runId = runs[index].id;
                    showDescentDetail(runId);
                }
            }
        }
    });
}

// ===== DESCENT DETAIL LOGIC =====
let detailMap;
let detailChart;
let detailLayer;
let selectionLayer;
let currentRun = null;

function showDescentDetail(runId) {
    const run = detectedRuns.find(r => r.id === runId);
    if (!run) return;
    currentRun = run;

    // Switch View
    document.getElementById('descentAnalysisPage').classList.add('hidden');
    document.getElementById('descentDetailPage').classList.remove('hidden');

    // Update Basic & Gate Stats
    $('#detail-dist').text((run.dist / 1000).toFixed(2) + ' km');
    $('#detail-drop').text(run.drop.toFixed(0) + ' m');
    $('#detail-time').text(formatTime(run.duration));
    $('#detail-speed').text(run.avgSpeed.toFixed(1) + ' km/h');
    $('#detail-max-speed').text(run.maxSpeed.toFixed(1) + ' km/h');
    $('#detail-start-ele').text(run.startEle ? run.startEle.toFixed(0) + ' m' : '-');
    $('#detail-finish-ele').text(run.finishEle ? run.finishEle.toFixed(0) + ' m' : '-');
    $('#detail-start-time').text(run.startTimeFormatted || '-');
    $('#detail-finish-time').text(run.finishTimeFormatted || '-');

    // Hide Selection Stats
    $('#selection-stats').addClass('hidden');

    // Init Logic
    setTimeout(() => {
        initDetailMap(run);
        renderDetailChart(run);
    }, 100);
}

function initDetailMap(run) {
    if (!detailMap) {
        detailMap = L.map('descentMap');
        const { baseLayers, overlayLayers } = createTileLayers();
        baseLayersDetail = baseLayers;
        overlaysDetail = overlayLayers;

        baseLayersDetail[t('map_layer_winter')].addTo(detailMap);
        overlaysDetail[t('map_overlay_slopes')].addTo(detailMap);

        layerControlDetail = L.control.layers(baseLayersDetail, overlaysDetail, { position: 'topright' }).addTo(detailMap);
    }

    if (!detailMarkersGroup) {
        detailMarkersGroup = L.layerGroup().addTo(detailMap);
    } else {
        detailMarkersGroup.clearLayers();
    }

    // Clear previous layers
    if (detailLayer) detailMap.removeLayer(detailLayer);
    if (selectionLayer) detailMap.removeLayer(selectionLayer);

    const points = run.points.map(p => [p.lat, p.lng]);
    detailLayer = L.polyline(points, {
        color: '#6366f1',
        weight: 6,
        opacity: 0.8
    }).addTo(detailMap);

    // Add Start and Finish markers on detail map
    if (run.startPoint && run.finishPoint) {
        const startIcon = L.divIcon({
            className: 'custom-gate-marker marker-start',
            html: `🚩 ${t('marker_start_label')} #${run.id}`
        });

        const finishIcon = L.divIcon({
            className: 'custom-gate-marker marker-finish',
            html: `🏁 ${t('marker_finish_label')} #${run.id}`
        });

        const startPopupContent = `
            <div class="gate-popup-content">
                <h4 style="color: #10b981;">🚩 ${t('popup_start_title')}${run.id}</h4>
                <div><strong>${t('popup_elevation')}</strong>${run.startEle.toFixed(0)} ${t('chart_ele_unit_detail')}</div>
                <div><strong>${t('popup_time')}</strong>${run.startTimeFormatted}</div>
                <div><strong>${t('popup_speed')}</strong>${run.startPoint.speed.toFixed(1)} km/h</div>
            </div>
        `;

        const finishPopupContent = `
            <div class="gate-popup-content">
                <h4 style="color: #ef4444;">🏁 ${t('popup_finish_title')}${run.id}</h4>
                <div><strong>${t('popup_elevation')}</strong>${run.finishEle.toFixed(0)} ${t('chart_ele_unit_detail')}</div>
                <div><strong>${t('popup_time')}</strong>${run.finishTimeFormatted}</div>
                <div><strong>${t('popup_speed')}</strong>${run.finishPoint.speed.toFixed(1)} km/h</div>
            </div>
        `;

        L.marker([run.startPoint.lat, run.startPoint.lng], { icon: startIcon }).bindPopup(startPopupContent).addTo(detailMarkersGroup);
        L.marker([run.finishPoint.lat, run.finishPoint.lng], { icon: finishIcon }).bindPopup(finishPopupContent).addTo(detailMarkersGroup);
    }

    detailMap.fitBounds(detailLayer.getBounds(), { padding: [40, 40] });
}

// Chart Selection Plugin
const selectionPlugin = {
    id: 'selectionPlugin',
    afterInit: (chart) => {
        chart.selection = {
            drag: false,
            startX: null,
            endX: null
        };
    },
    afterEvent: (chart, args) => {
        const { event } = args;
        const { selection } = chart;

        // Only react to mouse events on chart area
        if (!chart.chartArea) return;

        if (event.type === 'mousedown') {
            selection.drag = true;
            selection.startX = event.x;
            selection.endX = event.x; // Init endX
        } else if (event.type === 'mousemove' && selection.drag) {
            selection.endX = event.x;
            chart.draw(); // Trigger redraw to show rectangle
        } else if (event.type === 'mouseup' && selection.drag) {
            selection.drag = false;
            // Process Selection
            processSelection(chart, selection.startX, selection.endX);
            selection.startX = null;
            selection.endX = null;
            chart.draw(); // Clear rectangle
        }
    },
    afterDraw: (chart) => {
        const { ctx, chartArea, selection } = chart;

        if (selection && selection.drag && selection.startX !== null && selection.endX !== null) {
            const x1 = Math.min(selection.startX, selection.endX);
            const x2 = Math.max(selection.startX, selection.endX);
            const width = x2 - x1;

            ctx.save();
            ctx.fillStyle = 'rgba(99, 102, 241, 0.3)';
            ctx.fillRect(x1, chartArea.top, width, chartArea.height);
            ctx.strokeStyle = '#6366f1';
            ctx.lineWidth = 1;
            ctx.strokeRect(x1, chartArea.top, width, chartArea.height);
            ctx.restore();
        }
    }
};

function renderDetailChart(run) {
    if (detailChart) detailChart.destroy();

    const ctx = document.getElementById('descentDetailChart').getContext('2d');

    // Create normalized data for easy mapping
    const labels = run.points.map(p => p.duration); // or distance
    const elevData = run.points.map(p => p.ele);
    const speedData = run.points.map(p => p.speed);

    detailChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels, // x-axis as seconds from run start
            datasets: [
                {
                    label: t('chart_elevation_m'),
                    data: elevData,
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    yAxisID: 'y',
                    pointRadius: 0,
                    borderWidth: 2,
                    fill: true
                },
                {
                    label: t('chart_speed_kmh'),
                    data: speedData,
                    borderColor: '#f59e0b',
                    borderDash: [5, 5],
                    yAxisID: 'y1',
                    pointRadius: 0,
                    borderWidth: 2,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            scales: {
                x: {
                    type: 'linear',
                    display: false // Hide x axis labels for cleaner look? or show relative time
                },
                y: {
                    position: 'left',
                    title: { display: true, text: t('chart_ele_unit_detail'), color: '#10b981' },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' }
                },
                y1: {
                    position: 'right',
                    title: { display: true, text: 'km/h', color: '#f59e0b' },
                    grid: { display: false }
                }
            },
            plugins: {
                legend: { labels: { color: '#f1f5f9' } },
                tooltip: {
                    enabled: true, // Helper tooltip
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                }
            }
        },
        plugins: [selectionPlugin]
    });
}

function processSelection(chart, startX, endX) {
    if (Math.abs(startX - endX) < 10) return; // Too small click

    const minX = Math.min(startX, endX);
    const maxX = Math.max(startX, endX);

    const { scales } = chart;
    const xScale = scales.x;

    // Convert pixels to value
    const val1 = xScale.getValueForPixel(minX);
    const val2 = xScale.getValueForPixel(maxX);

    // Filter points in range
    // Since points are sequential in array and x matches time/indices broadly:
    // Actually our labels are `duration` (seconds).
    // We can filter `currentRun.points` by duration.

    const pts = currentRun.points;
    const selectedPoints = pts.filter(p => p.duration >= val1 && p.duration <= val2);

    if (selectedPoints.length < 2) return;

    // Calc Stats
    const startP = selectedPoints[0];
    const endP = selectedPoints[selectedPoints.length - 1];

    const drop = Math.max(0, startP.ele - endP.ele);
    const dist = endP.dist - startP.dist; // meters
    const slope = dist > 0 ? (drop / dist) * 100 : 0;
    const avgSpeed = selectedPoints.reduce((a, b) => a + b.speed, 0) / selectedPoints.length;

    // Update UI
    $('#sel-drop').text(drop.toFixed(1) + ' m');
    $('#sel-dist').text(dist.toFixed(0) + ' m');
    $('#sel-slope').text(slope.toFixed(1) + ' %');
    $('#sel-speed').text(avgSpeed.toFixed(1) + ' km/h');
    $('#selection-stats').removeClass('hidden');

    // Highlight on map
    if (selectionLayer) detailMap.removeLayer(selectionLayer);

    const latlngs = selectedPoints.map(p => [p.lat, p.lng]);
    selectionLayer = L.polyline(latlngs, {
        color: '#f59e0b', // Accent color
        weight: 8,
        opacity: 1
    }).addTo(detailMap); // Add to detailMap not main map
}


// ===== UI FUNCTIONS =====
function renderSidebar() {
    const list = $('#file-list');
    list.empty();

    if (loadedFiles.length === 0) {
        list.append(`<div style="color: #94a3b8; font-size: 0.8rem; padding: 1rem;">${t('no_files_loaded')}</div>`);
        return;
    }

    loadedFiles.forEach(f => {
        const div = $('<div>')
            .addClass('file-item-compact' + (f.active ? ' active' : ''))
            .text(f.name)
            .click(() => {
                loadedFiles.forEach(x => x.active = false);
                f.active = true;
                renderSidebar();
                updateChart(f);
                analyzeSki(f);

                // Show the track on map
                if (f.layer) {
                    map.fitBounds(f.layer.getBounds(), { padding: [50, 50] });
                }
            });
        list.append(div);
    });
}

function updateDebug(msg) {
    $('#debug-content').html(msg);
}

// ===== UTILITY FUNCTIONS =====
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function getColorForSpeed(speed) {
    const stops = [
        { speed: 0, r: 0, g: 0, b: 255 },
        { speed: 15, r: 0, g: 255, b: 0 },
        { speed: 30, r: 255, g: 255, b: 0 },
        { speed: 50, r: 255, g: 0, b: 0 },
        { speed: 80, r: 128, g: 0, b: 0 }
    ];

    if (speed <= stops[0].speed) return `rgb(${stops[0].r},${stops[0].g},${stops[0].b})`;
    if (speed >= stops[stops.length - 1].speed) {
        return `rgb(${stops[stops.length - 1].r},${stops[stops.length - 1].g},${stops[stops.length - 1].b})`;
    }

    for (let i = 0; i < stops.length - 1; i++) {
        const s1 = stops[i];
        const s2 = stops[i + 1];
        if (speed >= s1.speed && speed <= s2.speed) {
            const ratio = (speed - s1.speed) / (s2.speed - s1.speed);
            const r = Math.round(s1.r + ratio * (s2.r - s1.r));
            const g = Math.round(s1.g + ratio * (s2.g - s1.g));
            const b = Math.round(s1.b + ratio * (s2.b - s1.b));
            return `rgb(${r},${g},${b})`;
        }
    }
    return 'rgb(0,0,255)';
}

function updateMapThemeForActivity() {
    const activity = $('#activityType').val();
    if (activity === 'ski') {
        if (map && baseLayersMain[t('map_layer_winter')]) {
            Object.values(baseLayersMain).forEach(l => {
                if (map.hasLayer(l)) map.removeLayer(l);
            });
            baseLayersMain[t('map_layer_winter')].addTo(map);
            if (overlaysMain[t('map_overlay_slopes')] && !map.hasLayer(overlaysMain[t('map_overlay_slopes')])) {
                overlaysMain[t('map_overlay_slopes')].addTo(map);
            }
        }
    }
}

// ===== ACTIVITY TYPE CHANGE =====
$('#activityType').change(function () {
    updateMapThemeForActivity();
    const activeFile = loadedFiles.find(f => f.active);
    if (activeFile) {
        analyzeSki(activeFile);
    }
});
