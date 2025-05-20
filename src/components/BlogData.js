import devPic from '../assets/cooler.jpg'; // You can replace with blog-specific images later

const BlogData = [
  {
    id: "1",
    title: "Starting My Portfolio Website Journey",
    date: "2024-05-15",
    image: devPic,
    tags: ["React", "Web Development", "Portfolio"],
    excerpt: "Today marks the beginning of my portfolio website development. I've chosen React as my framework to showcase my projects and skills to potential employers and the development community.",
    content: `
# Starting My Portfolio Website Journey

Today marks the beginning of my portfolio website development. I've chosen React as my framework to showcase my projects and skills to potential employers and the development community.

## Why React?

I selected React for several reasons:

1. **Component Reusability**: React's component-based architecture makes it easy to create reusable elements
2. **Efficient DOM Manipulation**: The virtual DOM ensures optimal performance
3. **Robust Ecosystem**: The vast library of packages and community support
4. **Industry Relevance**: React remains one of the most in-demand frontend skills

## Initial Challenges

Setting up the project structure was the first hurdle. I wanted to create something that would be easy to maintain and scale as I add more projects and features. Deciding on the right animations and transitions that feel professional without being distracting took some experimentation.

## Next Steps

My immediate focus is on:
- Finalizing the responsive design
- Adding smooth transitions between pages
- Implementing the contact form functionality
- Optimizing for different devices

I'm excited to see this project evolve and become a true representation of my development skills. Stay tuned for more updates as the project progresses!
    `
  },
  {
    id: "2",
    title: "Adding Animation to Enhance User Experience",
    date: "2024-05-17",
    image: devPic,
    tags: ["CSS", "Animation", "UX Design"],
    excerpt: "Today I focused on implementing subtle animations throughout my portfolio to create a more engaging user experience. I'll share my approach to animations that enhance rather than distract.",
    content: `
# Adding Animation to Enhance User Experience

Today I focused on implementing subtle animations throughout my portfolio to create a more engaging user experience. The goal was to add motion that enhances usability and visual appeal without becoming distracting.

## Animation Philosophy

When adding animations, I followed these principles:

1. **Purpose**: Each animation should serve a purpose, whether it's guiding attention or providing feedback
2. **Subtlety**: Animations should be noticeable but not overwhelming
3. **Performance**: Animations must run smoothly across all devices
4. **Consistency**: Similar elements should animate in similar ways

## Implementation Details

I used CSS animations and transitions for most effects, including:

- Hover effects on navigation items
- Fade-in animations when scrolling to new sections
- Subtle background transitions
- Typing effect for the homepage introduction

The most challenging part was ensuring animations work consistently across different browsers and devices. I found that using transform and opacity properties for animations provided the best performance.

## Results

The animations have significantly improved the feel of the site. It now feels more dynamic and responsive to user interaction. I'm particularly pleased with the subtle page transition effects that make navigation feel seamless.

Next, I'll be focusing on adding a dark/light mode toggle with smooth transition between themes.
    `
  },
  {
    id: "3",
    title: "Building a Blog Section: Meta Development",
    date: "2024-05-19", // Today's date
    image: devPic,
    tags: ["React", "Component Design", "Blog Development"],
    excerpt: "In this meta post, I discuss how I built this very blog section you're reading right now! Learn about the component structure, data management, and styling considerations that went into this feature.",
    content: `
# Building a Blog Section: Meta Development

Today I completed implementing this blog section you're currently reading! It's a bit meta to write about building the feature within the feature itself, but I thought it would be an interesting first post.

## Component Structure

I designed the blog with these components:

1. **BlogList**: The main component that displays all blog posts in a grid layout
2. **BlogCard**: Card component for individual blog post previews
3. **BlogPost**: Detailed view of a single post (to be implemented next)
4. **BlogData**: A separate file containing all blog content in a structured format

## Data Management

For now, I'm using a simple JavaScript object to store blog posts, but as the blog grows, I plan to:

1. Move content to Markdown files for easier writing
2. Implement a simple CMS or headless CMS solution
3. Add categories and tags filtering

## Styling Approach

I created a consistent styling system that matches the rest of my portfolio while giving the blog its own identity:

- Cards with subtle hover effects
- Typography that prioritizes readability
- Responsive grid layout that works on all screen sizes
- Date formatting for better readability

## Future Enhancements

I have several plans to expand this blog section:

- Add comment functionality
- Implement search capability
- Create a newsletter signup
- Add related posts suggestions

Building this blog section was a great exercise in component design and thinking about scalable content presentation. I'm looking forward to filling it with more posts about my development journey!
    `
  }
];

export default BlogData;