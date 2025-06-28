import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все работы" },
    { id: "color", name: "Окрашивание" },
    { id: "cut", name: "Стрижки" },
    { id: "style", name: "Укладки" },
  ];

  const works = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1595475207225-428b62bda831?auto=format&fit=crop&w=600&q=80",
      category: "color",
      title: "Балаяж на темные волосы",
      description: "Натуральный переход оттенков",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=600&q=80",
      category: "cut",
      title: "Каскадная стрижка",
      description: "Объем и текстура",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=80",
      category: "style",
      title: "Голливудские локоны",
      description: "Вечерняя укладка",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1588530089724-0a492aa1f48b?auto=format&fit=crop&w=600&q=80",
      category: "color",
      title: "Платиновый блонд",
      description: "Холодные оттенки",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=600&q=80",
      category: "cut",
      title: "Короткий боб",
      description: "Современная классика",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80",
      category: "style",
      title: "Пляжные волны",
      description: "Естественная укладка",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80",
      category: "color",
      title: "Омбре розовое",
      description: "Яркий акцент",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80",
      category: "cut",
      title: "Пикси стрижка",
      description: "Смелое решение",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1605980704561-967f6449f21d?auto=format&fit=crop&w=600&q=80",
      category: "style",
      title: "Ретро укладка",
      description: "Винтажный стиль",
    },
  ];

  const filteredWorks =
    activeCategory === "all"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Галерея работ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Более 500 довольных клиентов доверили нам свой образ. Посмотрите на
            результаты нашей работы.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`${
                  activeCategory === category.id
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "border-purple-600 text-purple-600 hover:bg-purple-50"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <Card
              key={work.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{work.title}</h3>
                    <p className="text-sm text-gray-200">{work.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Хотите увидеть больше работ? Подписывайтесь на наш Instagram!
          </p>
          <Button
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50"
          >
            @anna_stylist_spb
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
