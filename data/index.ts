import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaAndroid, FaReact } from 'react-icons/fa';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
];

export const slugs = [
  'typescript',
  'javascript',
  'dart',
  'java',
  'react',
  'flutter',
  'android',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'testinglibrary',
  'jest',
  'cypress',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'sonarqube',
  'figma',
];

export const experiencesData = [
  {
    title: 'Front End Developer Student',
    location: 'Medieinstitutet, Gothenburg',
    description:
      'Currently studying Front End Development, focusing on modern web technologies and practices.',
    icon: React.createElement(FaReact),
    date: '2023 - 2025',
  },
  {
    title: 'Senior Casino Associate',
    location: 'Gothenburg, Sweden',
    description:
      'Ensured a positive customer experience, oversaw gaming activities, resolved disputes, managed financial transactions, and ensured compliance with regulatory requirements.',
    icon: React.createElement(CgWorkAlt),
    date: '2018 - Jun 2024',
  },
  {
    title: 'Android Developer - Internship',
    location: 'Stendahls, Gothenburg',
    description:
      'Completed a two-month internship focused on Android development, gaining hands-on experience with technologies such as Android Studio, Kotlin, Jetpack Compose, Room Database, Git, and Retrofit Library.',
    icon: React.createElement(FaAndroid),
    date: 'Okt - Dec 2022',
  },
  {
    title: 'Casino Supervisor',
    location: 'USA',
    description:
      "Ensured that casino games were managed in accordance with the company's policies and regulations. Oversaw players and dealers, reviewed cash-to-chip exchanges, resolved conflicts professionally, and handled personnel-related issues, including staff scheduling.",
    icon: React.createElement(CgWorkAlt),
    date: '2004 - 2017',
  },
] as const;

export const projectsData = [
  {
    id: 1,
    title: 'My Nutrition Plan',
    description:
      '"My Nutrition Plan" is a web application that allows users to search for recipes and manage their own nutrition plans.',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    imageUrl: '/MyNutritionPlan.png',
    link: 'https://my-nutrition-plan.vercel.app/',
  },
  {
    id: 2,
    title: 'Cruel Nature',
    description:
      'This is a School project where we did a remake of the classic game Bomber Man. We have used JS.p5 and TypeScript OOP to make this game and it has been a 4 week projekt.',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    imageUrl: '/CruelNature.png',
    link: 'https://cruel-nature.vercel.app/',
  },
  {
    id: 3,
    title: 'Netflix Rip Off',
    description:
      'The Netflix Rip Off is designed to replicate the core functionalities of a movie platform like Netflix, and is intended to showcase not only our technical skills but also to cultivate an agile development mindset.',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    imageUrl: '/NetflixRipOff.png',
    link: 'https://netflix-rip-off.vercel.app/',
  },
  {
    id: 4,
    title: 'Next Design',
    description:
      'This project focuses on building a webshop using React, NextJS, Typescript, and ChakraUI. Named NEXT DESIGN, the webshop’s aesthetic draws inspiration from the established interior design store, NORDIC NEST. ',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    imageUrl: '/NextDesign.png',
    link: 'https://nextjs-webbshop-ts-chaos.vercel.app',
  },
  {
    id: 5,
    title: 'Pirates of the Caribbean',
    description:
      '"Pirates of the Caribbean - Cursed Seas" is a basic interactive adventure game implemented in JavaScript. ',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    imageUrl: '/PiratesShip.png',
    link: 'https://catavadani.github.io/Pirates-of-the-Caribbean/',
  },
  {
    id: 6,
    title: 'Calendar',
    description:
      'Users can easily create and schedule todos, while a visually appealing interface showcases a todo list on the left and an interactive calendar on the right.',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    imageUrl: '/CalendarImg.png',
    link: 'https://github.com/CatAvadani/Calendar-Project',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
  },
  {
    id: 2,
    img: '/twit.svg',
  },
  {
    id: 3,
    img: '/link.svg',
  },
];
