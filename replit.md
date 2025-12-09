# Kingdom Keys Cleaning

## Overview

Kingdom Keys Cleaning is a luxury cleaning service website for a South African company that brings "yachting-standard" precision and excellence to residential deep cleaning. The application is a full-stack TypeScript project with a React frontend and Express backend, designed as a marketing and lead generation website with multiple pages showcasing services, testimonials, training programs, and contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom design tokens defined in CSS variables
- **Component Library**: shadcn/ui (New York style) with Radix UI primitives
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with React plugin

The frontend follows a page-based architecture with reusable components:
- Pages located in `client/src/pages/` (Home, About, Services, Training, Bookings, Reviews, FAQs, Contact, Terms, Privacy)
- Shared components in `client/src/components/` (Navigation, Footer, Hero, ServiceCard, TestimonialCard, ContactForm, FAQAccordion)
- UI primitives in `client/src/components/ui/` (shadcn/ui components)

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server**: HTTP server with potential WebSocket support
- **API Pattern**: RESTful routes prefixed with `/api`
- **Storage Interface**: Abstract storage interface (`IStorage`) with in-memory implementation (`MemStorage`)
- **Static Serving**: Serves built frontend assets in production

The backend uses a clean separation between routes, storage, and static file serving:
- `server/routes.ts` - API route registration
- `server/storage.ts` - Data persistence abstraction
- `server/static.ts` - Production static file serving
- `server/vite.ts` - Development server with Vite HMR

### Design System
The project follows luxury service design guidelines with:
- Typography: Playfair Display for headings, Inter for body text
- Color scheme: Deep navy blue primary, gold accents, neutral backgrounds
- CSS variables for theming with light/dark mode support
- Consistent spacing using Tailwind's spacing scale

### Build Process
- Development: `tsx` for TypeScript execution with Vite dev server
- Production: Custom build script using esbuild for server bundling and Vite for client
- Output: `dist/` directory with `index.cjs` (server) and `public/` (client assets)

## External Dependencies

### Database
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined in `shared/schema.ts` with Zod integration via `drizzle-zod`
- **Migrations**: Drizzle Kit for schema migrations (`migrations/` directory)
- **Current Tables**: Users table with id, username, password fields
- **Connection**: Requires `DATABASE_URL` environment variable

### Third-Party UI Libraries
- Radix UI primitives for accessible components
- Embla Carousel for image carousels
- date-fns for date manipulation
- Lucide React for icons

### Development Tools
- TypeScript with strict mode
- Path aliases: `@/` for client source, `@shared/` for shared code, `@assets/` for attached assets
- Replit-specific plugins for development (cartographer, dev-banner, runtime error overlay)

### Potential Integrations (noted in package.json)
- Nodemailer for email functionality
- Stripe for payment processing
- Passport for authentication
- Express session with PostgreSQL store (connect-pg-simple)