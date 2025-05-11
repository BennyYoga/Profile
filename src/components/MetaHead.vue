<script>
import meta from '../data/meta.js'

export default {
  name: 'MetaHead',
  data() {
    return {
      meta,
    }
  },
  methods: {
    createMetaTag(property, content) {
      let tag = document.querySelector(`meta[property="${property}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', property)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    },
  },
  mounted() {
    // Standard meta tags
    document.title = this.meta.title

    // Basic meta
    this.createMetaTag('description', this.meta.description)
    this.createMetaTag('keywords', this.meta.keywords)

    // Open Graph / Facebook
    this.createMetaTag('og:title', this.meta.title)
    this.createMetaTag('og:description', this.meta.description)
    this.createMetaTag('og:image', this.meta.image)
    this.createMetaTag('og:url', this.meta.url)
    this.createMetaTag('og:type', 'website')

    // Twitter
    this.createMetaTag('twitter:card', this.meta.twitterCard)
    this.createMetaTag('twitter:title', this.meta.title)
    this.createMetaTag('twitter:description', this.meta.description)
    this.createMetaTag('twitter:image', this.meta.image)

    // WhatsApp specific
    this.createMetaTag('og:image:width', '1200')
    this.createMetaTag('og:image:height', '630')
  },
}
</script>
