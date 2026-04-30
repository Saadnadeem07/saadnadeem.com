# Saad Nadeem — Portfolio

Personal portfolio for Saad Nadeem, DevOps & Cloud Engineer. Single-page React app with smooth-scroll navigation, dark theme, and CI/CD deployment to AWS S3 + CloudFront.

Live: https://saadnadeem.com

## Tech stack

- **React 18** + **Vite 5** (TypeScript)
- **Tailwind CSS** for styling
- **Framer Motion** for entry/scroll animations
- **react-scroll** for smooth navbar section navigation
- **lucide-react** for icons
- **Inter** via Google Fonts

## Sections

Navbar (fixed, smooth scroll, active link, mobile hamburger) → Hero → About → Skills → Projects (with category filters) → Contact + Footer.

## Local setup

```bash
git clone <this-repo-url>
cd sn-portfolio

# Install
npm install

# Dev server (http://localhost:5173)
npm run dev

# Type-check + production build (output: dist/)
npm run build

# Preview the production build locally
npm run preview
```

Node 20 is recommended (the CI uses 20).

## Project layout

```
public/
  images/        Profile photo and project thumbnails
  resume.pdf     Linked from Hero/Contact
  favicon.svg
src/
  components/    Navbar, Hero, About, Skills, Projects, Contact
  data.ts        Single source of truth for projects, skills, profile
  index.css      Tailwind layers + base/component utilities
  App.tsx, main.tsx
.github/workflows/deploy.yml   CI pipeline (build → S3 → CloudFront)
```

All static assets live in `public/` and are referenced from code as `/images/<file>` and `/resume.pdf`.

## Deployment (GitHub Actions → AWS)

Pushes to `main` trigger `.github/workflows/deploy.yml`, which:

1. Checks out the code
2. Sets up Node.js 20
3. Runs `npm ci`
4. Runs `npm run build`
5. Configures AWS credentials
6. Syncs `dist/` to S3: `aws s3 sync ./dist s3://saadnadeem.com --delete`
7. Invalidates the CloudFront distribution: `aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"`

### Required GitHub Secrets

Configure these in `Settings → Secrets and variables → Actions`:

| Secret | Purpose |
|---|---|
| `AWS_ACCESS_KEY_ID` | IAM access key with `s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket` on the bucket and `cloudfront:CreateInvalidation` on the distribution |
| `AWS_SECRET_ACCESS_KEY` | Matching secret access key |
| `AWS_REGION` | The bucket's region (e.g. `us-east-1`) |
| `CLOUDFRONT_DISTRIBUTION_ID` | Distribution ID in front of the bucket |

The S3 bucket name is hard-coded as `saadnadeem.com` in the workflow — change it there if you fork.

## Contact

- Email: saadnadeem5509@gmail.com
- GitHub: [Saadnadeem07](https://github.com/Saadnadeem07)
- LinkedIn: [saadnadeem07](https://www.linkedin.com/in/saadnadeem07/)
