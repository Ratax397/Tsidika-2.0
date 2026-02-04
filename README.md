# Tsidika 2.0

🌐 **Demo live:** [https://tsidika-2-0.vercel.app/](https://tsidika-2-0.vercel.app/)

Tsidika 2.0 is a modern property listing and booking app built with the Next.js App Router. Hosts can list properties, and guests can search, favorite, and book stays.

## Features
- **Authentication**: Secure login and sessions using NextAuth + Prisma.
- **Listings**: Create/edit/delete properties with title, description, category, price, location, capacity (guests/rooms/bathrooms), and photos via Cloudinary.
- **Search & filters**: Filter by location, date range (availability-aware), guests, rooms, bathrooms, and category; quick reset available.
- **Interactive map**: Explore listings by location with Leaflet/React-Leaflet markers synced to results.
- **Reservations**: Check availability, book and cancel stays; automatic total price with blocked dates.
- **Favorites**: Wishlist with heart toggle and a dedicated Favorites page.
- **Dashboards**: 
  - Trips: your bookings.
  - Reservations: bookings on your listings.
  - Properties: manage your listings.
- **Responsive UI**: Polished modals (login/register/rent/search), form validation, and toast notifications.

## Tech Stack
- **Frontend**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4
- **Backend/DB**: Prisma ORM with MongoDB, NextAuth
- **Integrations**: Cloudinary, Leaflet/React-Leaflet, React Hook Form, Zustand, React Date Range

## Getting Started
- **Install**: `npm install`
- **Run dev**: `npm run dev`
- **Open**: http://localhost:3000
