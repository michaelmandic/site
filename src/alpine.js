// Custom Alpine.js entry point - only load what we need
import Alpine from 'alpinejs'

// Only register the directives you actually use
// Based on your code, you use: x-data, x-show, x-cloak, x-transition, @click
// This is already the minimal Alpine setup, but you could further optimize
// by creating custom directives if needed

window.Alpine = Alpine
Alpine.start()

// Export default for Astro integration
export default Alpine
