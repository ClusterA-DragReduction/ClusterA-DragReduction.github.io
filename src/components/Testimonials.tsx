import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  company: string;
  image: string;
}

const testimonials = [
  {
    content: "华卓科技帮助我们将传统业务成功转型为数字化模式，提高了工作效率，降低了运营成本。他们的团队专业且充满创新精神，是值得信赖的合作伙伴。",
    author: "陈总",
    company: "合创金融",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    content: "选择华卓科技开发我们的企业管理系统是明智之举。他们不仅按时交付了高质量的产品，还提供了周到的售后服务。我们的效率得到了显著提升。",
    author: "李经理",
    company: "星辰教育集团",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    content: "作为一家初创企业，我们需要一个既专业又经济的技术合作伙伴。华卓科技超出了我们的期望，他们提供的解决方案帮助我们迅速在市场中站稳脚跟。",
    author: "王女士",
    company: "创新科技有限公司",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonial: React.FC<TestimonialProps> = ({ content, author, company, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 relative">
      <div className="absolute top-6 left-6 text-primary-200">
        <Quote size={48} />
      </div>
      <div className="relative z-10">
        <p className="text-gray-700 mb-6 text-lg italic">{content}</p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img src={image} alt={author} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">{author}</h4>
            <p className="text-sm text-gray-600">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">客户评价</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            听听我们的客户怎么说，这些真实的反馈是我们成长的动力。
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <Testimonial
                    content={testimonial.content}
                    author={testimonial.author}
                    company={testimonial.company}
                    image={testimonial.image}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-primary-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 -left-4 sm:-left-8 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;