import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-purple-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-purple-600">💇‍♀️ Стиль</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-purple-600"
            >
              Главная
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("pricing")}
              className="text-gray-700 hover:text-purple-600"
            >
              Прайс
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-purple-600"
            >
              Галерея
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("booking")}
              className="text-gray-700 hover:text-purple-600"
            >
              Запись
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("reviews")}
              className="text-gray-700 hover:text-purple-600"
            >
              Отзывы
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-purple-100">
            <div className="flex flex-col space-y-2">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("hero")}
                className="text-left justify-start"
              >
                Главная
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("pricing")}
                className="text-left justify-start"
              >
                Прайс
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("gallery")}
                className="text-left justify-start"
              >
                Галерея
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("booking")}
                className="text-left justify-start"
              >
                Запись
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("reviews")}
                className="text-left justify-start"
              >
                Отзывы
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
