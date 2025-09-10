import * as React from "react"
import siteContent from '@/content/site.json'
import { Button } from '@/components/ui/button'

interface CarouselProps {
  onQuoteClick?: () => void;
}

export function Carousel({ onQuoteClick }: CarouselProps) {
  const [idx, setIdx] = React.useState(0)
  const slides = siteContent.slides
  const total = slides.length
  const go = (n: number) => setIdx((p) => (n + total) % total)
  const next = () => go(idx + 1)
  const prev = () => go(idx - 1)

  // autoplay
  React.useEffect(() => {
    const id = window.setInterval(next, 6000)
    return () => window.clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx])

  // swipe
  const startX = React.useRef<number | null>(null)
  const onTouchStart = (e: React.TouchEvent) => (startX.current = e.touches[0].clientX)
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return
    const dx = e.changedTouches[0].clientX - startX.current
    if (Math.abs(dx) > 40) (dx < 0 ? next() : prev())
    startX.current = null
  }

  return (
    <section
      id="home"
      className="relative min-h-[380px] max-h-[720px] h-[60vh] overflow-hidden scroll-mt-24"
      aria-roledescription="carrossel"
    >
      <div
        className="relative w-full h-full bg-gradient-hero"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="grid h-full"
          style={{
            gridTemplateColumns: `repeat(${total}, 100%)`,
            transform: `translateX(-${idx * 100}%)`,
            transition: "transform .5s ease",
          }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="flex items-center justify-center h-full">
              <div className="container-industrial">
                <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
                  <div className="text-white">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-xl">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {slide.cta && (
                        <Button
                          variant={slide.cta.variant === "primary" ? "secondary" : "outline"}
                          size="lg"
                          asChild
                          className="text-lg px-8 py-4 h-auto"
                        >
                          <a href={slide.cta.href}>
                            {slide.cta.label}
                          </a>
                        </Button>
                      )}
                      <Button
                        variant="whatsapp"
                        size="lg"
                        asChild
                        className="text-lg px-8 py-4 h-auto"
                      >
                        <a
                          href={`https://wa.me/${siteContent.brand.whatsapp}?text=${encodeURIComponent(siteContent.contact.whatsappText)}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div
                      className={`min-h-[300px] rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 ${
                        i % 2
                          ? "bg-gradient-to-br from-white/20 to-white/5"
                          : "bg-gradient-to-tl from-accent/20 to-primary/20"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Setas */}
        <button
          aria-label="Anterior"
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-colors flex items-center justify-center text-xl font-bold"
        >
          ‹
        </button>
        <button
          aria-label="Próximo"
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-colors flex items-center justify-center text-xl font-bold"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute inset-x-0 bottom-6 flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-3 w-3 rounded-full transition-all ${
                idx === i ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
