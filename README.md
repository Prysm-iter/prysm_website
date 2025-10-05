# Prysm Club Website

A modern, responsive landing page for Prysm Club - a college technology club focused on innovation, collaboration, and building the future through technology.

## 🌟 Features

- **Modern Design**: Built with Next.js 15, React 19, and Tailwind CSS
- **Responsive Layout**: Mobile-first design that works on all devices
- **Shadcn/UI Components**: Consistent, accessible UI components with easy theme customization
- **Performance Optimized**: Server-side rendering and optimized images
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

## 🏗️ Architecture

### Header Component
- Left-aligned club logo with brand identity
- Right-aligned navigation links (Home, About, Events, Contact)
- Mobile-responsive with hamburger menu
- Slide-out drawer navigation for mobile devices
- Sticky positioning for better UX

### Footer Component
- Club branding with logo and inspirational motto
- Comprehensive social media links section:
  - GitHub
  - Instagram
  - LinkedIn
  - YouTube
  - Facebook
  - X.com (Twitter)
- Additional links for privacy policy and terms
- Responsive grid layout

### Pages Structure
- **Home**: Hero section, features showcase, and call-to-action
- **About**: Mission, vision, and club activities
- **Events**: Upcoming and past events with registration
- **Contact**: Contact form and club information

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: Shadcn/UI components
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Typography**: Geist Sans & Geist Mono fonts
- **Language**: TypeScript

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   # or
   bun install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   # or
   bun dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── events/            # Events page
│   ├── layout.tsx         # Root layout with Header/Footer
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Shadcn/UI components
│   ├── header.tsx        # Header component
│   └── footer.tsx        # Footer component
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── styles/               # Global styles
```

## 🎨 Theme Customization

The website uses Shadcn/UI components which can be easily customized through:

1. **CSS Variables**: Modify colors in `globals.css`
2. **Component Variants**: Update component styles in `components/ui/`
3. **Tailwind Config**: Extend theme in `tailwind.config.js`

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: 
  - `sm`: 640px and up
  - `md`: 768px and up
  - `lg`: 1024px and up
  - `xl`: 1280px and up

## 🔧 Development Guidelines

- **Components**: Use functional components with TypeScript
- **Styling**: Utility-first approach with Tailwind CSS
- **State Management**: React hooks for local state
- **Performance**: Optimize images and use Next.js features
- **Accessibility**: Follow WCAG guidelines and use semantic HTML

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

For questions about the website or Prysm Club:
- Email: contact@prysmclub.edu
- Website: [prysmclub.edu](https://prysmclub.edu)

---

Built with ❤️ by the Prysm Club team
