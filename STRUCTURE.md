# SaIT-Events Project Structure

This document provides a detailed overview of the directory structure and organization of the SaIT-Events Next.js application.

## Root Directory

```
SaIT-events/
├── app/                    # Next.js App Router directory
├── public/                 # Static assets
├── types/                  # TypeScript type definitions
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore rules
├── CODE_OF_CONDUCT.md     # Community guidelines
├── CONTRIBUTING.md        # Contribution guidelines
├── eslint.config.mjs      # ESLint configuration
├── LICENSE.md             # Project license
├── middleware.ts          # Next.js middleware for auth
├── next.config.ts         # Next.js configuration
├── next-env.d.ts          # Next.js TypeScript declarations
├── package.json           # Dependencies and scripts
├── package-lock.json      # Lock file for dependencies
├── postcss.config.mjs     # PostCSS configuration
├── README.md              # Project documentation
└── tsconfig.json          # TypeScript configuration
```

## App Directory Structure

### Main Application Files
```
app/
├── layout.tsx             # Root layout with navbar and footer
├── page.tsx               # Homepage component
├── globals.css            # Global styles and Tailwind imports
└── hooks/
    └── useHomePageData.ts # Custom hook for homepage data
```

### Routes (App Router)
```
app/(routes)/
├── about/
│   ├── page.tsx           # About page component
│   └── types.ts           # About page type definitions
├── contact/
│   └── page.tsx           # Contact page component
└── events/
    ├── page.tsx           # Events listing page
    ├── [id]/              # Dynamic event detail pages
    │   ├── page.tsx       # Event detail page
    │   └── components/    # Event detail specific components
    │       ├── ActionButtons.tsx
    │       ├── AdditionalInfo.tsx
    │       ├── BackgroundDecorations.tsx
    │       ├── DetailsSection.tsx
    │       ├── EventHeader.tsx
    │       ├── PosterSection.tsx
    │       └── StatusBadge.tsx
    └── component/
        └── Background.tsx # Events page background
```

### Admin Routes
```
app/admin/
├── page.tsx               # Admin dashboard
└── login/
    └── page.tsx           # Admin login page
```

### API Routes (Server-side)
```
app/api/
├── admin/
│   └── login/
│       └── route.ts       # Admin login API endpoint
├── contact/
│   └── route.ts           # Contact form API endpoint
├── events/
│   └── route.ts           # Events CRUD API endpoint
├── controllers/
│   └── post.ts            # Post controller functions
├── lib/
│   ├── auth.ts            # Authentication utilities
│   └── dbConnection.ts    # MongoDB connection
└── models/
    └── Post.ts            # Mongoose Post model
```

## Components Structure

### Layout Components
```
app/components/layout/
├── NavBar.tsx             # Main navigation bar
├── NavLogo.tsx            # Logo component
├── DesktopNav.tsx         # Desktop navigation links
├── MobileNav.tsx          # Mobile navigation menu
├── MobileMenuButton.tsx   # Hamburger menu button
├── Hero.tsx               # Hero section wrapper
├── HeroBackground.tsx     # Hero background effects
├── HeroContent.tsx        # Hero content
├── ScrollIndicator.tsx    # Scroll down indicator
├── Footer.tsx             # Footer wrapper
├── FooterBackground.tsx   # Footer background effects
├── FooterBrand.tsx        # Footer branding section
├── FooterLinks.tsx        # Footer navigation links
├── FooterSocial.tsx       # Social media links
├── FooterBottom.tsx       # Footer bottom section
├── FloatingParticles.tsx  # Animated particles
└── hooks/
    └── useNavBar.ts       # Navigation state management
```

### Homepage Components
```
app/components/homepage/
├── StatsSection.tsx       # Statistics display
├── EventsSection.tsx      # Featured events section
└── DynamicSection.tsx     # Dynamic content sections
```

### Events Components
```
app/components/events/
├── EventsHeader.tsx       # Events page header
├── EventsSection.tsx      # Events listing section
└── hooks/
    └── useEvents.ts       # Events data fetching hook
```

### About Page Components
```
app/components/about/
├── HeroSection.tsx        # About hero section
├── FeaturesSection.tsx    # Features showcase
├── CommunityHeader.tsx    # Community section header
├── TeamSection.tsx        # Team members display
├── TeamAccordion.tsx      # Team accordion item
├── TeamsAccordionSection.tsx # Team accordion wrapper
├── ProfileCard.tsx        # Profile card component
├── MemberCard.tsx         # Team member card
├── ContributorsSection.tsx # GitHub contributors section
├── Contributor.tsx        # Single contributor card
└── hooks/
    └── useContributors.ts # GitHub API hook
```

### Contact Page Components
```
app/components/contact/
├── HeroSection.tsx        # Contact hero section
├── ContactForm.tsx        # Contact form component
└── hooks/
    └── useContactForm.ts  # Form state management
```

### Admin Components
```
app/components/admin/
├── LoginHeader.tsx        # Login page header
├── LoginForm.tsx          # Login form component
├── LoginButton.tsx        # Login submit button
├── LoginFooter.tsx        # Login page footer
├── BackgroundDecorations.tsx # Login background effects
└── hooks/
    └── useLoginForm.ts    # Login form logic
```

