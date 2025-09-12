import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Нужно ли бронировать столик заранее?",
    answer:
      "Да, мы рекомендуем бронировать столик заранее, особенно на выходные и праздничные дни. Вы можете забронировать через нашу форму на сайте или по телефону.",
  },
  {
    question: "Есть ли у вас вегетарианские блюда?",
    answer:
      "Конечно! У нас есть широкий выбор вегетарианских и веганских блюд. Наши повара с удовольствием адаптируют блюда под ваши предпочтения.",
  },
  {
    question: "Можно ли провести частное мероприятие?",
    answer:
      "Да, у нас есть отдельный зал для частных мероприятий до 30 человек. Мы организуем корпоративы, дни рождения и другие торжества.",
  },
  {
    question: "Какие способы оплаты вы принимаете?",
    answer:
      "Мы принимаем наличные, банковские карты всех основных платежных систем, а также бесконтактные платежи через телефон.",
  },
  {
    question: "Есть ли парковка рядом с рестораном?",
    answer: "Да, рядом с рестораном есть платная парковка. Также в шаговой доступности находится станция метро.",
  },
  {
    question: "Работаете ли вы на доставку?",
    answer:
      "В настоящее время мы не предоставляем услуги доставки, но вы можете заказать блюда на вынос, предварительно позвонив нам.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Часто задаваемые вопросы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ответы на самые популярные вопросы наших гостей
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-border rounded-xl px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
