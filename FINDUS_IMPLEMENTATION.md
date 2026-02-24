# Find Us Page - Implementation Guide

## Overview

The Find Us page has been successfully implemented with a reusable Leaflet map component. The page displays restaurant locations with an interactive map and detailed location information.

## Components Created

### 1. Map Component (`src/components/common/Map/Map.jsx`)

A reusable map component built with Leaflet that can be used anywhere in the application.

**Props:**

- `locations` (array, required): Array of location objects with coordinates
- `center` (array, optional): Map center coordinates [lat, lng]
- `zoom` (number, optional): Initial zoom level (default: 7)
- `height` (string, optional): Map container height (default: "100%")

**Usage Example:**

```jsx
import { Map } from "../components/common";

const locations = [
  {
    id: 1,
    name: "Location Name",
    address: "Address",
    coordinates: [53.7985, -1.5418],
    directionsUrl: "https://maps.google.com/...",
  },
];

<Map locations={locations} zoom={10} center={[53.5, -1.5]} />;
```

### 2. FindUs Page (`src/pages/FindUsPage.jsx`)

A complete page component featuring:

- Orange sidebar with location listings
- Search functionality (by city, postcode, or location name)
- Interactive map with custom markers
- Location details including:
  - Address
  - Opening times
  - Email contact
  - Status badge (OPEN NOW/CLOSED)
- Action buttons (Directions and Order)

## Data Structure

### Location Data (`src/data/index.js`)

The `locationsData` array contains all restaurant locations:

```javascript
{
  id: 1,
  name: "LEEDS",
  subtitle: "City Centre",
  address: "7 Duncan St, LS1 6DQ",
  status: "OPEN NOW",
  openingTimes: [
    { day: "Monday - Friday", hours: "11:00 AM - 10:00 PM" },
    // ...more times
  ],
  email: "leeds@sqew.uk",
  phone: "+44 113 123 4567",
  coordinates: [53.7985, -1.5418],
  directionsUrl: "https://maps.google.com/?q=...",
  orderUrl: "#order"
}
```

## Integration with App

### Option 1: Replace HomePage temporarily (for testing)

```jsx
// src/App.jsx
import { FindUsPage } from "./pages";
import { MainLayout } from "./layouts";
import "./App.css";

export default function App() {
  return (
    <MainLayout>
      <FindUsPage />
    </MainLayout>
  );
}
```

### Option 2: Add React Router (recommended for production)

```bash
npm install react-router-dom
```

```jsx
// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, FindUsPage } from "./pages";
import { MainLayout } from "./layouts";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-us" element={<FindUsPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
```

Then add navigation links in your components (e.g., in Navbar or Footer):

```jsx
import { Link } from "react-router-dom";

<Link to="/find-us">Find Us</Link>;
```

## Features

### Search Functionality

Users can search locations by:

- Location name (e.g., "Leeds", "Manchester")
- Address
- Subtitle/area

### Interactive Map

- Custom orange markers with "sqew" branding
- Clickable markers with popups
- Zoom and pan controls
- Responsive design

### Responsive Design

- Desktop: Sidebar (360px) + Map (remaining space)
- Tablet: Sidebar (360px) + Map (remaining space)
- Mobile: Stacked layout (50% each vertically)

## Customization

### Adding New Locations

Edit `src/data/index.js` and add new location objects to the `locationsData` array:

```javascript
{
  id: 3,
  name: "NEW LOCATION",
  subtitle: "District Name",
  address: "Full Address",
  status: "OPEN NOW", // or "CLOSED"
  openingTimes: [...],
  email: "location@sqew.uk",
  phone: "+44 xxx xxx xxxx",
  coordinates: [lat, lng], // Get from Google Maps
  directionsUrl: "https://maps.google.com/?q=address",
  orderUrl: "#order" // or external ordering system URL
}
```

### Styling Customization

- **Sidebar background**: Edit `.find-us-sidebar` gradient in `FindUsPage.css`
- **Primary color**: Update `#ff6b00` (orange) throughout the CSS
- **Marker styling**: Edit `createCustomIcon()` in `Map.jsx`

### Map Customization

You can change the map tile provider in `Map.jsx`:

```jsx
<TileLayer
  attribution='&copy; <a href="...">Provider</a>'
  url="https://{s}.tile.provider.com/{z}/{x}/{y}.png"
/>
```

Popular alternatives:

- **Mapbox**: `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`
- **CartoDB**: `https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png`
- **Stamen**: `https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg`

## Dependencies Installed

- `leaflet` (^1.9.4) - Core mapping library
- `react-leaflet` (^4.2.1) - React components for Leaflet

## Files Structure

```
src/
├── components/
│   └── common/
│       └── Map/
│           ├── Map.jsx        # Reusable map component
│           └── Map.css        # Map styles
├── pages/
│   ├── FindUsPage.jsx        # Find Us page component
│   └── FindUsPage.css        # Page styles
└── data/
    └── index.js              # Updated with locationsData
```

## Notes

- The map requires an internet connection to load tiles from OpenStreetMap
- Custom markers are styled to match the brand colors
- The component is fully responsive and works on all screen sizes
- Search is case-insensitive and searches across multiple fields
