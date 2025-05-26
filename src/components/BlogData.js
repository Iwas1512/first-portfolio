import devPic from '../assets/meowmeowthegoat.jpg'; 
import WM from '../assets/wm-logo-color-600x400.jpg'; 

const BlogData = [
  {
  id: "1",
  title: "Welcome to My Blog",
  date: "2025-05-21",
  image: devPic,
  tags: ["Personal", "Web Development", "Introduction"],
  excerpt: "Welcome to my new blog! In this first official post, I share why I created this space, what you can expect to find here, and my plans for regular updates on my projects and development journey.",
  content: `
# Welcome to My Blog

Hello and welcome to my blog! After weeks of planning and development, I'm excited to finally launch this space where I'll be sharing regular updates about my projects, learning experiences, and reflection/documentation of my lessons.

## Why I Created This Blog

I built this blog section for several reasons:

1. Document My Journey: Having a dedicated space to record my progress helps me reflect on how far I've come
2. Share Knowledge: Explaining concepts and solutions helps solidify my own understanding while potentially helping others
3. My Internship/Work Experience: I want to share my experiences and lessons learned during my internship, which I believe will be valuable for not only me but also others in similar situations

## Technical Implementation

Creating this blog taught me a lot about:

- Designing a flexible component structure that can grow with content
- Managing data in a scalable way (currently using JavaScript objects, but planning to transition to a proper backend)
- Implementing responsive layouts that work across all device sizes
- Writing content that's both engaging and informative

## What to Expect

I plan to post regular updates covering:

- Progress on current projects/internship tasks
- Technical challenges and how I solved them
- New technologies I'm learning and experimenting with
- Reflections on my development career and growth

My goal is to update at least once a week with meaningful content that tracks my journey and potentially helps others facing similar challenges.

## Let's Connect

I'd love to hear your thoughts, suggestions, or questions about any of my posts. In the near future, I'll be adding a comment section to facilitate discussions. Until then, feel free to reach out via the contact form on my portfolio site.

Thanks for joining me on this journey! Stay tuned for more updates coming soon.
  `
},{
  id: "2",
  title: "Landing My Data Science Internship at WM",
  date: "2025-05-25",
  image: WM, 
  tags: ["Data Science", "Internship", "Career", "WM"],
  excerpt: "I'm thrilled to share that I've secured a data science internship at WM! Here's how I landed the position, what I'll be working on, and how I plan to document my journey through regular blog updates.",
  content: `
# Landing My Data Science Internship at WM

I'm excited to announce that I've officially started my data science internship at WM! This opportunity represents a major milestone in my career journey, and I wanted to share the experience of landing this position and what lies ahead.


## What I'll Be Working On

I'm excited to be joining WM's Environmental Health and Safety team as a Data Science intern. I'm looking forward to applying Data Science techniques to support EHS initiatives and contribute to meaningful environmental and safety outcomes.

## My Documentation Plan

This blog will serve as my primary platform for reflecting on and sharing my internship experience. Here's what you can expect:

Weekly Reflections: Regular posts about challenges faced, lessons learned, and skills developed. I'll focus on the problem-solving process rather than proprietary specifics.

Technical Deep-Dives: When I learn new tools, techniques, or approaches, I'll break them down in detail. These posts will serve as both personal reference material and potentially helpful resources for others.

Career Insights: Observations about working in a professional data science environment, team dynamics, and how academic knowledge translates to real-world applications.


## Goals for This Experience

Beyond the immediate learning opportunities, I have several specific goals:

1. Develop Professional Network: Build meaningful relationships with colleagues and mentors in the field
2. Real-World Application: Bridge the gap between theoretical knowledge and practical implementation
3. Communication Skills: Improve my ability to present technical findings to non-technical stakeholders
4. Industry Exposure: Gain deeper understanding of how data science functions within a larger business context

## Looking Forward

I'm genuinely excited about the learning opportunities ahead and the chance to contribute meaningfully to WM's data initiatives. This internship represents not just a chance to apply my skills, but to grow them in ways that classroom learning alone cannot provide.

I'll be documenting the journey here regularly - both the successes and the inevitable challenges. My hope is that these posts will serve as valuable reflection material for my own growth while potentially helping others who are pursuing similar paths in data science.

Stay tuned for updates as I dive deeper into this new chapter. The real learning is just beginning!


Thanks for following along on this journey!
`
  }
];

export default BlogData;