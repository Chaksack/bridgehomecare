interface CalendlyGlobal {
  initPopupWidget: (options: { url: string }) => void
}

declare global {
  interface Window {
    Calendly?: CalendlyGlobal
  }
}

export function useCalendly() {
  const config = useRuntimeConfig()
  const calendlyUrl = config.public.calendlyUrl as string

  function openPopup() {
    if (import.meta.server) return

    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyUrl })
      return
    }

    // Widget script is loaded with `defer`; on a very fast click it may not
    // have executed yet. Fall back to loading it on demand.
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.onload = () => window.Calendly?.initPopupWidget({ url: calendlyUrl })
    document.body.appendChild(script)
  }

  return { calendlyUrl, openPopup }
}
