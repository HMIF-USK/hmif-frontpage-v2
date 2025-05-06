import { title } from 'process';
import React from 'react';

interface AppConfig {
  name: string;
  description: string;
  logo: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    author: string;
    image: string;
  };
  social_media: {
    twitter: {
      url: string;
      icon: string;
    };
    instagram: {
      url: string;
      icon: string;
    };
    linkedin: {
      url: string;
      icon: string;
    };
    youtube: {
      url: string;
      icon: string;
    };
    tiktok: {
      url: string;
      icon: string;
    };
  };
}

export const appConfig: AppConfig = {
  name: 'App',
  description: 'App',
  logo: '/images/logo.png',
  metadata: {
    title: 'App',
    description: 'App',
    keywords: ['App'],
    author: 'App',
    image: 'App',
  },
  social_media: {
    twitter: {
      url: 'https://twitter.com/app',
      icon: 'hugeicons:new-twitter-rectangle',
    },
    instagram: {
      url: 'https://instagram.com/app',
      icon: 'basil:instagram-outline',
    },
    linkedin: {
      url: 'https://linkedin.com/app',
      icon: 'tabler:brand-linkedin',
    },
    youtube: {
      url: 'https://youtube.com/app',
      icon: 'mingcute:youtube-line',
    },
    tiktok: {
      url: 'https://tiktok.com/app',
      icon: 'hugeicons:tiktok',
    },
  },
};

interface NavigationMenuConfig {
  items: {
    title: string;
    href: string;
    icon?: React.ReactNode;
    description?: string;
    children?: NavigationMenuConfig['items'];
  }[];
}

export const navigationMenuConfig: NavigationMenuConfig = {
  items: [
    {
      title: 'Home',
      href: '/',
      description: 'Home',
    },
    {
      title: 'Kelas',
      href: '/kelas',
      description: 'Kelas',
    },
  ],
};

export interface CardInforClubType {
  title: string;
  desk: string;
}

export const CardInforClubData: CardInforClubType[] = [
  {
    title: 'Rekayasa Perangkat Lunak',
    desk: "Whether you've got a design ready to go or need us to whip one up, we'll tackle the development part with unmatched expertise and precision.",
  },
  {
    title: 'Internet of Things',
    desk: 'We blend creativity and strategy to reflect your brand’s essence, ensuring a memorable and cohesive presence across all touchpoints. Let your brand shine and leave a lasting impression.',
  },
  {
    title: 'Data Mining',
    desk: "We're here to join forces with you, uncovering your goals, target audience, and the perfect recipe for a design that stands out from the crowd.",
  },
];

export interface CardInforClubTypeProps {
  data: CardInforClubType;
}
