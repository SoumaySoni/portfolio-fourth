import { motion } from "framer-motion";
import { portfolioContent } from "@/lib/content";

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {portfolioContent.personal.bio}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Skills & Technologies</h3>
              <div className="grid gap-4">
                {portfolioContent.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.2, 
                          delay: index * 0.1,
                          ease: "easeOut"
                        }}
                        className="h-full bg-gradient-primary rounded-full shadow-glow-primary"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Statistics */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-gradient-card p-6 rounded-xl shadow-elevation-md hover:shadow-elevation-lg transition-all duration-300 group">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center space-y-2"
              >
                <div className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                  3+
                </div>
                <div className="text-muted-foreground font-medium">
                  Years Experience
                </div>
              </motion.div>
            </div>

            <div className="bg-gradient-card p-6 rounded-xl shadow-elevation-md hover:shadow-elevation-lg transition-all duration-300 group">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center space-y-2"
              >
                <div className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="text-muted-foreground font-medium">
                  Projects Completed
                </div>
              </motion.div>
            </div>

            <div className="bg-gradient-card p-6 rounded-xl shadow-elevation-md hover:shadow-elevation-lg transition-all duration-300 group">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center space-y-2"
              >
                <div className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                  25+
                </div>
                <div className="text-muted-foreground font-medium">
                  Happy Clients
                </div>
              </motion.div>
            </div>

            <div className="bg-gradient-card p-6 rounded-xl shadow-elevation-md hover:shadow-elevation-lg transition-all duration-300 group">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center space-y-2"
              >
                <div className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-muted-foreground font-medium">
                  Support Available
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};