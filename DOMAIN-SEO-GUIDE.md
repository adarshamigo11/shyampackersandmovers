# Domain-Specific SEO Configuration for shyampackersandmovers.in

## 🌐 Domain Setup

### Current Configuration
- **New Domain**: `https://shyampackersandmovers.in`
- **Previous Domain**: `https://shyam-movers.vercel.app`
- **Status**: Updated in codebase

### Files Updated
1. ✅ `lib/site.ts` - Changed default URL to new domain
2. ✅ `app/layout.tsx` - Updated OpenGraph and Twitter cards with full URLs
3. ✅ `lib/schema.ts` - Updated sameAs field with domain-specific social media placeholders

## 🔧 Vercel Configuration Steps

### Step 1: Add Custom Domain in Vercel

1. Go to your project: https://vercel.com/adarshs-projects-3e3bc2e8/shyam-movers
2. Click on **Settings** → **Domains**
3. Add `shyampackersandmovers.in`
4. Vercel will provide DNS records to configure

### Step 2: Configure DNS Records

At your domain registrar (where you purchased `shyampackersandmovers.in`), add these records:

#### Option A: Root Domain (Recommended)
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel's IP - verify in Vercel dashboard)
TTL: 3600
```

#### Option B: CNAME for www subdomain
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

#### Option C: Vercel's Recommended Configuration
Vercel typically provides:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Note**: DNS changes can take 24-48 hours to propagate

### Step 3: Set Environment Variable in Vercel

1. Go to **Settings** → **Environment Variables**
2. Add:
   ```
   NEXT_PUBLIC_SITE_URL = https://shyampackersandmovers.in
   ```
3. Apply to: Production, Preview, Development

### Step 4: Force HTTPS (Automatic)

Vercel automatically:
- Redirects HTTP to HTTPS
- Redirects `www` to non-www (or vice versa based on your setting)
- Provides SSL certificate

## 📝 Post-Deployment SEO Checklist

### 1. Update Google Search Console

**CRITICAL**: After domain change, you MUST:

1. **Add new property** in Google Search Console
   - Go to: https://search.google.com/search-console
   - Add property: `https://shyampackersandmovers.in`
   - Verify ownership (DNS record or HTML file)

2. **Submit new sitemap**
   - URL: `https://shyampackersandmovers.in/sitemap.xml`
   - Go to: Sitemaps → Add/Test Sitemap

3. **Add site verification meta tag**
   - Get code from Search Console
   - Update `app/layout.tsx` line ~82:
   ```typescript
   other: {
     "google-site-verification": "YOUR_NEW_VERIFICATION_CODE",
     // ... other meta tags
   },
   ```

### 2. Update Google My Business

1. Go to: https://www.google.com/business/
2. Find your business listing
3. Update website URL to: `https://shyampackersandmovers.in`
4. Verify business information:
   - Business name: Shyam Packers and Movers
   - Address: 8 Shankargarh Road, Makronia, Sagar, MP 470004
   - Phone: 92432 00382
   - Website: https://shyampackersandmovers.in
   - Category: Packers and Movers, Transport Service

### 3. Submit to Bing Webmaster Tools

1. Go to: https://www.bing.com/webmasters
2. Add site: `https://shyampackersandmovers.in`
3. Submit sitemap: `https://shyampackersandmovers.in/sitemap.xml`

### 4. Update Business Directories

Update your website URL on:
- JustDial
- Sulekha
- IndiaMART
- TradeIndia
- Local Sagar business directories
- Any other listings

### 5. Set Up 301 Redirects (If Needed)

If you want to redirect old Vercel URLs to new domain:

Create `vercel.json` in project root:
```json
{
  "redirects": [
    {
      "source": "/(.*)",
      "has": [
        {
          "type": "host",
          "value": "shyam-movers.vercel.app"
        }
      ],
      "destination": "https://shyampackersandmovers.in/$1",
      "permanent": true
    }
  ]
}
```

**Note**: This only works if you control the source domain

## 🎯 Domain-Specific SEO Optimizations

### Keywords to Target

Update your content strategy to include:
- "shyam packers and movers in"
- "shyampackersandmovers.in"
- "shyam movers in sagar"
- "packers movers .in domain"

### Local SEO for .in Domain

Since you're using an Indian TLD (.in):
1. **Strengths**:
   - Strong signal for Indian searchers
   - Better ranking in .in domain searches
   - Local trust factor

2. **Optimizations**:
   - Keep content in English (en-IN)
   - Consider adding Hindi content
   - Emphasize Indian locations
   - Use INR (₹) for pricing (already done)

### Schema Markup Updates

Your schema already includes:
- ✅ LocalBusiness schema
- ✅ MovingCompany schema
- ✅ Service schema
- ✅ FAQ schema
- ✅ Breadcrumb schema

**Additional recommendations**:
- Add social media profiles to `sameAs` array in `lib/schema.ts`
- Create profile pages on Facebook, Instagram, etc.
- Add `@id` references for better entity relationships

## 🔍 Technical SEO for New Domain

