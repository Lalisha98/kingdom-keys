# Kingdom Keys Cleaning - Design Guidelines

## Design Approach
**Reference-Based Luxury Service Design** drawing from Squarespace premium templates, luxury hospitality brands (Four Seasons, Ritz-Carlton), and high-end yacht company websites. The design merges maritime precision with luxury service presentation.

## Typography Hierarchy
- **Primary Font:** Google Fonts - "Playfair Display" for elegant headings (h1-h3)
- **Secondary Font:** "Inter" for body text and navigation
- **Sizes:** h1: 3.5rem/4.5rem, h2: 2.5rem/3rem, h3: 1.75rem/2rem, Body: 1rem/1.125rem
- **Weights:** Display (700), Headings (600), Body (400), Light accent text (300)

## Layout System
**Tailwind Spacing Units:** 4, 8, 12, 16, 24, 32 for consistent rhythm
- Section padding: py-16 (mobile) to py-32 (desktop)
- Container: max-w-7xl with px-6 to px-12
- Card spacing: gap-8 to gap-12
- Content max-width: max-w-4xl for readability

## Page-Specific Layouts

### Homepage
- **Hero Section:** Full-viewport (80vh) with luxury yacht interior image showcasing pristine cleanliness. Centered headline "Yachting-Standard Deep Cleaning for Your Home" with blurred-background CTA buttons. Trust indicator below: "Serving South Africa's Most Discerning Clients"
- **USP Section:** 3-column grid (single on mobile) featuring yacht-inspired icons: Precision, Excellence, Attention to Detail
- **Services Preview:** 2-column alternating image-text layout showcasing key services with yacht-quality comparisons
- **Social Proof:** Full-width testimonial carousel with star ratings and client photos
- **CTA Section:** Split-screen design - left side form preview, right side contact information with office hours

### About Page
- **Hero:** Medium-height (60vh) with yacht deck/cleaning action imagery
- **Story Section:** Two-column layout - left: founder's yachting background with portrait, right: philosophy and approach narrative
- **Credentials:** Badge-style grid displaying certifications, experience years, yacht training
- **Team Section:** If applicable, profile cards in 3-column grid

### Services Page
- **Services Grid:** 2-column (mobile: 1) detailed service cards with before/after imagery placeholders
- **Each Card:** Service icon, title, detailed description, key features list, yacht-standard comparison callout
- **Pricing CTA:** Bottom section encouraging custom quotes

### Client Reviews
- **Review Cards:** Masonry grid layout (2-3 columns) with varied heights, star ratings, client names, service type, detailed testimonials, professional placeholder photos

### Contact Page
- **Split Layout:** Left 60% - comprehensive contact form with fields: Name, Email, Phone, Service Interest, Property Size, Message. Right 40% - business details, operating hours, service areas map placeholder, social links
- **Bottom:** FAQ quick-links

### FAQs, Terms, Privacy Policy
- **Single-column:** max-w-4xl centered, accordion-style expandable sections for FAQs, clean typography hierarchy for legal pages

## Component Library

### Navigation
- Fixed top navigation with logo left, menu center/right
- Mobile: Hamburger with slide-in overlay
- Sticky on scroll with subtle shadow

### Buttons
- Primary: Large, rounded, gold accent for main CTAs
- Secondary: Outlined navy for alternative actions
- All buttons on images: blurred backgrounds (backdrop-blur-md bg-white/10)

### Cards
- Elevated with subtle shadows (shadow-lg)
- Rounded corners (rounded-xl)
- Hover: gentle lift transform (hover:-translate-y-1)

### Forms
- Floating labels, rounded inputs (rounded-lg)
- Generous padding (p-4), clear focus states

### Icons
- **Library:** Heroicons via CDN
- Use outline style for navigation, solid for features
- Size: 24px standard, 32px for feature highlights

## Images Strategy

### Critical Images:
1. **Homepage Hero:** Luxury yacht interior or pristine yacht deck - conveys standards and aspiration
2. **About Page Hero:** Founder/team in yacht setting or professional cleaning action
3. **Services:** Before/after cleaning imagery, yacht interior details for comparison
4. **Reviews:** Professional client headshots (use placeholder avatars)
5. **Background Treatments:** Subtle nautical textures (rope, teak, brushed metal) as accent elements

All images should convey: luxury, precision, cleanliness, maritime excellence

## Animations
**Minimal and purposeful:**
- Fade-in on scroll for sections (once only, not repetitive)
- Smooth page transitions
- Hover states on cards/buttons
- NO distracting animations - maintain sophisticated, stable presence

## Accessibility
- WCAG AA contrast ratios throughout
- Clear focus indicators on all interactive elements
- Semantic HTML structure
- Alt text for all images describing luxury/cleaning context
- Form labels and ARIA attributes

This design creates a premium, trustworthy presence that positions Kingdom Keys as the luxury standard in deep cleaning through yacht-inspired precision and excellence.