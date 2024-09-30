const STOPPINGS = ['Check-in', 'Sightseeing', 'Restaurant'];
const TRANSPORTS = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight'];
// const offersMap = new Map();

const TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const OFFERS = [
  {
    type: 'taxi',
    offers: [
      {
        name: 'Order Uber',
        price: '€ 20',
      },
      {
        name: 'Order Bolt',
        price: '€ 25',
      },
      {
        name: 'Luxury Taxi',
        price: '€ 50',
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        name: 'Choose seats',
        price: '€ 10',
      },
      {
        name: 'Switch to comfort class',
        price: '€ 40',
      },
      {
        name: 'Luggage assistance',
        price: '€ 5',
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        name: 'Add meal',
        price: '€ 15',
      },
      {
        name: 'Upgrade to first class',
        price: '€ 60',
      },
      {
        name: 'Book Wi-Fi',
        price: '€ 10',
      }
    ]
  },
  {
    type: 'ship',
    offers: [
      {
        name: 'Book cabin',
        price: '€ 100',
      },
      {
        name: 'Dinner on board',
        price: '€ 30',
      },
      {
        name: 'Excursion package',
        price: '€ 50',
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        name: 'Rent a car',
        price: '€ 40',
      },
      {
        name: 'Add GPS',
        price: '€ 10',
      },
      {
        name: 'Extra insurance',
        price: '€ 20',
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        name: 'Add luggage',
        price: '€ 30',
      },
      {
        name: 'Book priority boarding',
        price: '€ 25',
      },
      {
        name: 'Reserve a meal',
        price: '€ 15',
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        name: 'Early check-in',
        price: '€ 20',
      },
      {
        name: 'Late check-out',
        price: '€ 25',
      },
      {
        name: 'Room upgrade',
        price: '€ 50',
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: [
      {
        name: 'Guided tour',
        price: '€ 40',
      },
      {
        name: 'Skip the line',
        price: '€ 15',
      },
      {
        name: 'Audio guide',
        price: '€ 10',
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        name: 'Reserve a table',
        price: '€ 5',
      },
      {
        name: 'Order special dessert',
        price: '€ 8',
      },
      {
        name: 'Wine pairing',
        price: '€ 20',
      }
    ]
  }
];


const DESTINATION = [
  {
    name: 'Patong Beach',
    description: 'Patong Beach is a vibrant area known for its nightlife and bustling atmosphere, perfect for relaxation and adventure.',
    photos: [
      '/markup/img/photos/1.jpg',
      '/markup/img/photos/2.jpg',
      '/markup/img/photos/3.jpg',
      '/markup/img/photos/4.jpg',
    ]
  },
  {
    name: 'Phang Nga',
    description: 'Famous for its stunning limestone cliffs and emerald-green waters, Phang Nga offers breathtaking views and boat tours.',
    photos: [
      '/markup/img/photos/5.jpg',
      '/markup/img/photos/6.jpg',
      '/markup/img/photos/7.jpg',
      '/markup/img/photos/8.jpg',
    ]
  },
  {
    name: 'Big Buddha',
    description: 'The Big Buddha is a majestic 45-meter tall statue that overlooks the island and provides a serene atmosphere.',
    photos: [
      '/markup/img/photos/9.jpg',
      '/markup/img/photos/10.jpg',
      '/markup/img/photos/11.jpg',
      '/markup/img/photos/12.jpg',
    ]
  },
  {
    name: 'Old Town',
    description: 'Old Town Phuket features colorful Sino-Portuguese buildings, unique shops, and delicious local cuisine to explore.',
    photos: [
      '/markup/img/photos/13.jpg',
      '/markup/img/photos/14.jpg',
      '/markup/img/photos/15.jpg',
      '/markup/img/photos/16.jpg',
    ]
  },
  {
    name: 'Kata Beach',
    description: 'Kata Beach is a quieter alternative to Patong, known for its golden sands, clear waters, and family-friendly environment.',
    photos: [
      '/markup/img/photos/17.jpg',
      '/markup/img/photos/18.jpg',
      '/markup/img/photos/19.jpg',
      '/markup/img/photos/20.jpg',
    ]
  },
  {
    name: 'Karon Beach',
    description: 'Karon Beach offers a long stretch of sandy shoreline, perfect for sunbathing and enjoying water sports activities.',
    photos: [
      '/markup/img/photos/21.jpg',
      '/markup/img/photos/22.jpg',
      '/markup/img/photos/23.jpg',
      '/markup/img/photos/24.jpg',
    ]
  },
  {
    name: 'Similan Islands',
    description: 'A paradise for divers, the Similan Islands boast crystal clear waters and vibrant marine life for underwater exploration.',
    photos: [
      '/markup/img/photos/25.jpg',
      '/markup/img/photos/26.jpg',
      '/markup/img/photos/27.jpg',
      '/markup/img/photos/28.jpg',
    ]
  },
  {
    name: 'Bangla Road',
    description: 'Bangla Road is the heartbeat of nightlife in Phuket, with bars, clubs, and entertainment that attracts visitors all night.',
    photos: [
      '/markup/img/photos/29.jpg',
      '/markup/img/photos/30.jpg',
      '/markup/img/photos/31.jpg',
      '/markup/img/photos/32.jpg',
    ]
  },
  {
    name: 'Promthep Cape',
    description: 'Promthep Cape is renowned for its stunning sunsets and panoramic views, making it a popular spot for photographers.',
    photos: [
      '/markup/img/photos/33.jpg',
      '/markup/img/photos/34.jpg',
      '/markup/img/photos/35.jpg',
      '/markup/img/photos/36.jpg',
    ]
  },
  {
    name: 'Phi Phi Islands',
    description: 'The Phi Phi Islands are famous for their breathtaking scenery, crystal-clear waters, and vibrant nightlife for party lovers.',
    photos: [
      '/markup/img/photos/37.jpg',
      '/markup/img/photos/38.jpg',
      '/markup/img/photos/39.jpg',
      '/markup/img/photos/40.jpg',
    ]
  }
];

const FAVORITE = [true, false];

const DATES_FROM = [
  '2024-07-10',
  '2024-07-11',
  '2024-07-12',
  '2024-07-13',
  '2024-07-14',
  '2024-07-15',
  '2024-07-16',
  '2024-07-17',
  '2024-07-18',
  '2024-07-19'
];

const DATES_TO = [
  '2024-07-13',
  '2024-07-14',
  '2024-07-15',
  '2024-07-16',
  '2024-07-16',
  '2024-07-18',
  '2024-07-18',
  '2024-07-19',
  '2024-07-21',
  '2024-07-22'
];

const TIME_FROM = [
  '07:00:00',
  '08:00:00',
  '09:00:00',
  '10:00:00',
  '11:00:00',
  '12:00:00',
  '13:00:00',
  '14:00:00',
  '15:00:00',
  '16:00:00'
];

const TIME_TO = [
  '07:47:00',
  '09:01:00',
  '09:48:00',
  '11:22:00',
  '12:30:00',
  '12:58:00',
  '14:18:00',
  '15:21:00',
  '15:42:00',
  '16:55:00'
];


export { STOPPINGS, TRANSPORTS, TYPES, OFFERS, DESTINATION , FAVORITE, DATES_FROM, DATES_TO, TIME_FROM, TIME_TO };
