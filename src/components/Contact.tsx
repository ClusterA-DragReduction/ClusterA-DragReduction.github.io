import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-[url('/team/teams.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4 py-4 bg-gradient-to-r from-white/90 to-white/80">
        <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="lg:w-1/3 p-6 bg-gray-50">
            <div className="space-y-8">
              <div className="flex items-start group hover:transform hover:scale-105 transition-transform duration-300">
                <div className="bg-primary-100 p-3 rounded-full mr-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <Phone className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">电话</h3>
                  <p className="text-gray-600">+86 10 8888 7777</p>
                </div>
              </div>
              
              <div className="flex items-start group hover:transform hover:scale-105 transition-transform duration-300">
                <div className="bg-primary-100 p-3 rounded-full mr-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <Mail className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">电子邮件</h3>
                  <p className="text-gray-600">fae@siromems.com</p>
                </div>
              </div>
              
              <div className="flex items-start group hover:transform hover:scale-105 transition-transform duration-300">
                <div className="bg-primary-100 p-3 rounded-full mr-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <MapPin className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">地址</h3>
                  <p className="text-gray-600">陕西省西安市碑林区友谊西路127号 611 幢<br />西工大创新科技大楼B座 4505 室</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 bg-white p-0">
              <iframe
                src="https://www.aliwork.com/o/siromems_potentials"
                className="w-full h-[550px]"
                style={{ border: 'none', overflow: 'hidden', overflowY: 'hidden', display: 'block', scrolling: 'no' }}
                title="联系表单"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;