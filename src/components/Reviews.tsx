import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Мария Петрова",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "2 дня назад",
      text: "Анна — настоящий профессионал! Сделала шикарное окрашивание балаяж, результат превзошел все ожидания. Обязательно вернусь еще!",
      service: "Балаяж",
    },
    {
      id: 2,
      name: "Елена Смирнова",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "1 неделю назад",
      text: "Потрясающая стрижка! Анна учла все мои пожелания и создала идеальный образ. Салон очень уютный, а атмосфера располагающая.",
      service: "Женская стрижка",
    },
    {
      id: 3,
      name: "Алексей Иванов",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "2 недели назад",
      text: "Отличный мастер! Быстро, качественно и по доступной цене. Стрижка держится долго и выглядит стильно. Рекомендую!",
      service: "Мужская стрижка",
    },
    {
      id: 4,
      name: "Анастасия Козлова",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "3 недели назад",
      text: "Делала свадебную укладку у Анны. Все было идеально! Прическа продержалась весь день, несмотря на активные танцы. Спасибо огромное!",
      service: "Свадебная укладка",
    },
    {
      id: 5,
      name: "Ольга Федорова",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "1 месяц назад",
      text: "Впервые решилась на короткую стрижку, и не пожалела! Анна подобрала идеальную форму под мое лицо. Чувствую себя намного увереннее!",
      service: "Короткая стрижка",
    },
    {
      id: 6,
      name: "Дарья Волкова",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      date: "1 месяц назад",
      text: "Хожу к Анне уже год. Всегда довольна результатом! Профессиональный подход, качественные материалы и приятная атмосфера.",
      service: "Постоянный клиент",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={`${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Нас рекомендуют друзьям и возвращаются снова. Читайте честные отзывы
            наших клиентов.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">4.9</div>
              <div className="flex justify-center mb-2">{renderStars(5)}</div>
              <div className="text-sm text-gray-600">Средний рейтинг</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                500+
              </div>
              <div className="text-sm text-gray-600">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Возвращаются снова</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">
                      {review.name}
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <div className="text-sm text-gray-500">{review.date}</div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{review.text}"
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                    {review.service}
                  </span>
                  <Icon name="Quote" size={20} className="text-purple-200" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Хотите оставить отзыв?
            </h3>
            <p className="text-gray-600 mb-6">
              Мы ценим мнение каждого клиента и стремимся становиться лучше.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2 text-gray-600">
                <Icon
                  name="MessageCircle"
                  size={20}
                  className="text-purple-600"
                />
                <span>Оставить отзыв на сайте</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Icon name="Instagram" size={20} className="text-purple-600" />
                <span>Отметить в Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
