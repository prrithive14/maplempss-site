# MAPLE MPSS — Image Upload Guide

## How it works
Upload an image with the EXACT filename listed below into the EXACT folder.
The website will automatically show it. No code changes needed.

---

## Folder structure to create in your repo:

```
public/
  images/
    hero.jpg
    about.jpg
    services/
      cnc-machining.jpg
      cad-design.jpg
      sourcing.jpg
      placement.jpg
      quality-inspection.jpg
      engineering.jpg
      cnc-gallery-1.jpg
      cnc-gallery-2.jpg
      cnc-gallery-3.jpg
      cnc-gallery-4.jpg
    case-studies/
      packaging-equipment.jpg
      industrial-automation.jpg
    logos/
      client-1.png
      client-2.png
      client-3.png
      client-4.png
      client-5.png
```

---

## Image → Page mapping

| Upload this file | Shows up here |
|---|---|
| `public/images/hero.jpg` | Homepage — big hero image on the right |
| `public/images/about.jpg` | About page — Our Story section |
| `public/images/services/cnc-machining.jpg` | CNC Machining page — hero image |
| `public/images/services/cnc-gallery-1.jpg` | CNC Machining page — Sample Work grid (slot 1) |
| `public/images/services/cnc-gallery-2.jpg` | CNC Machining page — Sample Work grid (slot 2) |
| `public/images/services/cnc-gallery-3.jpg` | CNC Machining page — Sample Work grid (slot 3) |
| `public/images/services/cnc-gallery-4.jpg` | CNC Machining page — Sample Work grid (slot 4) |
| `public/images/services/cad-design.jpg` | CAD Design page — hero image |
| `public/images/services/sourcing.jpg` | Sourcing & Procurement page — hero image |
| `public/images/services/placement.jpg` | Placement Services page — hero image |
| `public/images/services/quality-inspection.jpg` | Quality Inspection page — hero image |
| `public/images/services/engineering.jpg` | Engineering Support page — hero image |
| `public/images/case-studies/packaging-equipment.jpg` | Case Studies page — first case study |
| `public/images/case-studies/industrial-automation.jpg` | Case Studies page — second case study |
| `public/images/logos/client-1.png` | Homepage — client logo 1 (use transparent PNG) |
| `public/images/logos/client-2.png` | Homepage — client logo 2 |
| `public/images/logos/client-3.png` | Homepage — client logo 3 |
| `public/images/logos/client-4.png` | Homepage — client logo 4 |
| `public/images/logos/client-5.png` | Homepage — client logo 5 |

---

## Rules
- Filenames must match EXACTLY (lowercase, hyphens, no spaces)
- Recommended format: JPG for photos, PNG for logos
- Recommended size: 1200x900px for hero images, 500x500px for gallery/logos
- After uploading, Vercel redeploys automatically in ~1 minute
