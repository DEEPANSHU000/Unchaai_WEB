export const successStories = [
  {
    id: 1,
    name: "Harshita Singh",
    institute: "IIT Dhanbad",
    slug: "harshita-singh-iit-dhanbad",
    image: "/images/harshita.png",
    excerpt:
      "I wanted to take a moment to express my sincere gratitude to UnchaAi for playing such a crucial role in my JEE preparation journey.",
    content: `
Hey everyone, it's Harshita here.

I wanted to take a moment to express my sincere gratitude to UnchaAi for playing such a crucial role in my JEE preparation journey.

I cracked JEE in 2021 with the help of guidance from the right mentors.

I think I was lucky to get to know about UnchaAi through their YouTube channel at the right time.

Mamta ma'am from IIT Kanpur was assigned to me as my personal mentor. She was more of a friend to me and was always ready to help me with all my problems.

My sincere thanks to UnchaAi for providing such a great mentor and helping me throughout my journey.
    `,
  },

  {
    id: 2,
    name: "Aditya Agarwal",
    institute: "IIT Kharagpur",
    slug: "aditya-agarwal-iit-kharagpur",
    image: "/images/Aditya-Agarwal.png",
    excerpt:
      "My experience with UnchaAi was great. UnchaAi provides a complete well-designed and structured system.",
    content: `
Hello guys, Aditya this side.

My experience with UnchaAi was great. UnchaAi provides a complete, well-designed and structured system with proper guidance from top IITians.

You can connect with mentors anytime and get your doubts resolved quickly.

The mentorship helped me stay focused, disciplined, and confident during my preparation.

I strongly recommend UnchaAi to anyone serious about cracking JEE with proper mentorship.
    `,
  },

  {
    id: 3,
    name: "Shaurya",
    institute: "IIT Delhi",
    slug: "shaurya-iit-delhi",
    image: "/images/Shaurya.png",
    excerpt:
      "I was part of UnchaAi during my final selection year and personally found the mentorship extremely helpful.",
    content: `
Hello everyone, myself Shaurya.

I was part of UnchaAi during my final selection year. Initially, I was skeptical about mentorship programs.

But UnchaAi proved me wrong with its structured guidance and continuous mentor support.

My mentor helped me identify my weak areas and improve my performance consistently.

Thanks to UnchaAi, I was able to stay calm and confident during the final exam phase.
    `,
  },

  {
    id: 4,
    name: "Sanchit",
    institute: "IIT BHU",
    slug: "sanchit-iit-bhu",
    image: "/images/Sanchit.png",
    excerpt:
      "I joined UnchaAi as a mentor after getting selected to IIT BHU and learned the true value of mentorship.",
    content: `
Hi guys, myself Sanchit from IIT BHU.

I joined UnchaAi as a mentor after getting selected to IIT BHU.

I personally experienced the importance of mentorship during my own preparation journey.

UnchaAi bridges the gap between aspirants and experienced IITians, which makes preparation more effective.

It feels great to be part of a platform that genuinely focuses on student growth.
    `,
  },

  {
    id: 5,
    name: "Deepak Sahoo",
    institute: "IIT Bombay",
    slug: "deepak-sahoo-iit-bombay",
    image: "/images/Deepak-Sahoo .webp",
    excerpt:
      "Initially, I was hesitant about mentorship, but UnchaAi completely changed my perspective.",
    content: `
Hi, Deepak here from IIT Bombay.

When I joined UnchaAi, I was initially hesitant about the concept of mentorship.

However, after experiencing the guidance and structured approach, my perspective changed completely.

UnchaAi helped me manage time better and stay consistent throughout my preparation.

I truly believe mentorship plays a crucial role in competitive exam success.
    `,
  },

  {
    id: 6,
    name: "Raj Prasad",
    institute: "IIT Bombay",
    slug: "raj-prasad-iit-bombay",
    image: "/images/Raj-Prasad.webp",
    excerpt:
      "I joined UnchaAi to experience one-on-one guidance from someone who had already cracked JEE.",
    content: `
Hi everyone, Rajesh here from IIT Bombay.

I joined UnchaAi to experience the idea of one-on-one guidance from someone who had already cracked JEE.

My mentor Siddharth bhaiya guided me not only academically but also emotionally.

Having someone to rely on during stressful times made a huge difference in my preparation.

I am grateful to UnchaAi for providing such meaningful mentorship.
    `,
  },
];

export const getStoryBySlug = (slug) =>
  successStories.find((story) => story.slug === slug);