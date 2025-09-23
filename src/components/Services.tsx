import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { services } from '../lib/constants';

export function Services() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="pt-5 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            For new clients, we offer startup packages <strong className="text-yellow-400">starting at $500</strong> to build your brand's online presence and connect with your target audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border bg-card relative overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <CardHeader className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-border">
                    <Button 
                      variant="ghost" 
                      className="text-gray-300 hover:!bg-white hover:!text-black p-0 h-auto group/button transition-all duration-300"
                      onClick={scrollToContact}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
