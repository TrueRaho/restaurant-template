export function AboutSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">О ресторане</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Bella Vista — это место, где традиции встречаются с инновациями. Наши шеф-повара создают уникальные блюда,
              используя только свежайшие ингредиенты и проверенные временем рецепты.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы гордимся атмосферой уюта и элегантности, которая делает каждый визит незабываемым. Добро пожаловать в
              мир изысканного вкуса.
            </p>
          </div>

          <div className="animate-fade-in">
            <img
              src="/chef-preparing-gourmet-dish-in-modern-kitchen.jpg"
              alt="Chef preparing food"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
