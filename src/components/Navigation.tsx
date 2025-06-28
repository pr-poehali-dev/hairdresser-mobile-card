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
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-rose-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="text-lg font-bold text-rose-600">💇‍♀️ Анна</div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
          >
            <Icon name={isOpen ? "X" : "Menu"} size={20} />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="py-4 border-t border-rose-100 bg-white">
            <div className="flex flex-col space-y-2">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("hero")}
                className="text-left justify-start py-3"
              >
                <Icon name="User" size={16} className="mr-3" />О мне
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("pricing")}
                className="text-left justify-start py-3"
              >
                <Icon name="Scissors" size={16} className="mr-3" />
                Услуги
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("gallery")}
                className="text-left justify-start py-3"
              >
                <Icon name="Image" size={16} className="mr-3" />
                Работы
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("booking")}
                className="text-left justify-start py-3"
              >
                <Icon name="Calendar" size={16} className="mr-3" />
                Записаться
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
