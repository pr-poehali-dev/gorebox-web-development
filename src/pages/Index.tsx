import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDiscordClick = () => {
    alert('еще не готово:(');
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/gore_boxRU', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-black pointer-events-none" />
      
      <div className="relative z-10">
        <header className="container mx-auto px-4 py-6 relative">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-white">Gore</span>
              <span className="text-blue-600">Box</span>
              <span className="text-red-600">Ru</span>
            </h1>
            <nav className="hidden md:flex gap-6">
              <a href="#" className="hover:text-red-600 transition-colors">Главная</a>
              <a href="#" className="hover:text-red-600 transition-colors">Об игре</a>
              <a href="#" className="hover:text-red-600 transition-colors">Обновления</a>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <section className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
              <span className="text-white">Gore</span>
              <span className="text-blue-600">Box</span>
              <span className="text-red-600">Ru</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Лучшее русскоязычное сообщество в Gore Box
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg"
                onClick={() => setIsMenuOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all"
              >
                <Icon name="Users" className="mr-2" size={24} />
                Начать играть
              </Button>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: 'Palette',
                title: 'Арты',
                description: 'Креативные работы от сообщества',
                link: 'https://t.me/gore_boxRU/10'
              },
              {
                icon: 'Map',
                title: 'Карты',
                description: 'Уникальные карты для игры',
                link: 'https://t.me/gore_boxRU/116'
              },
              {
                icon: 'Puzzle',
                title: 'Моды',
                description: 'Лучшие модификации для игры',
                link: 'https://t.me/gore_boxRU/116'
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                onClick={() => window.open(feature.link, '_blank')}
                className="bg-gradient-to-b from-red-950/40 to-black border-red-900/50 p-6 hover:border-red-600/50 transition-all hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={32} className="text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-red-600">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </Card>
            ))}
          </section>

          <section className="text-center bg-gradient-to-r from-red-950/30 via-red-900/20 to-red-950/30 rounded-lg p-12 border border-red-900/30">
            <Icon name="Skull" size={64} className="text-red-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Заходи и веселись!</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Присоединяйся к нашему сообществу и будь в курсе всех обновлений, новостей и эксклюзивного контента
            </p>
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-bold"
            >
              Присоединиться
            </Button>
          </section>
        </main>

        <footer className="container mx-auto px-4 py-8 mt-16 border-t border-red-900/30">
          <div className="text-center text-gray-500">
            <p>GoreBoxRu - игровое сообщество</p>
          </div>
        </footer>
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 bg-gradient-to-b from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white p-3 md:p-4 rounded-l-2xl shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all hover:shadow-[0_0_40px_rgba(220,38,38,0.8)] hover:pr-6"
      >
        <div className="flex items-center gap-2 md:gap-3">
          <Icon name="Users" size={20} className="md:w-6 md:h-6" />
          <span className="font-bold text-base md:text-lg whitespace-nowrap">Сообщество</span>
        </div>
      </button>

      {isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 mr-48 animate-slide-in-right">
            <Card className="bg-gradient-to-b from-gray-900 to-black border-2 border-red-600 shadow-[0_0_40px_rgba(220,38,38,0.5)] overflow-hidden">
              <div className="p-6 space-y-4 min-w-[280px]">
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                  <Icon name="Skull" size={24} />
                  Выбери платформу
                </h3>
                
                <button
                  onClick={handleDiscordClick}
                  className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-600/20 to-indigo-800/20 hover:from-indigo-600/30 hover:to-indigo-800/30 rounded-lg border border-indigo-600/50 transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] group"
                >
                  <div className="w-12 h-12 bg-[#5865F2] rounded-full flex items-center justify-center group-hover:bg-[#4752C4] transition-colors">
                    <svg width="24" height="24" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="white"/>
                    </svg>
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-bold text-white">Discord</div>
                    <div className="text-sm text-gray-400">еще не готово:(</div>
                  </div>
                </button>

                <button
                  onClick={handleTelegramClick}
                  className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-blue-600/20 to-blue-800/20 hover:from-blue-600/30 hover:to-blue-800/30 rounded-lg border border-blue-600/50 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] group"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all overflow-hidden">
                    <img 
                      src="https://magacci.ru/wp-content/uploads/2020/07/3-8.png" 
                      alt="Telegram" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-bold text-white">Telegram</div>
                    <div className="text-sm text-green-400 flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Активен
                    </div>
                  </div>
                  <Icon name="ExternalLink" size={16} className="text-gray-400" />
                </button>
              </div>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};

export default Index;