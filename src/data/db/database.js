import Mock from "../mock";

const database = {
  information: {
    name: 'Simone',
    aboutContent: "Hello, my name is Simone, and I will be your Photographer! This is a little blurb to get to know me :).I have been a Nurse for the past 5 years caring and helping all kinds of people, I love nursing but needed a little something more wholesome. I always joked that if I quit my career I would become a dog photographer because who wouldn’t want to spend every day with dogs? In 2020 I took a leap and decided I am going to follow my heart and become a dog photographer & I am travelling down a new creative path with purpose to make people happy, myself included; and cuddle as many dogs as possible! And what better way to make people happy than to create memories of their adored furry friend. I am a part of the Photography Institute however I have always been nifty with a camera and a lot of my skills have been self-taught. I love hard copy photos that you can touch, hold and keep forever, and I am always that person that brings out the old photo albums, creating photobooks as birthday presents, making holiday videos and yep, I am that person always with a camera in hand. You can be sure I am either taking photos, looking at photos or creating something incredible with those memories. I do not just take photos, I create keepsakes of cherished memories.I grew up in the Perth Hills, Western Australia, with a large family and forever a rescued family dog. I have a partner Jason, many friends and a beloved god daughter who makes a very good assistant but a not so great model as she is currently a 3 year old human hurricane. I am currently renting and not allowed a dog of my own, however the day I can I know she will be a Golden Cocker Spaniel named Honey",
    age: 26,
    phone: '',
    nationality: 'Australian',
    language: 'English',
    email: 'honeyphotography@outlook.com.au',
    address: '',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://www.facebook.com/honeyphotography.dogs',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: '',
      dribbble: 'https://www.instagram.com/honeyphotography.dogs/',
      github: '',
      stackoverflow: ''
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/Resume(1.17.2020).pdf'
  },
  services: [
    {
      title: "Animals",
      icon: 'color-pallet',
      details: "explanation here about this topic"
    },
    {
      title: "Celebrations",
      icon: 'code',
      details: "explanation here about this topic."
    },
    {
      title: "Real Estate",
      icon: 'handshake',
      details: "explanation here about this topic"
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Wow we are both blown away, these photos are beautiful. Thank you so much for capturing our wedding day. We love our photos and how you’ve captured every precious moment of our ceremony in detail.",
      author: {
        name: 'Mark & Angelica',
        designation: ''
      },
    },
     {
      id: 2,
    content: "Our album has arrived and it is beautiful!! Thank you for all your hard work in helping us create a fabulous keep sake.",
    author: {
    name: 'Susan Yost',
      designation: ''
      }
     },
    {
     id: 3,
      content: "Thank You so much for getting our photo’s out to us so quickly.  They are absolutely beautiful.  You managed to capture so much perfectly. Thank you so much for your professionalism, you made the day that much more relaxed and enjoyable.",
      author: {
       name: 'Alex',
      designation: ''
      }
     }
  ],
  skills: [
    {
      title: "Creativity",
      value: 90
    },
    {
      title: "Patience",
      value: 85
    },
    {
      title: "Attention to detail",
      value: 90
    },
    {
      title: "Technical",
      value: 75
    },
    {
      title: "Communication",
      value: 90
    },
    {
      title: "Flexibility",
      value: 80
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Luna",
      subtitle: "Clink on the link to meet Luna.",
      imageUrl: "/images/portfolio-image-1.jpg",
      // largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://www.facebook.com/honeyphotography.dogs/photos/a.107161771324451/107170347990260/'
    },
    {
      id: 2,
      title: "Ruckus",
      subtitle: "Clink on the link to meet Ruckus.",
      
      imageUrl: "/images/portfolio-image-2.jpg",
      // largeImageUrl: ["/images/portfolio-image-2-lg.jpg"],
      url: 'https://www.facebook.com/honeyphotography.dogs/photos/a.107161771324451/107170467990248'
    },
    {
      id: 3,
      title: "Kobe",
      subtitle: "Clink on the link to meet Kobe.",

      imageUrl: "/images/portfolio-image-3.jpg",
      // largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: 'https://www.facebook.com/honeyphotography.dogs/photos/a.107161771324451/107170561323572'
    },
    {
      id: 4,
      title: "Alfie",
      subtitle: "Clink on the link to meet Alfie.",
      imageUrl: "/images/portfolio-image-4.jpg",
      // largeImageUrl: [
      //   "/images/portfolio-image-4-lg.jpg",
      //   "/images/portfolio-image-4-lg2.jpg"
      // ],
      url: 'https://www.facebook.com/honeyphotography.dogs/photos/a.107161771324451/107170904656871'
    },
    {
      id: 5,
      title: "Firebase Train Scheduler",
      subtitle: "Firebase, HTML, JavaScript",
      imageUrl: "/images/portfolio-image-5.jpg",
      // largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
      url: 'https://patrickfinnigan.github.io/trainschedule/'
    },
    {
      id: 6,
      title: "Burger Time",
      subtitle: "Mongo, Express, Node",
      imageUrl: "/images/portfolio-image-6.jpg",
      // largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
      url: 'https://damp-mountain-93742.herokuapp.com/burgers'
    },
    {
      id: 7,
      title: "React Shuffle",
      subtitle: "React",
      imageUrl: "/images/portfolio-image-7.jpg",
      // largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://react-gameucbextension2018.herokuapp.com/'
    },
    {
      id: 8,
      title: "NYT Article Scraper",
      subtitle: "React, Mongoose, Cheerio",
      imageUrl: "/images/portfolio-image-8.jpg",
      // largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
      url: 'https://young-river-49658.herokuapp.com/'
    },
    {
      id: 9,
      title: "Demoquest",
      subtitle: "Mongoose, Express, React, Node",
      imageUrl: "/images/portfolio-image-9.jpg",
      // largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
      url: 'https://demoquest.herokuapp.com/'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2019 - Present",
        position: "Frontend Web Developer",
        company: "Socicraft (Currently under NDA)",
        details: "Developing and designing the front-end layout of the company website, utilizing React tools to edit the website to meet company expectations."
      },
      // {
      //   id: 2,
      //   year: "2016 - 2018",
      //   position: "Frontend Web Developer",
      //   company: "CBA Company",
      //   details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      // },
      // {
      //   id: 3,
      //   year: "2014 - 1016",
      //   position: "UI/UX Designer",
      //   company: "Example Company",
      //   details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      // }
    ],
    educationExperience: [
      {
        id: 1,
        year: "Sept 2012 - July 2016",
        graduation: "Bachelor of Arts in Psychology",
        university: "Sonoma State University",
        details: "Studied clinical and social psychology, and developed an understanding of aesthetic design that can be used in web development"
      },
      {
        id: 2,
        year: "May 2018 - Nov 2018",
        graduation: "Certification in Web Development",
        university: "UC Berkeley Extension Program Coding Bootcamp",
        details: "Learned the fundamentals of computer science and web design, learning how to develop fullstack MERN applications."
      },
      // {
      //   id: 3,
      //   year: "2015 - 2016",
      //   graduation: "Higher Schoold Graduation",
      //   university: "Abc College",
      //   details: "Lorem Ipsum"
      // }
    ]
  },
  blogs: [
    {
      id: 1,
      title: "React new version is coming!",
      imageUrl: "/images/blog-image-1.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },
    {
      id: 2,
      title: "More about react hooks",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "04 December 2019"
    },
    {
      id: 3,
      title: "Next generation javascript learning source",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "05 December 2019"
    },
    {
      id: 4,
      title: "Free tutorial downloading link.",
      imageUrl: "/images/blog-image-2.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "06 December 2019"
    },
    {
      id: 5,
      title: "Get 2500 free mockup for design.",
      youtubeUrl: "TKnufs85hXk",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "08 December 2019"
    },
    {
      id: 6,
      title: "React vs Vue vs Angular, what is best?",
      vimeoUrl: "23534361",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "10 December 2019"
    },
    {
      id: 7,
      title: "Web design typography & spacing.",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },
    {
      id: 8,
      title: "React new version is coming with a great features.",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+61 400 007 073'],
    emailAddress: ['honeyphotography@outlook.com.au'],
    address: "Perth, Australia"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});