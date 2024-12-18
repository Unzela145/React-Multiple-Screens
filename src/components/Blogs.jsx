import React from 'react';
import './Blogs.css'; // Make sure to add the appropriate styles for the blog page

const Blogs = () => {
  const blogPosts = [
    {
      title: "Exploring the Future of Web Development",
      excerpt: "Web development is constantly evolving. In this blog, we explore upcoming trends, new technologies, and what the future holds for developers.",
      date: "September 20, 2024",
      link: "/blog/future-of-web-development"
    },
    {
      title: "Top 5 React Tips and Tricks",
      excerpt: "React has become one of the most popular JavaScript libraries. In this post, we cover some advanced tips and tricks for optimizing React development.",
      date: "September 15, 2024",
      link: "/blog/react-tips-and-tricks"
    },
    {
      title: "The Importance of Web Accessibility",
      excerpt: "In this article, we delve into the importance of web accessibility, covering guidelines and practical tips for making your website accessible to everyone.",
      date: "September 10, 2024",
      link: "/blog/web-accessibility"
    }
  ];

  return (
    <div className="blogs-container">
      <header className="blogs-header">
        <h1 className="blogs-title">Our Blogs</h1>
        <p className="blogs-subtitle">Stay updated with the latest articles, tutorials, and insights from our team.</p>
      </header>

      <section className="blogs-list">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            <p className="blog-date">{post.date}</p>
            <a href={post.link} className="read-more">Read More</a>
          </div>
        ))}
      </section>

      <footer className="blogs-footer">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Blogs;
