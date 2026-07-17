import { ShieldCheck, Stethoscope, Sparkles, Facebook, Instagram, Twitter, HeartHandshake, Gem, Cpu, Wallet, Linkedin } from 'lucide-react';

export const siteConfig = {
  theme: {
    primaryHSL: '186 100% 25%', // Calming medical teal
    primaryForegroundHSL: '0 0% 100%',
  },
  clinic: {
    name: 'Brightline Dental',
    logoText: 'Brightline.',
    tagline: 'Modern dentistry for a better smile.',
    phone: '(555) 123-4567',
    email: 'hello@brightlinedental.com',
    address: '123 Wellness Way, Suite 100\nSan Francisco, CA 94105',
    hours: 'Mon-Fri: 8am - 6pm\nSat: 9am - 2pm\nSun: Closed',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0633408546534!2d-122.39665518428384!3d37.79447477975618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858063f25c7423%3A0x6b106ec4d7df63!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1614272183610!5m2!1sen!2sus',
  },
  hero: {
    headline: 'Dentistry that puts you first.',
    subheading: 'Experience modern, anxiety-free dental care in a calming environment. We use the latest technology to ensure your visit is comfortable and your smile is radiant.',
    primaryCta: 'Book Appointment',
    secondaryCta: 'Call Now',
    // Swap this single path to use a client's real clinic photography — no layout changes needed.
    image: '/images/hero.jpg',
  },
  trustStats: [
    { value: 5000, suffix: '+', label: 'Happy Patients' },
    { value: 15, suffix: '+', label: 'Years Experience' },
    { value: 8, suffix: '+', label: 'Expert Doctors' },
    { value: 4.9, suffix: '★', label: 'Average Rating', decimals: 1 },
  ],
  servicesSection: {
    title: 'Our Services',
    subtitle: 'Comprehensive care for your entire family under one roof.',
    services: [
      {
        id: 'general',
        title: 'General Dentistry',
        description: 'Comprehensive checkups, cleanings, and preventative care to keep your smile healthy year-round.',
        icon: ShieldCheck,
        image: '/images/service-general.jpg',
        trustLine: 'Free Consultation Available',
      },
      {
        id: 'cosmetic',
        title: 'Cosmetic Dentistry',
        description: 'Professional whitening, veneers, and bonding to help you achieve the confident smile you deserve.',
        icon: Sparkles,
        image: '/images/service-cosmetic.jpg',
        trustLine: 'Personalized Treatment Plan',
      },
      {
        id: 'implants',
        title: 'Dental Implants',
        description: 'Permanent, natural-looking solutions for missing teeth that restore both function and aesthetics.',
        icon: Stethoscope,
        image: '/images/service-implants.jpg',
        trustLine: 'Free Consultation Available',
      },
    ]
  },
  about: {
    eyebrow: 'Our Philosophy',
    title: 'A calmer way to care for your smile',
    subtitle: 'Every detail of Brightline is designed around comfort — from the light in our rooms to the way we explain your care, nothing here feels clinical.',
    image: '/images/about.jpg',
    secondEyebrow: 'Our Craft',
    secondTitle: 'Precision, powered by modern technology',
    secondSubtitle: 'We invest in the latest diagnostic and treatment technology so every procedure is faster, more comfortable, and more precise — without ever feeling rushed.',
    secondImage: '/images/doctor-1.jpg',
    bullets: [
      'Calming, spa-like environment',
      'State-of-the-art diagnostic technology',
      'Transparent, upfront pricing',
      'Compassionate, judgment-free care',
    ],
    secondFeatures: [
      'Digital 3D Imaging',
      'Pain-Free Dentistry',
      'Same-Day Restorations',
    ],
    secondCta: 'Explore Our Technology',
    // Drop a real clip in /public/videos and set this path (e.g. '/videos/technology.mp4')
    // to swap the placeholder for the real video — no layout changes needed.
    videoSrc: undefined as string | undefined,
  },
  whyChooseUs: {
    eyebrow: 'Why Brightline',
    title: 'Care, crafted around you',
    subtitle: 'Four principles guide every visit, from the moment you walk in to the moment you leave smiling.',
    features: [
      {
        title: 'Calming Environment',
        description: 'A spa-like space designed to ease anxiety, with soft lighting and quiet, private rooms.',
        icon: HeartHandshake,
      },
      {
        title: 'Advanced Technology',
        description: 'Digital scanning and diagnostic tools for faster, more precise, more comfortable care.',
        icon: Cpu,
      },
      {
        title: 'Artful Results',
        description: 'Cosmetic and restorative work finished with an eye for natural, lasting beauty.',
        icon: Gem,
      },
      {
        title: 'Transparent Pricing',
        description: 'Clear, upfront estimates before any treatment — no surprises, ever.',
        icon: Wallet,
      },
    ],
  },
  gallerySection: {
    title: 'Inside Brightline',
    subtitle: 'A look at the space we\'ve designed for your comfort.',
    images: [
      { src: '/images/gallery-1.jpg', alt: 'Clinic lounge' },
      { src: '/images/gallery-2.jpg', alt: 'Treatment room' },
      { src: '/images/gallery-3.jpg', alt: 'Reception desk' },
      { src: '/images/gallery-4.jpg', alt: 'Technology room' },
      { src: '/images/gallery-5.jpg', alt: 'Consultation room' },
      { src: '/images/gallery-6.jpg', alt: 'Clinic hallway' },
    ],
  },
  doctorsSection: {
    title: 'Meet Our Team',
    subtitle: 'Expert care from compassionate professionals dedicated to your health.',
    doctors: [
      {
        id: 'dr-smith',
        name: 'Dr. Sarah Smith',
        specialty: 'Lead Dentist',
        bio: 'With over 15 years of experience, Dr. Smith specializes in restorative dentistry and is passionate about helping patients overcome dental anxiety.',
        photo: '/images/doctor-2.jpg',
        socials: [
          { name: 'LinkedIn', url: '#', icon: Linkedin },
          { name: 'Instagram', url: '#', icon: Instagram },
        ],
      },
      {
        id: 'dr-jones',
        name: 'Dr. Michael Jones',
        specialty: 'Cosmetic Specialist',
        bio: 'Dr. Jones is a renowned cosmetic dentist who combines artistry with advanced technology to create stunning, natural-looking smiles.',
        photo: '/images/doctor-1.jpg',
        socials: [
          { name: 'LinkedIn', url: '#', icon: Linkedin },
          { name: 'Instagram', url: '#', icon: Instagram },
        ],
      },
    ]
  },
  testimonialsSection: {
    title: 'Patient Stories',
    subtitle: 'Don\'t just take our word for it.',
    testimonials: [
      {
        id: 't1',
        name: 'Emily R.',
        quote: 'I\'ve always dreaded the dentist, but Brightline completely changed my perspective. The staff is incredibly warm, and the space feels like a calming retreat.',
        rating: 5,
        photo: '/images/patient-1.jpg',
        date: '2 weeks ago',
      },
      {
        id: 't2',
        name: 'David L.',
        quote: 'Professional, efficient, and transparent. They explained every step of my procedure and made sure I was comfortable the entire time.',
        rating: 5,
        photo: '/images/patient-2.jpg',
        date: '1 month ago',
      },
      {
        id: 't3',
        name: 'Jessica M.',
        quote: 'The best dental experience I\'ve ever had. My cosmetic procedure was flawless, and the results exceeded all my expectations.',
        rating: 5,
        photo: '/images/patient-3.jpg',
        date: '1 month ago',
      },
    ]
  },
  finalCta: {
    headline: 'Ready for a healthier smile?',
    subtitle: 'Book your visit today and experience dentistry the way it should feel.',
    image: '/images/final-cta-bg.jpg',
  },
  booking: {
    title: 'Book Your Visit',
    subtitle: 'Take the first step toward a healthier smile.',
    successMessage: 'Thank you! We have received your request and will contact you shortly to confirm your appointment.',
  },
  faqSection: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about your visit.',
    faqs: [
      {
        question: 'Are you accepting new patients?',
        answer: 'Yes! We are always welcoming new patients to the Brightline family. You can easily book your first appointment through our website or by giving us a call.',
      },
      {
        question: 'Do you take my insurance?',
        answer: 'We accept most major PPO insurance plans. Our team will verify your benefits before your appointment and help you understand your coverage.',
      },
      {
        question: 'What if I have dental anxiety?',
        answer: 'You are not alone. Our clinic is designed to be calming, and our team is trained in anxiety-reducing techniques. We also offer sedation options for maximum comfort.',
      },
      {
        question: 'How often should I come in for a cleaning?',
        answer: 'For most patients, we recommend a professional cleaning and exam every six months. However, based on your oral health, we may recommend a different schedule.',
      },
    ]
  },
  socials: [
    { name: 'Facebook', url: '#', icon: Facebook },
    { name: 'Instagram', url: '#', icon: Instagram },
    { name: 'Twitter', url: '#', icon: Twitter },
  ],
};

export type Testimonial = typeof siteConfig.testimonialsSection.testimonials[number];