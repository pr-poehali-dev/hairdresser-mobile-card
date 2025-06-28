import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const services = [
    {
      category: "Стрижки",
      icon: "Scissors",
      items: [
        { name: "Женская стрижка", price: "от 2000", duration: "60 мин" },
        { name: "Мужская стрижка", price: "от 1500", duration: "45 мин" },
        { name: "Детская стрижка", price: "от 1200", duration: "30 мин" },
        { name: "Стрижка челки", price: "от 800", duration: "20 мин" },
      ],
    },
    {
      category: "Окрашивание",
      icon: "Palette",
      items: [
        {
          name: "Окрашивание в один тон",
          price: "от 3500",
          duration: "120 мин",
        },
        { name: "Мелирование", price: "от 4500", duration: "150 мин" },
        { name: "Балаяж", price: "от 5500", duration: "180 мин" },
        { name: "Тонирование", price: "от 2500", duration: "90 мин" },
      ],
    },
    {
      category: "Укладки",
      icon: "Sparkles",
      items: [
        { name: "Повседневная укладка", price: "от 1800", duration: "45 мин" },
        { name: "Вечерняя укладка", price: "от 2500", duration: "60 мин" },
        { name: "Свадебная укладка", price: "от 4000", duration: "90 мин" },
        { name: "Локоны", price: "от 2200", duration: "50 мин" },
      ],
    },
  ];

  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Прайс-лист услуг
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Прозрачные цены на все услуги. Консультация всегда бесплатна.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-purple-600"
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {service.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                  >
                    <div>
                      <div className="font-medium text-gray-900">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {item.duration}
                      </div>
                    </div>
                    <div className="font-bold text-purple-600 text-lg">
                      {item.price} ₽
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-purple-50 rounded-2xl p-8 mb-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Clock" size={24} className="text-purple-600" />
                <span className="text-gray-700">Работаем 9:00-21:00</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Icon name="CreditCard" size={24} className="text-purple-600" />
                <span className="text-gray-700">Наличные и карты</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Gift" size={24} className="text-purple-600" />
                <span className="text-gray-700">Система скидок</span>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            onClick={scrollToBooking}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
          >
            Записаться на услугу
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
