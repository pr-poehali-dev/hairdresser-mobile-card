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
    <section id="booking" className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-sm mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Записаться</h2>
            <p className="text-sm text-gray-600">
              Выберите удобный способ связи
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-3 mb-6">
            <div className="bg-rose-50 rounded-xl p-4 border border-rose-200">
              <div className="flex items-center space-x-3 mb-2">
                <Icon name="Phone" size={20} className="text-rose-600" />
                <span className="font-medium text-gray-900">Позвонить</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Быстрая запись по телефону
              </p>
              <Button
                size="sm"
                className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-lg"
              >
                +7 (999) 123-45-67
              </Button>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <div className="flex items-center space-x-3 mb-2">
                <Icon
                  name="MessageCircle"
                  size={20}
                  className="text-blue-600"
                />
                <span className="font-medium text-gray-900">WhatsApp</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Удобное общение в мессенджере
              </p>
              <Button
                size="sm"
                variant="outline"
                className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 rounded-lg"
              >
                Написать в WhatsApp
              </Button>
            </div>

            <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <div className="flex items-center space-x-3 mb-2">
                <Icon name="Instagram" size={20} className="text-purple-600" />
                <span className="font-medium text-gray-900">Instagram</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Запись через Direct</p>
              <Button
                size="sm"
                variant="outline"
                className="w-full border-purple-500 text-purple-600 hover:bg-purple-50 rounded-lg"
              >
                @anna_stylist_spb
              </Button>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Icon name="Clock" size={18} className="text-gray-600" />
              <span className="font-medium text-gray-900">Режим работы</span>
            </div>
            <p className="text-sm text-gray-600">
              Понедельник - Воскресенье
              <br />
              9:00 - 21:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
