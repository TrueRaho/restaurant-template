import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ExternalLink } from "lucide-react"

const reviews = [
  {
    name: "Анна Петрова",
    rating: 5,
    text: "Потрясающий ресторан! Обслуживание на высшем уровне, а блюда просто тают во рту. Обязательно вернемся еще раз.",
    avatar: "/professional-woman-portrait.png",
  },
  {
    name: "Михаил Сидоров",
    rating: 5,
    text: "Отличная атмосфера для романтического ужина. Вино подобрали идеально, стейк был приготовлен в точности как просил.",
    avatar: "/professional-man-portrait.png",
  },
  {
    name: "Елена Козлова",
    rating: 5,
    text: "Праздновали годовщину в Bella Vista. Все было безупречно - от подачи блюд до внимания персонала. Спасибо за незабываемый вечер!",
    avatar: "/elegant-woman-portrait.png",
  },
  {
    name: "Дмитрий Волков",
    rating: 5,
    text: "Лучший ресторан в городе! Каждое блюдо - произведение искусства. Рекомендую всем, кто ценит качественную кухню.",
    avatar: "/confident-businessman.png",
  },
]

export function ReviewsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Отзывы гостей</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят наши гости о Bella Vista
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">&quot;{review.text}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-xl transition-all duration-300 bg-transparent"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Смотреть все на Google Maps
          </Button>
        </div>
      </div>
    </section>
  )
}
