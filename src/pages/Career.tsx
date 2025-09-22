import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Briefcase, 
  Clock, 
  DollarSign, 
  Search,
  Users,
  TrendingUp,
  Coffee,
  Heart
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Career = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const departments = ["All", "Engineering", "Marketing", "Sales", "HR", "Finance"];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Coimbatore, India",
      type: "Full-time",
      experience: "5+ years",
      salary: "₹12-18 LPA",
      description: "We're looking for an experienced full stack developer to join our engineering team.",
    },
    {
      id: 2,
      title: "Cloud Solutions Architect",
      department: "Engineering",
      location: "Coimbatore, India",
      type: "Full-time",
      experience: "7+ years",
      salary: "₹15-22 LPA",
      description: "Lead cloud migration projects and design scalable cloud architectures.",
    },
    {
      id: 3,
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "Coimbatore, India",
      type: "Full-time",
      experience: "4+ years",
      salary: "₹8-12 LPA",
      description: "Drive our digital marketing strategies and grow our online presence.",
    },
    {
      id: 4,
      title: "Business Development Executive",
      department: "Sales",
      location: "Coimbatore, India",
      type: "Full-time",
      experience: "2+ years",
      salary: "₹4-6 LPA",
      description: "Identify new business opportunities and build client relationships.",
    },
    {
      id: 5,
      title: "UI/UX Designer",
      department: "Engineering",
      location: "Coimbatore, India",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹6-10 LPA",
      description: "Create intuitive and beautiful user interfaces for our products.",
    },
    {
      id: 6,
      title: "HR Generalist",
      department: "HR",
      location: "Coimbatore, India",
      type: "Full-time",
      experience: "2+ years",
      salary: "₹4-6 LPA",
      description: "Support various HR functions including recruitment and employee relations.",
    },
  ];

  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Career Growth",
      description: "Clear career paths and professional development opportunities",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Great Team",
      description: "Work with talented and passionate professionals",
    },
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options",
    },
  ];

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Join Our Growing Team
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Build your career with SFA Global and be part of our mission to transform businesses through technology.
            </p>
            <Button size="lg">View Open Positions</Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Join SFA Global?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover-scale">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Search */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Current Openings
          </h2>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search positions..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {departments.map((dept) => (
                <Button
                  key={dept}
                  variant={selectedDepartment === dept ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDepartment(dept)}
                >
                  {dept}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid gap-6 max-w-4xl mx-auto">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="p-6 hover-scale">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary">{job.department}</Badge>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                  </div>
                  <Button>Apply Now</Button>
                </div>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {job.experience}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-2" />
                    {job.salary}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {job.type}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Our Culture
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Innovation First</h3>
                <p className="text-muted-foreground">
                  We encourage creative thinking and embrace new technologies to solve complex problems.
                </p>
              </Card>
              <Card className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  We invest in our employees' growth through training programs and certifications.
                </p>
              </Card>
              <Card className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Inclusive Environment</h3>
                <p className="text-muted-foreground">
                  We celebrate diversity and create an inclusive workplace where everyone thrives.
                </p>
              </Card>
              <Card className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Client Success</h3>
                <p className="text-muted-foreground">
                  We're passionate about delivering exceptional value to our clients.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in creating innovative solutions that make a difference.
          </p>
          <Button size="lg">Submit Your Resume</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;