import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

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
    <section id="gallery" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-sm mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Мои работы</h2>
            <p className="text-sm text-gray-600">
              Результаты, которыми я горжусь
            </p>
          </div>

          {/* Compact Gallery Grid */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {works.slice(0, 4).map((work) => (
              <div
                key={work.id}
                className="relative aspect-square rounded-lg overflow-hidden"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="text-xs font-medium">{work.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600 mb-3">
              Больше работ в Instagram
            </p>
            <Button
              variant="outline"
              size="sm"
              className="border-rose-500 text-rose-600 hover:bg-rose-50 px-6 py-2 rounded-xl"
            >
              <Icon name="Instagram" size={16} className="mr-2" />
              @anna_stylist_spb
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
