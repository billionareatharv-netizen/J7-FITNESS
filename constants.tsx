import { Dumbbell, ShieldCheck, Zap, Users, Trophy, Flame } from 'lucide-react';
import { Service, Feature } from './types';

export const SERVICES: Service[] = [
  {
    id: 'boxing',
    title: 'HIT HARD – BOXING',
    description: 'Unleash your inner fighter with high-intensity boxing sessions designed for speed, power, and agility.',
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=800&auto=format&fit=crop' 
  },
  {
    id: 'mma',
    title: 'MIXED MARTIAL ARTS',
    description: 'Master the art of combat with professional MMA training that builds discipline and raw strength.',
    image: 'https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'zumba',
    title: 'HIGH ENERGY ZUMBA',
    description: 'Dance your way to fitness with rhythmic beats and calorie-burning moves that make sweating fun.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'yoga',
    title: 'POWER YOGA',
    description: 'Find your balance and inner strength through flexibility, breathwork, and core-strengthening poses.',
    image: 'https://images.unsplash.com/photo-1599447421405-0c325d36d754?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'dance',
    title: 'FREESTYLE DANCE',
    description: 'Express yourself through movement while improving coordination, stamina, and overall fitness.',
    image: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=800&auto=format&fit=crop'
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'trainers',
    title: 'Elite Certified Trainers',
    description: 'Train with champions who push you to your absolute limits.',
    icon: Trophy
  },
  {
    id: 'equipment',
    title: 'Premium Equipment',
    description: 'State-of-the-art machinery for a seamless workout experience.',
    icon: Dumbbell
  },
  {
    id: 'attention',
    title: 'Personal Attention',
    description: 'Customized plans tailored to your body type and goals.',
    icon: Users
  },
  {
    id: 'hygiene',
    title: 'Ultra-Hygienic Space',
    description: 'Spotless environment sanitized hourly for your safety.',
    icon: ShieldCheck
  },
  {
    id: 'results',
    title: 'Result-Oriented',
    description: 'We don’t just train; we transform physiques and mindsets.',
    icon: Zap
  },
  {
    id: 'discipline',
    title: 'Culture of Discipline',
    description: 'Join a community that values grit, grind, and glory.',
    icon: Flame
  }
];

export const MEMBERSHIP_PLANS = [
  {
    id: 'monthly',
    name: 'ELITE',
    duration: '1 Month',
    price: '3,000',
    features: [
      'Full Gym Floor Access',
      'Cardio & Weights Zone',
      'General Trainer Support',
      'Locker & Shower Access',
      'Free WiFi'
    ],
    recommended: false
  },
  {
    id: 'quarterly',
    name: 'PRO',
    duration: '3 Months',
    price: '8,000',
    features: [
      'All Elite Benefits',
      'Steam & Sauna Access',
      '2 Personal Training Sessions',
      'Basic Diet Consultation',
      'Group Classes (Zumba/Yoga)'
    ],
    recommended: true
  },
  {
    id: 'yearly',
    name: 'LEGEND',
    duration: '12 Months',
    price: '24,000',
    features: [
      'All Pro Benefits',
      '12 Personal Training Sessions',
      'Advanced Nutrition Plan',
      'J7 Exclusive Merchandise',
      'Priority Support & Access'
    ],
    recommended: false
  }
];

export const CONTACT_PHONE = "+919876543210"; // Placeholder
export const WHATSAPP_PHONE = "919876543210"; // Placeholder without + for link