import React from 'react';
import { Award, Briefcase, Users } from 'lucide-react';

interface StatItemProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, icon }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="text-primary-500 mb-2">{icon}</div>
      <div className="text-3xl font-bold mb-1 text-gray-800">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">关于我们</h2>
            <p className="text-gray-600 mb-4 text-lg">
              华卓科技成立于2015年，是一家专注于为企业提供数字化转型解决方案的技术公司。我们由一群充满激情的技术专家组成，致力于通过创新技术帮助企业提升效率、降低成本并实现可持续发展。
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              在过去的几年中，我们已经成功为超过100家企业提供了服务，涵盖金融、教育、医疗、零售等多个行业。我们相信，技术的力量可以改变企业的未来，我们的目标是成为您值得信赖的长期技术合作伙伴。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <StatItem value="8+" label="年行业经验" icon={<Briefcase size={32} />} />
              <StatItem value="100+" label="企业客户" icon={<Users size={32} />} />
              <StatItem value="200+" label="成功项目" icon={<Award size={32} />} />
            </div>
          </div>
          
          <div className="lg:w-1/2 relative mt-10 lg:mt-0">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="我们的团队" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute w-full h-full bg-primary-100 rounded-lg -z-10 -top-4 -right-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;