### Event Detail Components
```
app/components/event-detail/
├── EventHeader.tsx        # Event detail header
├── PosterSection.tsx      # Event poster display
├── DetailsSection.tsx     # Event details content
├── AdditionalInfo.tsx     # Additional information
├── ActionButtons.tsx      # Registration/social buttons
├── StatusBadge.tsx        # Event status badge
└── BackgroundDecorations.tsx # Background effects
```

### Reusable UI Components
```
app/components/ui/
├── Card.tsx               # Card wrapper component
├── CardButton.tsx         # Card action button
├── CardDecoration.tsx     # Card decorative elements
├── CardDescription.tsx    # Card description text
├── CardHeader.tsx         # Card header section
├── CardImage.tsx          # Card image component
├── cardUtils.ts           # Card utility functions
├── EmptyState.tsx         # Empty state placeholder
├── EventForm.tsx          # Event creation/edit form
├── FormField.tsx          # Form input field
├── LoadingSkeleton.tsx    # Loading skeleton UI
├── StatusSelector.tsx     # Status dropdown selector
├── SubmitButton.tsx       # Form submit button
└── hooks/
    └── useEventForm.ts    # Event form state logic
```

## Static Data Organization
```
app/office-info/
├── index.js               # Office info aggregator
├── mentors.js             # Mentors data
├── management.js          # Management team data
├── technicalTeam.js       # Technical team data
├── creativeTeam.js        # Creative team data
└── prTeam.js              # PR team data
```

## Public Assets
```
public/
├── images/                # General images
├── logos/                 # Brand logos
│   ├── OScode_svg.svg     # OScode logo
│   ├── OScode.png         # OScode PNG logo
│   ├── SaIT_svg.svg       # SaIT logo
│   └── SaIT.jpg           # SaIT JPG logo
├── file.svg               # Icon assets
├── globe.svg
├── next.svg
├── vercel.svg
└── window.svg
```

## TypeScript Types
```
types/
├── about.ts               # About page types
│   ├── TeamInfo
│   ├── TeamMember
│   ├── ContributorData
│   └── Feature
└── sib-api-v3-sdk.d.ts   # Sendinblue API types
```

## Key Features by Directory

### `/app` - Application Core
- **Pages**: Homepage, Events, About, Contact, Admin
- **Layouts**: Root layout with navigation and footer
- **API Routes**: RESTful endpoints for events, auth, contact
- **Middleware**: Authentication protection for admin routes

### `/app/components` - Component Library
- **Layout**: Navigation, footer, hero sections
- **UI**: Reusable form elements, cards, buttons, loaders
- **Feature-specific**: About, events, contact, admin components
- **Hooks**: Custom hooks for data fetching and state management

### `/app/api` - Backend Logic
- **Controllers**: Business logic for posts/events
- **Models**: Mongoose schemas for MongoDB
- **Libraries**: Database connection, authentication utilities
- **Routes**: HTTP endpoints (GET, POST, PUT, DELETE)

### `/public` - Static Assets
- **Images**: Event posters, profile pictures
- **Logos**: Brand and organization logos
- **Icons**: UI icons and decorative SVGs

## Architecture Patterns

### 1. **Feature-Based Organization**
Components are organized by feature (about, events, contact) rather than by type, making it easier to locate and modify related functionality.

### 2. **Hooks Pattern**
Custom hooks encapsulate data fetching and state logic:
- `useEvents` - Fetches and manages events data
- `useContributors` - Fetches GitHub contributors
- `useHomePageData` - Provides homepage static data
- `useNavBar` - Manages navigation state

### 3. **Component Composition**
Complex pages are built from smaller, reusable components:
- Cards composed of CardHeader, CardImage, CardDescription
- Forms composed of FormField, SubmitButton, StatusSelector
- Layouts composed of Header, Content, Footer sections

### 4. **Server/Client Separation**
- API routes handle server-side operations
- Components use "use client" for interactivity
- Middleware handles authentication at the edge

### 5. **Type Safety**
TypeScript types centralized in `/types` ensure type consistency across the application.

## Configuration Files

- **`next.config.ts`**: Image optimization, remote patterns
- **`tsconfig.json`**: TypeScript compiler options
- **`eslint.config.mjs`**: Code linting rules
- **`postcss.config.mjs`**: Tailwind CSS processing
- **`middleware.ts`**: Route protection and authentication

## Development Workflow

1. **Local Development**: `npm run dev` starts the development server
2. **Building**: `npm run build` creates production build
3. **Linting**: `npm run lint` checks code quality
4. **Type Checking**: TypeScript validates types during build

## Database Schema

The application uses MongoDB with Mongoose for data persistence:

**Post Model** (Events):
- `title`: String
- `description`: String
- `info`: String
- `status`: String (active/past)
- `poster`: String (image URL)
- `registrationLink`: String
- `socialLink`: String

## Authentication Flow

1. User accesses `/admin` routes
2. Middleware checks for `admin-auth` cookie
3. If not authenticated, redirects to `/admin/login`
4. Login API validates credentials
5. Sets cookie on successful login
6. User can access protected admin routes

## Notes

- All components use Framer Motion for animations
- Images use Next.js Image component with `unoptimized` for external sources
- Tailwind CSS for styling with custom theme configuration
- Responsive design with mobile-first approach
- Error handling with fallback UI components
