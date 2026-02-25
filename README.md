# Salt Run Website

Modern Next.js website for Salt Run - home maintenance subscription service serving Northern Utah.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial Salt Run website"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Import project in Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect GitHub and select your repository
   - Vercel will auto-detect Next.js and deploy

3. Connect custom domain (salt-run.com):
   - In Vercel dashboard, go to Settings > Domains
   - Add salt-run.com
   - Update DNS records in Google Workspace:
     - A record: Point to Vercel's IP
     - CNAME (www): Point to cname.vercel-dns.com
   - SSL certificate is provisioned automatically

## Site Structure

- **Header**: Sticky navigation with phone number and smooth scroll links
- **Hero**: Main value proposition with CTA
- **Problem Section**: Pain points (vendor coordination, mental load)
- **How It Works**: 4-step process timeline
- **Value Props**: Key benefits grid
- **Pricing**: Three tiers ($25, $39, $79) with "Most Popular" badge
- **FAQ**: 8 common questions with accordion
- **Testimonials**: Customer reviews from current site
- **Final CTA**: Golden yellow conversion section
- **Footer**: Contact info and service area

## Brand Colors

- Golden Yellow: `#FFC700`
- Dark Gray: `#1A1A1A`
- Medium Gray: `#666666`
- Off White: `#FAFAFA`

Configured in `tailwind.config.ts` - use as `bg-golden-yellow`, `text-dark-gray`, etc.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## Updating Content

### Update Pricing
Edit `components/Pricing.tsx` - modify tier prices, features, or descriptions.

### Update Testimonials
Edit `components/Testimonials.tsx` - add/remove testimonial objects in the array.

### Update FAQ
Edit `components/FAQ.tsx` - add/remove FAQ objects in the array.

### Update Contact Info
Phone number and service area are used throughout - search for `(801) 477-0670` and `Ogden, Layton, and Farmington` to update globally.

## Future Enhancements

- Add Stripe checkout links to "Get Started" buttons (placeholder: phone links)
- Add AI-generated illustrations for sections (currently using SVG icons)
- Add Google Analytics or Plausible tracking
- Add contact form (currently using tel: links)
- Create blog for SEO content

## Support

Questions? Call (801) 477-0670
