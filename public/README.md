# Public Assets Folder

This folder contains all static assets (images, videos, fonts, etc.) that can be accessed directly from your website.

## Folder Structure

```
public/
├── images/          # Put your images here (jpg, png, webp, svg, etc.)
├── videos/          # Put your videos here (mp4, webm, etc.)
└── README.md        # This file
```

## How to Use

### Images

1. **Place your image** in the `public/images/` folder
   - Example: `public/images/hero-image.jpg`

2. **Use in your components** with Next.js Image component:
```tsx
import Image from 'next/image'

<Image
  src="/images/hero-image.jpg"
  alt="Hero image"
  width={1920}
  height={1080}
  className="w-full h-auto"
/>
```

Or with regular img tag:
```tsx
<img src="/images/hero-image.jpg" alt="Hero image" />
```

### Videos

1. **Place your video** in the `public/videos/` folder
   - Example: `public/videos/demo-video.mp4`

2. **Use in your components**:
```tsx
<video
  src="/videos/demo-video.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-auto"
/>
```

## Important Notes

- Files in the `public` folder are served from the root URL (`/`)
- If you put a file at `public/images/photo.jpg`, access it as `/images/photo.jpg`
- The `public` folder name should NOT be included in the URL path
- Use Next.js `Image` component for better performance and optimization

## Example File Paths

| File Location | URL to Use |
|--------------|------------|
| `public/images/logo.png` | `/images/logo.png` |
| `public/videos/intro.mp4` | `/videos/intro.mp4` |
| `public/favicon.ico` | `/favicon.ico` |

