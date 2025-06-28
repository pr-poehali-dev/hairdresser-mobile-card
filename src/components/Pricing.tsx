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
    <section id="pricing" className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-sm mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Мои услуги</h2>
            <p className="text-sm text-gray-600">
              Прозрачные цены, качественный результат
            </p>
          </div>

          <div className="space-y-3">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                    <Icon
                      name={service.icon as any}
                      size={16}
                      className="text-rose-600"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    {service.category}
                  </h3>
                </div>
                <div className="space-y-2">
                  {service.items.slice(0, 3).map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-gray-700">{item.name}</span>
                      <span className="font-medium text-rose-600">
                        {item.price} ₽
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Button
              size="sm"
              onClick={scrollToBooking}
              className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-xl"
            >
              Выбрать услугу
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
