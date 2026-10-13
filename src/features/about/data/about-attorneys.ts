import { ABOUT_ASSETS } from '@/features/about/data/about-copy';

export type AboutAttorney = {
  photo: string;
  photoAlt: string;
  office: string;
  officeSm: string;
  name: string;
  nameSm: string;
  bio: string;
  bioSm: string;
  bar: string;
  bookLabel: string;
  bookHref: string;
};

export const ABOUT_ATTORNEYS: AboutAttorney[] = [
  {
    photo: ABOUT_ASSETS.ludmila,
    photoAlt: 'Portrait to shoot: Ludmila Kucerkova Romero',
    office: 'California  ·  Irvine office',
    officeSm: 'California · Irvine',
    name: 'Ludmila Kucerkova Romero, Esq.',
    nameSm: 'Ludmila Kucerkova Romero',
    bio: 'Handles personal injury and lemon law cases in California.',
    bioSm: 'Personal injury and lemon law.',
    bar: 'California Bar No. 304180',
    bookLabel: 'Book a call with Ludmila',
    bookHref: '/#review-form',
  },
  {
    photo: ABOUT_ASSETS.eric,
    photoAlt: 'Portrait to shoot: Eric L. Marshall',
    office: 'Nevada  ·  Henderson office',
    officeSm: 'Nevada · Henderson',
    name: 'Eric L. Marshall, Esq.',
    nameSm: 'Eric L. Marshall',
    bio: 'Handles personal injury and workers’ compensation cases in Nevada.',
    bioSm: 'Personal injury and workers’ comp.',
    bar: 'Nevada Bar No. 14327',
    bookLabel: 'Book a call with Eric',
    bookHref: '/#review-form',
  },
];
