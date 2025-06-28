import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="pt-20 pb-8 bg-gradient-to-br from-rose-50 to-pink-100 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-sm mx-auto text-center space-y-6">
          {/* Profile Photo */}
          <div className="relative mx-auto w-32 h-32 mb-6">
            <img
              src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?auto=format&fit=crop&w=300&q=80"
              alt="Анна Смирнова - Парикмахер"
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <Icon name="Check" size={16} className="text-white" />
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">Анна Смирнова</h1>
            <p className="text-lg text-rose-600 font-medium">
              Парикмахер-стилист
            </p>
            <p className="text-sm text-gray-600">
              8 лет опыта • 500+ клиентов • Рейтинг 4.9
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              size="lg"
              onClick={scrollToBooking}
              className="bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-xl"
            >
              <Icon name="Calendar" size={18} className="mr-2" />
              Записаться
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-rose-500 text-rose-600 hover:bg-rose-50 py-3 rounded-xl"
            >
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-3 pt-4">
            <div className="bg-white rounded-xl p-4 shadow-sm flex items-center space-x-3">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                <Icon name="Phone" size={20} className="text-rose-600" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-gray-900">
                  +7 (999) 123-45-67
                </div>
                <div className="text-sm text-gray-500">
                  Звонить с 9:00 до 21:00
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm flex items-center space-x-3">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                <Icon name="MapPin" size={20} className="text-rose-600" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-gray-900">
                  ул. Красивая, 15
                </div>
                <div className="text-sm text-gray-500">
                  Санкт-Петербург, м. Невский
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm flex items-center space-x-3">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                <Icon name="Instagram" size={20} className="text-rose-600" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-gray-900">
                  @anna_stylist_spb
                </div>
                <div className="text-sm text-gray-500">
                  Мои работы в Instagram
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
