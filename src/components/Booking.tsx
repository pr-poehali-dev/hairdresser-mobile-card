import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    comment: "",
  });

  const services = [
    "Женская стрижка",
    "Мужская стрижка",
    "Окрашивание в один тон",
    "Мелирование",
    "Балаяж",
    "Укладка",
    "Консультация",
  ];

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be form submission logic
    alert("Спасибо за запись! Мы свяжемся с вами в ближайшее время.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Запись онлайн
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Забронируйте удобное время прямо сейчас. Мы свяжемся с вами для
            подтверждения записи.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Контактная информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Icon
                        name="Phone"
                        size={24}
                        className="text-purple-600"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Телефон</div>
                      <div className="text-gray-600">+7 (999) 123-45-67</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Icon
                        name="MapPin"
                        size={24}
                        className="text-purple-600"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Адрес</div>
                      <div className="text-gray-600">
                        ул. Красивая, 15, Санкт-Петербург
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Icon
                        name="Clock"
                        size={24}
                        className="text-purple-600"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Режим работы
                      </div>
                      <div className="text-gray-600">Пн-Вс: 9:00 - 21:00</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Icon
                        name="Instagram"
                        size={24}
                        className="text-purple-600"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Instagram
                      </div>
                      <div className="text-gray-600">@anna_stylist_spb</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Почему выбирают нас?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" size={20} className="text-purple-600" />
                    <span className="text-gray-700">
                      8 лет профессионального опыта
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" size={20} className="text-purple-600" />
                    <span className="text-gray-700">
                      Индивидуальный подход к каждому клиенту
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" size={20} className="text-purple-600" />
                    <span className="text-gray-700">
                      Современные техники и материалы
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" size={20} className="text-purple-600" />
                    <span className="text-gray-700">
                      Гарантия качества на все услуги
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <Card className="p-6">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Форма записи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Введите ваше имя"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Услуга *</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        handleInputChange("service", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Дата *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          handleInputChange("date", e.target.value)
                        }
                        min={new Date().toISOString().split("T")[0]}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Время *</Label>
                      <Select
                        value={formData.time}
                        onValueChange={(value) =>
                          handleInputChange("time", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите время" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comment">Комментарий</Label>
                    <Textarea
                      id="comment"
                      placeholder="Расскажите о ваших пожеланиях..."
                      value={formData.comment}
                      onChange={(e) =>
                        handleInputChange("comment", e.target.value)
                      }
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-3"
                    size="lg"
                  >
                    Записаться
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