### 1. Update Canonical URLs

Already handled automatically via `site.url` update.

### 2. robots.txt

Verify after deployment:
```
GET https://shyampackersandmovers.in/robots.txt
```

Should show:
```
User-agent: *
Allow: /
Sitemap: https://shyampackersandmovers.in/sitemap.xml
Host: https://shyampackersandmovers.in
```

### 3. sitemap.xml

Verify after deployment:
```
GET https://shyampackersandmovers.in/sitemap.xml
```

All URLs should use `https://shyampackersandmovers.in` as base.

### 4. SSL Certificate

Vercel provides automatic SSL. Verify:
- Padlock icon in browser
- HTTPS in all URLs
- No mixed content warnings

### 5. Page Speed

Test new domain with:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

## 📊 Monitoring After Domain Change

### Week 1-2: Monitoring Checklist

- [ ] DNS propagation complete
- [ ] SSL certificate active
- [ ] All pages accessible
- [ ] No broken links
- [ ] Sitemap loads correctly
- [ ] robots.txt accessible
- [ ] Google Search Console verified
- [ ] Bing Webmaster Tools verified

### Month 1: SEO Impact Check

- [ ] Rankings for target keywords
- [ ] Organic traffic comparison
- [ ] Index coverage in Search Console
- [ ] Crawl errors (should be minimal)
- [ ] Backlinks updated to new domain

### Month 2-3: Recovery & Growth

- [ ] Traffic returning to previous levels
- [ ] New backlinks acquired
- [ ] Local pack rankings improving
- [ ] Review ratings maintained

## 🚀 Deployment Steps

### Pre-Deployment

1. **Test locally with new domain**:
   ```bash
   # Add to hosts file (Windows: C:\Windows\System32\drivers\etc\hosts)
   127.0.0.1 shyampackersandmovers.in
   
   # Run dev server
   npm run dev
   ```

2. **Build and verify**:
   ```bash
   npm run build
   npm start
   ```

3. **Check all meta tags**:
   - View page source
   - Verify canonical URLs
   - Check OpenGraph tags
   - Validate schema markup

### Deployment

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "SEO: Updated for shyampackersandmovers.in domain"
   git push
   ```

2. **Vercel auto-deploys** from GitHub

3. **Configure domain in Vercel** (see Step 1 above)

4. **Wait for DNS propagation** (24-48 hours)

5. **Verify deployment**:
   ```
   https://shyampackersandmovers.in
   https://www.shyampackersandmovers.in (should redirect)
   ```

## ⚠️ Common Issues & Solutions

### Issue 1: Domain not loading after DNS change

**Solution**:
- Wait 24-48 hours for DNS propagation
- Clear browser cache
- Try incognito mode
- Check DNS with: `nslookup shyampackersandmovers.in`

### Issue 2: SSL certificate error

**Solution**:
- Go to Vercel project settings
- Check domain configuration
- Vercel auto-provisions SSL via Let's Encrypt
- May take up to 24 hours

### Issue 3: Mixed content warnings

**Solution**:
- Update all internal links to use `https://`
- Check for hardcoded `http://` URLs
- Update image paths if needed

### Issue 4: Search rankings drop

**Solution**:
- Normal during domain migration
- Submit Change of Address in Search Console
- Build backlinks to new domain
- Monitor for 3-6 months

## 📈 SEO Performance Tracking

### Tools to Set Up

1. **Google Analytics 4 (GA4)**
   - Track traffic to new domain
   - Monitor user behavior
   - Set up conversion tracking

2. **Google Search Console**
   - Monitor search performance
   - Track keyword rankings
   - Identify crawl errors

3. **Vercel Analytics**
   - Real-time performance
   - Core Web Vitals
   - Geographic distribution

4. **Rank Tracking Tools** (Optional)
   - Ahrefs
   - SEMrush
   - Moz Pro
   - SERPWatcher

### Key Metrics

Track these for new domain:
- Organic sessions
- Keyword rankings (target: top 10 for local keywords)
- Click-through rate (CTR)
- Bounce rate
- Average session duration
- Conversion rate (calls, WhatsApp inquiries)

## 🎯 Next Steps Summary

### Immediate (Before Deployment)
1. ✅ Code updated for new domain (DONE)
2. ⏳ Configure domain in Vercel
3. ⏳ Add DNS records at registrar
4. ⏳ Set environment variable in Vercel

### Right After Deployment
5. ⏳ Verify Google Search Console
6. ⏳ Submit new sitemap
7. ⏳ Update Google My Business
8. ⏳ Test all pages load correctly

### Within First Week
9. ⏳ Update business directories
10. ⏳ Set up analytics tracking
11. ⏳ Monitor for crawl errors
12. ⏳ Verify SSL certificate working

### Within First Month
13. ⏳ Build social media profiles
14. ⏳ Create local citations
15. ⏳ Monitor keyword rankings
16. ⏳ Collect customer reviews

---

**Domain**: https://shyampackersandmovers.in
**Status**: Code updated, ready for deployment
**Last Updated**: November 2, 2026
