import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Calendar,
  CheckCircle,
  Code,
  Database,
  Shield,
  Users,
  FileText
} from "lucide-react";

const Experience = () => {
  const projects = [
    {
      title: "E-Commerce Website Testing",
      icon: Code,
      description: "Comprehensive testing of online shopping platform",
      features: [
        "Login and authentication testing",
        "Product search and filtering functionality",
        "Shopping cart operations",
        "Checkout process validation",
        "Payment gateway testing"
      ],
      testingTypes: ["Functional Testing", "Regression Testing", "Boundary Value Testing"],
      color: "primary"
    },
    {
      title: "Online Banking System",
      icon: Shield,
      description: "Security-focused testing of banking application",
      features: [
        "Fund transfer validation",
        "Account summary verification",
        "Transaction history testing",
        "Login security protocols",
        "Role-based access control"
      ],
      testingTypes: ["Security Testing", "Negative Testing", "Access Control Testing"],
      color: "success"
    },
    {
      title: "Leave Management System",
      icon: Users,
      description: "Workflow testing for HR management system",
      features: [
        "Leave application process",
        "Approval workflow testing",
        "Balance tracking accuracy",
        "Notification system validation",
        "Manager dashboard functionality"
      ],
      testingTypes: ["Integration Testing", "Workflow Testing", "Requirement Traceability"],
      color: "accent"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 bg-gradient-card border-primary/20">
              Experience & Projects
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hands-on experience through internships and comprehensive testing projects 
              across various domains and industries.
            </p>
          </div>

          {/* Internship experience */}
          <div className="mb-16">
            <Card className="bg-gradient-card border-primary/10 shadow-soft">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">Software Testing Intern</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        CyberSuccess, Pune
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Recent
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pl-16">
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Gained comprehensive hands-on experience in software testing methodologies 
                    and quality assurance processes in real-world project environments.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          Performed manual testing of web applications
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          Validated functionality and user experience across browsers
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          Designed and executed test cases based on user stories
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          Documented defects using Excel and JIRA
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Skills Developed</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs border-primary/30">SDLC</Badge>
                        <Badge variant="outline" className="text-xs border-primary/30">STLC</Badge>
                        <Badge variant="outline" className="text-xs border-primary/30">Defect Life Cycle</Badge>
                        <Badge variant="outline" className="text-xs border-primary/30">Cross-browser Testing</Badge>
                        <Badge variant="outline" className="text-xs border-primary/30">Test Case Design</Badge>
                        <Badge variant="outline" className="text-xs border-primary/30">JIRA</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Projects section */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12">Testing Projects</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-primary/10 hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 bg-${project.color}/10 rounded-lg flex items-center justify-center`}>
                        <project.icon className={`w-5 h-5 text-${project.color}`} />
                      </div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2 text-sm">Features Tested</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-success mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2 text-sm">Testing Approaches</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.testingTypes.map((type, typeIndex) => (
                          <Badge 
                            key={typeIndex} 
                            variant="outline" 
                            className="text-xs border-primary/30 text-primary"
                          >
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;