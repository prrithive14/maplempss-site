'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ServiceImage({ localSrc, fallbackSrc, alt, className = "object-cover", priority = false }) {
  const [src, setSrc] = useState(localSrc)

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      priority={priority}
      onError={() => setSrc(fallbackSrc)}
    />
  )
}
