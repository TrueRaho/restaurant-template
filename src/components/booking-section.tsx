"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function BookingSection() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    name: "",
    contact: "",
    comment: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Booking submitted:", formData)
  }

  return (
    <section id="booking" className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Бронирование</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Забронируйте столик и насладитесь незабываемым вечером в Bella Vista
          </p>
        </div>

        <Card className="bg-background border-border shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Забронировать стол</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Дата</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="bg-input border-border"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Время</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, time: value })}>
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="Выберите время" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="18:00">18:00</SelectItem>
                      <SelectItem value="18:30">18:30</SelectItem>
                      <SelectItem value="19:00">19:00</SelectItem>
                      <SelectItem value="19:30">19:30</SelectItem>
                      <SelectItem value="20:00">20:00</SelectItem>
                      <SelectItem value="20:30">20:30</SelectItem>
                      <SelectItem value="21:00">21:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">Количество гостей</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, guests: value })}>
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="Выберите количество" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 гость</SelectItem>
                      <SelectItem value="2">2 гостя</SelectItem>
                      <SelectItem value="3">3 гостя</SelectItem>
                      <SelectItem value="4">4 гостя</SelectItem>
                      <SelectItem value="5">5 гостей</SelectItem>
                      <SelectItem value="6">6 гостей</SelectItem>
                      <SelectItem value="7">7+ гостей</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-input border-border"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Email</Label>
                  <Input
                    id="contact"
                    placeholder="email@example.com"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="bg-input border-border"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comment">Комментарий (необязательно)</Label>
                <Textarea
                  id="comment"
                  placeholder="Особые пожелания или комментарии..."
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  className="bg-input border-border min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg rounded-xl transition-all duration-300"
              >
                Отправить заявку
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
