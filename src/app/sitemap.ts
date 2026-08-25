import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://bagussajiwo.my.id',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },
    ]
}