# Information Architecture & Content Mapping

## Phase 2: Content Audit & Site Architecture

---

## Discovered Content Inventory

### Verified Content (From Web Sources)

| Content Type | Status | Source |
|--------------|--------|--------|
| Name | Verified | LinkedIn, ZoomInfo |
| Current Role | Verified | LinkedIn, ZoomInfo |
| Work History | Verified (7 companies) | LinkedIn, ZoomInfo |
| Education | Verified (2 credentials) | ZoomInfo |
| Location | Verified | LinkedIn |
| LinkedIn URL | Verified | Direct search |
| Behance URL | Verified (exists, blocked) | Direct search |

### Missing Content (Requires User Input)

| Content Type | Priority | Notes |
|--------------|----------|-------|
| Case Studies | Critical | 3-5 detailed projects needed |
| Professional Bio | Critical | Personal narrative, philosophy |
| Headshot | Critical | Professional photo |
| Project Images | Critical | Screenshots, mockups, visuals |
| Role Descriptions | High | Details for each position |
| Employment Dates | High | Timeline for work history |
| Skills & Tools | Medium | Specific design tools |
| Contact Email | High | Primary contact method |

---

## Proposed Site Architecture

```
/ (Home)
├── /work (Case Studies Index)
│   ├── /work/[slug] (Case Study Detail)
│   ├── /work/[slug] (Case Study Detail)
│   └── /work/[slug] (Case Study Detail)
├── /about (About Page)
├── /experience (Resume/Experience)
└── /contact (Contact Page)
```

---

## Page Structure & Content Mapping

### 1. Home Page (`/`)

**Purpose:** First impression, showcase best work, direct visitors to key areas

**Sections:**
1. **Hero Section**
   - Name: "Marquise Fleming"
   - Title: "UI/UX Designer" (or custom tagline)
   - TODO: Compelling headline
   - CTA: "View Work" button

2. **Selected Work Grid**
   - 3-4 featured case studies
   - Thumbnail + title + brief description
   - TODO: Case study content required

3. **Brief Introduction**
   - 2-3 sentences about approach
   - TODO: Introduction copy

4. **Footer**
   - Navigation links
   - Social links (LinkedIn, Behance)
   - Copyright

### 2. Work Page (`/work`)

**Purpose:** Showcase all projects with filterable grid

**Sections:**
1. **Page Header**
   - Title: "Work" or "Selected Projects"
   - TODO: Brief intro paragraph

2. **Project Grid**
   - All case studies displayed
   - Thumbnail, title, company, tags
   - TODO: 3-5 case studies needed

### 3. Case Study Detail (`/work/[slug]`)

**Purpose:** Deep dive into individual projects

**Sections:**
1. **Hero**
   - Project title
   - Company/client
   - Role, timeline
   - TODO: Hero image

2. **Overview**
   - Project summary
   - TODO: Overview content

3. **Problem**
   - Challenge description
   - TODO: Problem statement

4. **Process**
   - Research findings
   - Design explorations
   - Iterations
   - TODO: Process documentation + images

5. **Solution**
   - Final design description
   - TODO: Solution content + images

6. **Outcomes**
   - Results/metrics
   - TODO: Impact data (don't embellish)

7. **Navigation**
   - Previous/Next project links

### 4. About Page (`/about`)

**Purpose:** Personal brand, story, and philosophy

**Sections:**
1. **Introduction**
   - Name, photo, tagline
   - TODO: Headshot image

2. **Story/Background**
   - Career journey narrative
   - TODO: Personal story

3. **Design Philosophy**
   - Approach to design
   - TODO: Philosophy statement

4. **Current Focus**
   - What you're working on now
   - TODO: Current focus description

### 5. Experience Page (`/experience`)

**Purpose:** Professional resume and credentials

**Sections:**
1. **Work History**
   - Verified companies:
     - ABM Industries (Manager, UI & UX)
     - Y Media Labs (Senior UI & UX Designer)
     - Province Brands of Canada (UI & UX Designer)
     - You42 (UI & UX Designer)
     - Devign (UI & UX Designer)
     - The Creative Momentum (UI & UX Designer)
     - Peterson School of Tennis (UI Designer)
   - TODO: Dates and descriptions for each

2. **Education**
   - Kennesaw State University - Information Technology
   - IxDF - UX Designer Certification
   - TODO: Years

3. **Skills**
   - TODO: Specific tools and skills

### 6. Contact Page (`/contact`)

**Purpose:** Enable professional inquiries

**Sections:**
1. **Contact Message**
   - Friendly invitation to connect
   - TODO: Contact copy

2. **Contact Methods**
   - Email: TODO
   - LinkedIn: https://www.linkedin.com/in/marquise-fleming/
   - Behance: https://www.behance.net/marquisefl53ff

---

## Content Flags & TODOs

### Critical (Blocking Launch)
- [ ] TODO: Professional headshot
- [ ] TODO: At least 2 case studies with full content
- [ ] TODO: Contact email address
- [ ] TODO: Hero headline/tagline

### High Priority
- [ ] TODO: Bio/about content
- [ ] TODO: Employment dates
- [ ] TODO: Role descriptions
- [ ] TODO: Case study images

### Medium Priority
- [ ] TODO: Skills/tools list
- [ ] TODO: Additional social links
- [ ] TODO: Contact page message

### Optional/Nice to Have
- [ ] TODO: Dribbble profile
- [ ] TODO: Twitter/X profile
- [ ] TODO: Resume PDF download

---

## Design Direction (Visual Inspiration)

**Reference:** mason-wong.com (visual/interaction inspiration only)

**Style Notes:**
- Black and white only (strict)
- No colors, no gradients
- Editorial, confident, minimal aesthetic
- Strong typography hierarchy
- Generous whitespace
- Subtle, intentional motion
- Premium, readable case studies

**Key Principles:**
1. Contrast through scale and spacing
2. Typography as primary design element
3. Motion enhances, never distracts
4. Content-first approach
5. Performance-optimized

---

## Technical Implementation Plan

**Tech Stack:** Astro (for performance, simplicity, and content-first approach)

**Reasoning:**
- Static site generation for speed
- Excellent content management
- Island architecture for interactive elements
- Simple deployment
- Great DX with TypeScript support

**Structure:**
```
src/
├── components/    # Reusable UI components
├── layouts/       # Page layouts
├── pages/         # Route pages
├── content/       # Markdown/JSON content
├── styles/        # Global styles
└── assets/        # Images, fonts
```

---

## Next Steps

1. Initialize Astro project
2. Create component library (Header, Footer, ProjectCard, etc.)
3. Build page templates with TODO placeholders
4. Implement responsive design
5. Add subtle animations/transitions
6. Ensure accessibility compliance
7. Deploy for content review
