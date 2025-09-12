"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Контакты</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Мы всегда рады видеть вас в Bella Vista
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      ул. Тверская, 15
                      <br />
                      Москва, 125009
                      <br />
                      Россия
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Часы работы</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Понедельник - Четверг: 12:00 - 23:00</p>
                      <p>Пятница - Суббота: 12:00 - 01:00</p>
                      <p>Воскресенье: 12:00 - 22:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-primary hover:text-primary/80 text-base"
                      onClick={() => window.open("tel:+74951234567")}
                    >
                      +7 (495) 123-45-67
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Map */}
          <div className="h-96 lg:h-full min-h-[400px]">
            <div className="w-full h-full bg-muted rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Интерактивная карта Google Maps
                  <br />
                  будет здесь
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
