import { motion } from "framer-motion";
import { Code, Palette, Smartphone, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { portfolioContent } from "@/lib/content";

const serviceIcons = {
  "Landing Pages": Palette,
  "Portfolio Websites": Code,
  "Web Applications": Smartphone,
  "Dashboard UIs": BarChart3,
};

export const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I provide professional web development services to help bring your digital 
            vision to life with modern technologies and best practices.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {portfolioContent.services.map((service, index) => {
            const IconComponent = serviceIcons[service.title as keyof typeof serviceIcons];
            
            return (
              <motion.div key={service.title} variants={cardVariants}>
                <Card className="group h-full bg-gradient-card shadow-elevation-md hover:shadow-elevation-lg transition-all duration-500 border-0 hover:scale-105 transform">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-xl bg-gradient-primary shadow-glow-primary group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                          {service.title}
                        </h3>
                        <p className="text-lg font-medium text-primary">
                          {service.price}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground">What's included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full group-hover:variant-hero transition-all duration-300"
                      onClick={handleContactClick}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 p-8 bg-gradient-card rounded-2xl shadow-elevation-lg"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need something <span className="gradient-text">custom</span>?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every project is unique. Let's discuss your specific requirements and create 
            a solution that perfectly fits your needs and budget.
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={handleContactClick}
            className="group"
          >
            <Smartphone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            Let's Talk
          </Button>
        </motion.div>
      </div>
    </section>
  );
};