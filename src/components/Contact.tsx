import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Phone, Mail, Clock } from 'lucide-react';
import { CALENDLY_30MIN, serviceTitles } from '../lib/constants';
import { slugify } from '../utils/slugify';

export function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event:any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "62fd56c8-1052-4e8c-9c60-4cd29fe445be");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's Start Your Project
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to take your business to the next level? <strong className="text-yellow-400">Get in touch with us today</strong> and let's discuss how we can help you achieve your digital marketing goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <form onSubmit={onSubmit}>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input name="firstName" id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input name="lastName" id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input name="email" id="email" type="email" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input name="phone" id="phone" type="tel" placeholder="+1 (214) 505-0184" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input name="companyName" id="companyName" placeholder="Your Company Name" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In *</Label>
                      <Select name="service" id="service">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTitles.map(title => (
                            <SelectItem key={title} value={slugify(title)}>
                              {title}
                            </SelectItem>
                          ))}
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        name="message"
                        id="message" 
                        placeholder="Tell us about your project, goals, and how we can help..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-white text-black hover:bg-gray-100 shadow-lg border border-gray-300">
                      Send Message
                    </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    We'll get back to you within 24 hours.
                  </p>
                  <span>{result}</span>
                </CardContent>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">


                <div className="flex items-start space-x-3 mb-4">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground text-sm">+1 (214) 505-0184</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 mb-4">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a 
                      href="mailto:duda@dudat.marketing" 
                      className="text-muted-foreground text-sm hover:text-primary transition-colors underline"
                    >
                      duda@dudat.marketing
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                    <p className="text-muted-foreground text-sm">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 2:00 PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-400 to-yellow-300 text-black border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Ready to Get Started?</h3>
                <p className="text-yellow-900 text-sm mb-4">
                  Schedule a free consultation call to discuss your project and goals.
                </p>
                <Button asChild variant="secondary" className="w-full bg-white text-black hover:bg-gray-100">
                  <a href={CALENDLY_30MIN} target="_blank" rel="noopener noreferrer">
                    Book Free Consultation
                  </a>
                </Button>
              </CardContent>
            </Card>


          </div>
        </div>
      </div>
    </section>
  );
}
