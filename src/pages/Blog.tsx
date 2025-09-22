import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Search, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Technology", "Business", "AI & ML", "Cloud", "Security"];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends to Watch in 2025",
      excerpt: "Explore how artificial intelligence is reshaping business operations and what trends will dominate the landscape in 2025.",
      author: "Priya Sharma",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      category: "AI & ML",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Cloud Migration Strategies for Enterprise Success",
      excerpt: "Learn the best practices and strategies for successful cloud migration that ensures business continuity and growth.",
      author: "Arjun Patel",
      date: "Jan 12, 2025",
      readTime: "7 min read",
      category: "Cloud",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Remote Teams",
      excerpt: "Essential security measures every organization should implement to protect remote workforce and sensitive data.",
      author: "Rajesh Kumar",
      date: "Jan 10, 2025",
      readTime: "6 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Digital Transformation: A Step-by-Step Guide",
      excerpt: "Navigate your digital transformation journey with our comprehensive guide covering strategy, implementation, and success metrics.",
      author: "Sneha Reddy",
      date: "Jan 8, 2025",
      readTime: "8 min read",
      category: "Business",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    },
    {
      id: 5,
      title: "IoT Solutions for Smart Manufacturing",
      excerpt: "Discover how IoT technology is revolutionizing manufacturing processes and improving operational efficiency.",
      author: "Arjun Patel",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Building Scalable SaaS Applications",
      excerpt: "Technical insights and architectural patterns for building SaaS applications that scale with your business growth.",
      author: "Priya Sharma",
      date: "Jan 3, 2025",
      readTime: "10 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Insights & Resources
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Stay updated with the latest trends, insights, and best practices in technology and business.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover-scale cursor-pointer">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <Badge className="mb-3">{post.category}</Badge>
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="link" className="p-0">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest insights and updates delivered directly to your inbox.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;