# Portfolio Deployment Guide

This portfolio is built with React + Vite and can be easily deployed to GitHub Pages or any static hosting service.

## Quick Setup

1. **Update Personal Information**
   - Edit `src/components/Portfolio/HeroSection.tsx` - Update name and titles
   - Edit `src/components/Portfolio/AboutSection.tsx` - Update about text and stats
   - Edit `src/components/Portfolio/ContactSection.tsx` - Update contact info and Formspree form ID
   - Edit `src/components/Portfolio/Footer.tsx` - Update social links
   - Replace placeholder images in `src/assets/` with your own photos/project images

2. **Update Projects**
   - Edit `src/components/Portfolio/ProjectsSection.tsx`
   - Replace placeholder projects with your actual projects
   - Update GitHub/demo links

3. **Update Experience & Education**
   - Edit `src/components/Portfolio/ExperienceSection.tsx` with your work history
   - Edit `src/components/Portfolio/EducationSection.tsx` with your education and certifications

4. **Update Skills**
   - Edit `src/components/Portfolio/SkillsSection.tsx` to match your technology stack

## GitHub Pages Deployment

### Method 1: Using GitHub Actions (Recommended)

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to repository Settings > Pages
4. Set Source to "GitHub Actions"
5. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ "main" ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Method 2: Using gh-pages package

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
3. Run: `npm run deploy`

## Other Hosting Options

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import your GitHub repository
2. Framework preset: Vite
3. Deploy automatically

### Surge.sh
1. Install surge: `npm install -g surge`
2. Build: `npm run build`
3. Deploy: `surge dist`

## Contact Form Setup

To make the contact form functional:

1. Go to [Formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Copy the form endpoint URL
5. Replace `YOUR_FORM_ID` in `ContactSection.tsx` with your actual form ID

Example:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_ACTUAL_FORM_ID', {
```

## SEO Optimization

The portfolio includes:
- ✅ Meta tags for SEO
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Alt tags for images
- ✅ Responsive design

## Performance Tips

- Replace placeholder images with optimized versions (WebP format recommended)
- Consider lazy loading for images below the fold
- Optimize images to appropriate sizes (profile: 400x400px, projects: 800x600px)

## Browser Support

This portfolio supports all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Customization

The design system is built with CSS custom properties and Tailwind CSS. You can easily customize:

- Colors: Edit `src/index.css` CSS variables
- Fonts: Update Tailwind config in `tailwind.config.ts`
- Spacing: Modify design tokens in `src/index.css`
- Components: All sections are modular and can be easily modified

Your portfolio is now ready to deploy! 🚀