import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Code, Globe, Smartphone, Database, Cloud, Shield, Cpu } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { ThemeToggle } from './components/ThemeToggle';
import { Chatbot } from './components/Chatbot';
import { AuthModal } from './components/AuthModal';
import { Language } from './types';

const translations = {
  en: {
    title: 'OKBA_DZ',
    subtitle: 'Your one-stop destination for premium digital services and solutions',
    webDev: 'Web Development',
    webDevDesc: 'Custom websites and web applications',
    mobileDev: 'Mobile Development',
    mobileDevDesc: 'Native and cross-platform mobile apps',
    cloudServices: 'Cloud Solutions',
    cloudServicesDesc: 'Scalable cloud infrastructure and services',
    security: 'Cybersecurity',
    securityDesc: 'Advanced security solutions and consulting',
    ai: 'AI & Machine Learning',
    aiDesc: 'Intelligent solutions for your business',
    database: 'Database Solutions',
    databaseDesc: 'Custom database design and optimization',
    aboutUs: 'About Us',
    aboutUsDesc: 'Providing cutting-edge digital solutions since 2024',
    contact: 'Contact',
    followUs: 'Follow Us',
    signIn: 'Sign In',
    signUp: 'Sign Up',
  },
  ar: {
    title: 'OKBA_DZ',
    subtitle: 'وجهتك الشاملة للخدمات والحلول الرقمية المتميزة',
    webDev: 'تطوير الويب',
    webDevDesc: 'مواقع ويب وتطبيقات مخصصة',
    mobileDev: 'تطوير تطبيقات الجوال',
    mobileDevDesc: 'تطبيقات جوال أصلية ومتعددة المنصات',
    cloudServices: 'حلول سحابية',
    cloudServicesDesc: 'بنية تحتية سحابية قابلة للتطوير',
    security: 'الأمن السيبراني',
    securityDesc: 'حلول أمنية متقدمة واستشارات',
    ai: 'الذكاء الاصطناعي',
    aiDesc: 'حلول ذكية لأعمالك',
    database: 'حلول قواعد البيانات',
    databaseDesc: 'تصميم وتحسين قواعد البيانات',
    aboutUs: 'معلومات عنا',
    aboutUsDesc: 'نقدم حلولاً رقمية متطورة منذ 2024',
    contact: 'اتصل بنا',
    followUs: 'تابعنا',
    signIn: 'تسجيل الدخول',
    signUp: 'إنشاء حساب',
  },
};

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const t = translations[language];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const services = [
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      title: t.webDev,
      desc: t.webDevDesc
    },
    {
      icon: <Smartphone className="w-12 h-12 text-green-600" />,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      title: t.mobileDev,
      desc: t.mobileDevDesc
    },
    {
      icon: <Cloud className="w-12 h-12 text-purple-600" />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      title: t.cloudServices,
      desc: t.cloudServicesDesc
    },
    {
      icon: <Shield className="w-12 h-12 text-red-600" />,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      title: t.security,
      desc: t.securityDesc
    },
    {
      icon: <Cpu className="w-12 h-12 text-yellow-600" />,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      title: t.ai,
      desc: t.aiDesc
    },
    {
      icon: <Database className="w-12 h-12 text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66",
      title: t.database,
      desc: t.databaseDesc
    }
  ];

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 ${
      language === 'ar' ? 'font-cairo' : 'font-inter'
    }`}>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      {/* Header with Logo */}
      <header className="fixed w-full top-0 bg-white dark:bg-gray-800 shadow-md z-40">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              OKBA_DZ
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsAuthOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t.signIn}
            </button>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-gray-200 dark:bg-gray-700 rounded-lg p-2"
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
            <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 px-6 container mx-auto">
        <section className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">{service.desc}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="w-6 h-6 text-blue-600" />
                <span className="text-xl font-bold">OKBA_DZ</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {t.aboutUsDesc}
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.contact}</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Email: contact@okba-dz.com
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t.followUs}</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transform hover:scale-110 transition-transform">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transform hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transform hover:scale-110 transition-transform">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
            <p>© 2024 OKBA_DZ. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      <Chatbot />
    </div>
  );
}

export default App;