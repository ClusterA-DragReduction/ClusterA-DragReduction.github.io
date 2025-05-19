import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('/team/teams.jpg')] bg-cover bg-center bg-no-repeat"
      />
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/80"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">关于我们</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            西安芯柔微纳科技有限公司是西北工业大学科技成果转化的高科技企业，致力于仿生微纳功能材料的创新研发。
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-primary-100 hover:shadow-2xl transition-all duration-300">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              西安芯柔微纳科技有限公司（简称芯柔微纳）成立于2025年5月，是西北工业大学科技成果转化的高科技企业，芯柔微纳技术团队由机电学院何洋教授领衔，经管团队由具有丰富创业经验的西工大校友组成。依托西北工业大学空天微纳教育部重点实验室，公司致力于仿生微纳功能薄膜材料的研发、生产和销售，所研发产品将广泛应用于高铁、飞机、风电及无人机的减阻和防除冰等领域。
            </p>
            <p className="text-gray-600">
              公司自主研发的减阻疏冰蒙皮项目已成功应用于多个领域，显著提升了设备性能和能源效率。该项目凭借其创新性和实用价值，荣获2024年中国好设计奖金奖第一名，标志着我们在仿生微纳材料领域的技术实力得到了权威认可。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;