interface CalendlyGlobal {
  initPopupWidget: (options: { url: string }) => void
  initInlineWidget: (options: { url: string, parentElement: HTMLElement }) => void
}

declare global {
  interface Window {
    Calendly?: CalendlyGlobal
  }
}

const WIDGET_SRC = 'https://assets.calendly.com/assets/external/widget.js'

// Widget script is loaded with `defer`; it may not have executed yet when a
// component needs it. Fall back to loading it on demand.
function withCalendly(callback: (calendly: CalendlyGlobal) => void) {
  if (import.meta.server) return

  if (window.Calendly) {
    callback(window.Calendly)
    return
  }

  const script = document.createElement('script')
  script.src = WIDGET_SRC
  script.onload = () => window.Calendly && callback(window.Calendly)
  document.body.appendChild(script)
}

export function useCalendly() {
  const config = useRuntimeConfig()
  const calendlyUrl = config.public.calendlyUrl as string

  function openPopup() {
    withCalendly((calendly) => calendly.initPopupWidget({ url: calendlyUrl }))
  }

  // Calendly only auto-initialises `.calendly-inline-widget` elements present
  // when its script first runs, which misses client-rendered/navigated pages.
  function initInline(parentElement: HTMLElement) {
    withCalendly((calendly) => {
      if (parentElement.querySelector('iframe')) return
      calendly.initInlineWidget({ url: calendlyUrl, parentElement })
    })
  }

  return { calendlyUrl, openPopup, initInline }
}
