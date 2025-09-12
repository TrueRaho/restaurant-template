import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"

const menuCategories = [
  {
    title: "Закуски",
    items: [
      {
        name: "Карпаччо из говядины",
        description: "Тонко нарезанная говядина с рукколой и пармезаном",
        price: "1,200₽",
        image: "/images/carpaccio.png",
      },
      {
        name: "Тартар из лосося",
        description: "Свежий лосось с авокадо и лаймом",
        price: "1,400₽",
        image: "/salmon-tartare-with-avocado-and-lime.jpg",
      },
      {
        name: "Брускетта с томатами",
        description: "Хрустящий хлеб с томатами и базиликом",
        price: "800₽",
        image: "/tomato-basil-bruschetta.png",
      },
    ],
  },
  {
    title: "Основные блюда",
    items: [
      {
        name: "Стейк Рибай",
        description: "Мраморная говядина с овощами гриль",
        price: "2,800₽",
        image: "/ribeye-steak-with-grilled-vegetables.jpg",
      },
      {
        name: "Лосось на гриле",
        description: "Филе лосося с киноа и спаржей",
        price: "2,200₽",
        image: "/grilled-salmon-with-quinoa-and-asparagus.jpg",
      },
      {
        name: "Ризотто с трюфелями",
        description: "Кремовое ризотто с белыми трюфелями",
        price: "1,800₽",
        image: "/truffle-risotto-creamy-white-truffles.jpg",
      },
    ],
  },
  {
    title: "Десерты",
    items: [
      {
        name: "Тирамису",
        description: "Классический итальянский десерт",
        price: "600₽",
        image: "/classic-tiramisu-italian-dessert.jpg",
      },
      {
        name: "Панна котта",
        description: "Нежный крем с ягодным соусом",
        price: "550₽",
        image: "/panna-cotta-with-berry-sauce.jpg",
      },
      {
        name: "Шоколадный фондан",
        description: "Теплый шоколадный кекс с мороженым",
        price: "650₽",
        image: "/chocolate-fondant-with-ice-cream.jpg",
      },
    ],
  },
  {
    title: "Напитки",
    items: [
      {
        name: "Эспрессо",
        description: "Классический итальянский кофе",
        price: "200₽",
        image: "/espresso-coffee-cup-italian-style.jpg",
      },
      {
        name: "Вино дня",
        description: "Рекомендация сомелье",
        price: "от 400₽",
        image: "/wine-glass-red-wine-elegant.jpg",
      },
      {
        name: "Авторский коктейль",
        description: "Уникальный микс от барменов",
        price: "800₽",
        image: "/craft-cocktail-bartender-special-mix.jpg",
      },
    ],
  },
]

export function MenuSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Меню</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Наше меню создано с любовью к деталям и страстью к совершенству
          </p>
        </div>

        <div className="space-y-16 mb-16">
          {menuCategories.map((category, index) => (
            <div key={index} className="space-y-8">
              <h3 className="text-3xl font-bold text-center text-primary">{category.title}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <Card
                    key={itemIndex}
                    className="bg-card border-border overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <CardContent className="p-6 space-y-3">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-xl group-hover:text-primary transition-colors duration-300">
                          {item.name}
                        </h4>
                        <span className="text-primary font-bold text-lg shrink-0 ml-4">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-xl transition-all duration-300 bg-transparent hover:shadow-lg hover:shadow-primary/20"
          >
            <Download className="mr-2 h-5 w-5" />
            Скачать PDF меню
          </Button>
        </div>
      </div>
    </section>
  )
}
