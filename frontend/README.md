# M2X Classified Ads - Frontend

Modern and responsive frontend for M2X Classified Ads platform built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features

- ⚡ Next.js 15 with App Router
- ⚛️ React 19
- 🎨 Tailwind CSS with custom design system
- 🔐 Authentication & Authorization
- 📱 Fully Responsive Design
- 🌙 Dark Mode Support
- 🎯 TypeScript for type safety
- 📦 Component Library with Radix UI
- 🔄 Real-time Chat Interface
- 💳 Payment Integration
- 🖼️ Image Upload & Gallery
- 🔍 Advanced Search & Filters
- ⭐ Favorites System
- 📊 User Dashboard

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Forms:** React Hook Form + Zod
- **HTTP Client:** Axios
- **State Management:** React Context / Hooks
- **Icons:** Lucide React

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or pnpm
- Backend API running (see backend README)

## Installation

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Create a `.env.local` file:

```bash
cp .env.local.example .env.local
```

4. Update the `.env.local` file with your configuration:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_NAME=M2X Classified Ads
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Running the Application

### Development Mode

```bash
npm run dev
# or
pnpm dev
```

The app will start on `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
# or
pnpm start
```

### Linting

```bash
npm run lint
# or
pnpm lint
```

## Analytics

Vercel Analytics is available out of the box for this project. If you need to reinstall or reuse it elsewhere, follow these steps:

1. **Install the package**

   ```bash
   npm i @vercel/analytics
   # or
   pnpm add @vercel/analytics
   ```

2. **Add the component to your layout**

   ```tsx
   import { Analytics } from "@vercel/analytics/next";

   export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
       <html lang="en">
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     );
   }
   ```

3. **Deploy and visit your site**

   Deploy the frontend and open the live URL. If analytics data does not appear after ~30 seconds, make sure no content blockers are active and navigate between pages to trigger events.

## Project Structure

```
frontend/
├── app/                      # Next.js App Router
│   ├── auth/                # Authentication pages
│   │   ├── login/
│   │   └── signup/
│   ├── chat/                # Chat page
│   ├── dashboard/           # User dashboard
│   ├── listings/            # Browse listings
│   ├── payment/             # Payment page
│   ├── post-ad/             # Create listing
│   ├── premium/             # Premium packages
│   ├── product/             # Product detail
│   │   └── [id]/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/              # React components
│   ├── ui/                  # UI component library
│   ├── categories.tsx
│   ├── chat-interface.tsx
│   ├── dashboard.tsx
│   ├── featured-ads.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── listing-filters.tsx
│   ├── listing-grid.tsx
│   ├── login-form.tsx
│   ├── my-ads.tsx
│   ├── my-favorites.tsx
│   ├── navigation.tsx
│   ├── payment-form.tsx
│   ├── post-ad-form.tsx
│   ├── premium-packages.tsx
│   ├── product-detail.tsx
│   ├── profile-settings.tsx
│   ├── promo-section.tsx
│   ├── signup-form.tsx
│   ├── similar-ads.tsx
│   └── theme-provider.tsx
├── hooks/                   # Custom React hooks
│   ├── use-mobile.ts
│   └── use-toast.ts
├── lib/                     # Utility functions
│   ├── api.ts               # API client
│   └── utils.ts             # Helper functions
├── public/                  # Static assets
│   └── images/
├── styles/                  # Additional styles
│   └── globals.css
├── .gitignore
├── components.json          # Shadcn UI config
├── next.config.mjs          # Next.js config
├── package.json
├── postcss.config.mjs       # PostCSS config
├── tailwind.config.ts       # Tailwind config
├── tsconfig.json            # TypeScript config
└── README.md
```

## Key Pages

### Public Pages

- `/` - Homepage with featured listings
- `/listings` - Browse all listings with filters
- `/product/[id]` - Product detail page
- `/auth/login` - User login
- `/auth/signup` - User registration

### Protected Pages (Require Authentication)

- `/dashboard` - User dashboard
- `/post-ad` - Create new listing
- `/chat` - Chat interface
- `/payment` - Payment page
- `/premium` - Premium packages

## API Integration

The frontend communicates with the backend API using Axios. All API calls are centralized in `lib/api.ts`.

### Authentication

JWT tokens are stored in localStorage and automatically included in API requests via Axios interceptors.

### API Client Usage Example

```typescript
import { listingAPI, authAPI } from "@/lib/api";

// Get listings
const { data } = await listingAPI.getListings({
  category: "electronics",
  page: 1,
  limit: 10,
});

// Login
const { data } = await authAPI.login({
  email: "user@example.com",
  password: "password123",
});
```

## Components

### UI Components

Built with Radix UI and styled with Tailwind CSS:

- Button, Card, Dialog, Dropdown
- Form, Input, Select, Checkbox
- Toast, Alert, Tabs, Accordion
- And many more...

### Custom Components

- `Navigation` - Main navigation bar
- `Hero` - Homepage hero section
- `FeaturedAds` - Featured listings carousel
- `ListingGrid` - Listing cards grid
- `ListingFilters` - Search and filter controls
- `ProductDetail` - Product detail view
- `ChatInterface` - Real-time chat UI
- `Dashboard` - User dashboard layout
- `PostAdForm` - Create/edit listing form
- `PaymentForm` - Payment processing form

## Styling

### Tailwind CSS

The project uses Tailwind CSS v4 for styling with a custom design system configured in `tailwind.config.ts`.

### Dark Mode

Dark mode is supported using `next-themes` and can be toggled from the navigation bar.

### Custom CSS

Additional global styles are defined in:

- `app/globals.css`
- `styles/globals.css`

## Environment Variables

| Variable             | Description      | Default                   |
| -------------------- | ---------------- | ------------------------- |
| NEXT_PUBLIC_API_URL  | Backend API URL  | http://localhost:5000/api |
| NEXT_PUBLIC_APP_NAME | Application name | M2X Classified Ads        |
| NEXT_PUBLIC_APP_URL  | Frontend URL     | http://localhost:3000     |

## Development Guidelines

### Adding New Pages

1. Create a new folder in `app/` directory
2. Add `page.tsx` for the page component
3. Optionally add `loading.tsx` for loading states
4. Update navigation if needed

### Adding New Components

1. Create component file in `components/`
2. Use TypeScript for type safety
3. Follow existing naming conventions
4. Add proper props typing

### API Integration

1. Add new API functions in `lib/api.ts`
2. Use existing axios instance
3. Handle errors appropriately
4. Add TypeScript types for responses

## Building for Production

1. Ensure environment variables are set correctly
2. Build the application:

```bash
npm run build
```

3. Test the production build locally:

```bash
npm start
```

4. Deploy to your hosting platform (Vercel, Netlify, etc.)

## Performance Optimization

- Images are optimized using Next.js Image component
- Code splitting via Next.js App Router
- Dynamic imports for heavy components
- Lazy loading for images
- Caching strategies for API calls

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC


