# INNOVEXA Website

A modern Next.js website with a built-in admin panel for managing colors and content.

## Features

- 🎨 **Full Color Customization** - Change any color from admin panel
- 📝 **Content Management** - Edit services, portfolio, hero section from admin
- 💰 **Pricing in INR** - All prices in Indian Rupees
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **Fast Performance** - Built with Next.js

## Getting Started

1. Install dependencies:
```bash
cd innovexa-next
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Admin Panel

Access the admin panel at `/admin` to:
- Change all website colors (primary, accent, text colors, etc.)
- Edit company information (name, email, phone)
- Modify hero section text
- Update services and pricing
- Manage portfolio projects

Changes are saved to your browser's localStorage.

## Deployment

Deploy to Vercel:
```bash
npm run build
vercel deploy
```

Or connect your GitHub repo to Vercel for automatic deployments.

## Tech Stack

- Next.js 14
- React
- Tailwind CSS
- LocalStorage for data persistence
