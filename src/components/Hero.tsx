import React from 'react';
import { NavButton } from './Navigation';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90 z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            创新科技<span className="text-primary-400">引领未来</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-10 text-gray-200 leading-relaxed animate-fade-in-delay">
            我们致力于为企业提供专业的数字化转型解决方案，帮助您在竞争激烈的市场中脱颖而出。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-2">
            <NavButton href="#services" className="text-lg px-8 py-3">
              了解我们的服务
            </NavButton>
            <NavButton href="#contact" className="text-lg px-8 py-3 bg-white text-primary-600 hover:bg-gray-100">
              联系我们
            </NavButton>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <NavButton href="#services" className="bg-transparent hover:bg-transparent">
          <ChevronDown size={32} className="text-white" />
        </NavButton>
      </div>
    </section>
  );
};

export default Hero;