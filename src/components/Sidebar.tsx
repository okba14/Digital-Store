import React from 'react';
import { Menu, X, Code, Globe, CreditCard, MessageSquare } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { title: 'Programming Services', href: '#services', icon: 'Code' },
  { title: 'Development', href: '#development', icon: 'Globe' },
  { title: 'Subscriptions', href: '#subscriptions', icon: 'CreditCard' },
  { title: 'Support', href: '#support', icon: 'MessageSquare' },
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const IconMap: Record<string, React.ElementType> = {
    Code,
    Globe,
    CreditCard,
    MessageSquare,
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out shadow-xl z-40`}
      >
        <nav className="p-6 space-y-4">
          {navItems.map((item) => {
            const Icon = IconMap[item.icon];
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Icon className="w-5 h-5" />
                <span>{item.title}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}