import { CONTACT_ASSETS } from '@/features/contact/data/contact-copy';
import { PHONE_CA, PHONE_NV } from '@/features/home/data/home';

export type ContactOffice = {
  state: string;
  phone: string;
  line1: string;
  line2: string;
  mapsHref: string;
};

export type ContactPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export const CONTACT_OFFICES: ContactOffice[] = [
  {
    state: 'California',
    phone: PHONE_CA,
    line1: '18101 Von Karman Ave, Suite 1200',
    line2: 'Irvine, CA 92612',
    mapsHref: 'https://www.google.com/maps/search/?api=1&query=18101+Von+Karman+Ave,+Suite+1200,+Irvine,+CA+92612',
  },
  {
    state: 'Nevada',
    phone: PHONE_NV,
    line1: '3333 E Serene Ave, Suite 150',
    line2: 'Henderson, NV 89074',
    mapsHref: 'https://www.google.com/maps/search/?api=1&query=3333+E+Serene+Ave,+Suite+150,+Henderson,+NV+89074',
  },
];

export const CONTACT_PHOTOS: ContactPhoto[] = [
  {
    src: CONTACT_ASSETS.irvine,
    alt: 'Irvine office conference room',
    caption: 'Irvine office',
  },
  {
    src: CONTACT_ASSETS.henderson,
    alt: 'Sunset over the desert near Henderson',
    caption: 'Henderson, Nevada',
  },
];
