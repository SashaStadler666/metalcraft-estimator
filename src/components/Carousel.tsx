import * as React from "react"

type Slide = {
  title: string
  subtitle: string
  cta?: { label: string; href: string; kind?: "primary" | "secondary" }
  image?: string // opcional, se quiser usar imagens reais
}

const slides: Slide[] = [
  {
    title: "Corte a laser de precisão",
    subtitle: "Qualidade industrial em inox, carbono e alumínio.",
    cta: { label: "Solicite Orçamento", href: "#contato", kind: "primary" },
  },
  {
    title: "Solda & Dobra profissionais",
    subtitle: "Estruturas duráveis com acabamento superior.",
    cta: { label: "Ver Serviços", href: "#servicos", kind: "secondary" },
  },
  {
    title: "Fabricação sob medida",
    subtitle: "Do esboço ao produto final, com repetibilidade CNC.",
    cta: { label: "Ver Produtos", href: "#produtos", kind: "secondary" },
  },
]

export function Carousel() {
  const [idx, setIdx] = React.useState(0)
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
      className="container scroll-mt-24 mt-8"
      aria-roledescription="carrossel"
    >
      <div
        className="relative overflow-hidden rounded-3xl border border-black/10 bg-white min-h-[320px]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${total}, 100%)`,
            transform: `translateX(-${idx * 100}%)`,
            transition: "transform .5s ease",
          }}
        >
          {slides.map((sl, i) => (
            <div
              key={i}
              className="p-7 md:p-10 grid gap-8 md:gap-12 md:grid-cols-2 items-center"
            >
              <div>
                <h1 className="m-0 text-3xl md:text-5xl leading-tight">
                  {sl.title}
                </h1>
                <p className="mt-2 text-lg text-black/70 max-w-xl">
                  {sl.subtitle}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {sl.cta && (
                    <a
                      href={sl.cta.href}
                      className={
                        sl.cta.kind === "secondary"
                          ? "inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-3 font-semibold"
                          : "inline-flex items-center justify-center rounded-xl bg-[#FF2E3E] text-white px-4 py-3 font-semibold shadow-lg"
                      }
                    >
                      {sl.cta.label}
                    </a>
                  )}
                  <a
                    href="https://wa.me/5541988511192?text=Olá,%20gostaria%20de%20um%20orçamento."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-[#1E3AFF] text-[#1E3AFF] bg-white px-4 py-3 font-semibold"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
              <div
                className={`min-h-[240px] rounded-2xl border border-black/10 ${
                  i % 2
                    ? "bg-[#F3F5F8]"
                    : "bg-[radial-gradient(1200px_500px_at_85%_10%,rgba(30,58,255,.08),transparent),radial-gradient(800px_300px_at_10%_35%,rgba(255,46,62,.08),transparent)]"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Setas */}
        <button
          aria-label="Anterior"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-xl border border-black/10 bg-white/90 px-3 py-2 backdrop-blur"
        >
          ‹
        </button>
        <button
          aria-label="Próximo"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl border border-black/10 bg-white/90 px-3 py-2 backdrop-blur"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-2.5 w-2.5 rounded-full ${
                idx === i ? "bg-[#1E3AFF]" : "bg-black/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
