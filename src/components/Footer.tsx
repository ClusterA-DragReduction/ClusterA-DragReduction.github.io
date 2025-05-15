import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">华卓科技</h3>
            <p className="text-gray-400 mb-4">
              专注于为企业提供专业的数字化转型解决方案，帮助您在竞争激烈的市场中脱颖而出。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">服务</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">网站开发</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">移动应用开发</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">企业软件开发</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">数据分析与可视化</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">云服务与数据库</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">首页</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">关于我们</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">服务</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors duration-200">团队</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-200">客户评价</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">联系我们</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">北京市海淀区中关村科技园区88号</p>
              <p className="mb-2">华卓科技大厦 21层</p>
              <p className="mb-2">电话: +86 10 8888 7777</p>
              <p>邮箱: info@huazhuo-tech.cn</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {currentYear} 华卓科技. 保留所有权利.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">隐私政策</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">使用条款</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">网站地图</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;