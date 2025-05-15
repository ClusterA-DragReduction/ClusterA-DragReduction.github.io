import React from 'react';
import { Code, Database, LineChart, Smartphone, Globe, Shield } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] hover:border-primary-300 border border-gray-100">
      <div className="mb-4 text-primary-500">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const services = [
  {
    title: "网站开发",
    description: "定制专业的响应式网站，为您的企业提供强大的在线形象和功能。",
    icon: <Globe size={40} />
  },
  {
    title: "移动应用开发",
    description: "为iOS和Android平台开发高性能、用户友好的移动应用程序。",
    icon: <Smartphone size={40} />
  },
  {
    title: "企业软件开发",
    description: "根据您的业务需求打造定制化的企业级软件解决方案。",
    icon: <Code size={40} />
  },
  {
    title: "数据分析与可视化",
    description: "通过高级数据分析和直观的可视化展示，从您的数据中获取有价值的见解。",
    icon: <LineChart size={40} />
  },
  {
    title: "云服务与数据库",
    description: "提供安全可靠的云服务和数据库解决方案，确保您的业务数据安全无虞。",
    icon: <Database size={40} />
  },
  {
    title: "网络安全服务",
    description: "全方位的网络安全解决方案，保护您的业务不受网络威胁的侵害。",
    icon: <Shield size={40} />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">我们的服务</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            我们提供全方位的技术解决方案，满足您企业数字化转型的各种需求。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;