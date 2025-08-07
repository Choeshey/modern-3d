const projects = [
    {
        id: 1,
        title: 'E-commerce Platform',
        description: 'A full-featured online store with payment integration and inventory management.',
        image: './images/portimg2.jpg',
        tags: ['React', 'Node.js', 'MongoDB']
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'A productivity application to help teams organize and track their work efficiently.',
        image: './images/portimg3.jpg',
        tags: ['React', 'Firebase', 'Redux']
    },
    {
        id: 3,
        title: 'Fitness Tracker',
        description: 'Mobile application to track workouts, nutrition, and health metrics.',
        image: './images/portimg4.png',
        tags: ['React Native', 'GraphQL', 'MongoDB']
    },
    {
        id: 4,
        title: 'Recipe Finder',
        description: 'Discover and save your favorite recipes with nutritional information.',
        image: './images/portforliaimg1.jpg',
        tags: ['Vue.js', 'Node.js', 'PostgreSQL']
    },
    {
        id: 5,
        title: 'Travel Blog Platform',
        description: 'A platform for travel enthusiasts to share their experiences and stories.',
        image: './images/portimg5.png',
        tags: ['Next.js', 'Tailwind CSS', 'Strapi']
    },
    {
        id: 6,
        title: 'AI-Powered Chatbot',
        description: 'An intelligent chatbot for customer support and engagement.',
        image: './images/portimg6.png',
        tags: ['Python', 'TensorFlow', 'React']
    }
];

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];


const contactInfo = [
    {
        icon: 'FaMapMarkerAlt',
        title: 'Our Location',
        text: '123 Business Street, Tech City, TC 12345'
    },
    {
        icon: 'FaPhoneAlt',
        title: 'Phone Number',
        text: '+1 (555) 123-4567'
    },
    {
        icon: 'FaEnvelope',
        title: 'Email Address',
        text: 'contact@example.com'
    },
    {
        icon: 'FaClock',
        title: 'Working Hours',
        text: 'Mon - Fri: 9:00 - 18:00'
    }
];

const companyLogos = [
    { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' },
    { name: 'Airbnb', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg' },
];

export { projects, navItems, companyLogos, contactInfo };