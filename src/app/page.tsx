"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import {
  Award, BadgeCheck, BarChart, Briefcase, Building2, Calendar, CheckCircle, ChevronLeft, ChevronRight,
  CircleDollarSign, Home, Mail, MapPin, MessageSquare, Mic, Phone, Search, Sparkles, Star, Users, Video, Wrench
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
// import { FlowiseChatbot } from "../components/chat/FlowiseChatbot"; // Removed direct import

const FlowiseChatbot = dynamic(() => import("../components/chat/FlowiseChatbot").then((mod) => mod.FlowiseChatbot), {
  ssr: false,
  loading: () => null, // You can add a loading spinner here if needed
});

const leadMagnetSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  address: z.string().optional(),
  propertyType: z.string().optional(),
  timeline: z.string().optional(),
});

type LeadMagnetForm = z.infer<typeof leadMagnetSchema>;

const Header = () => (
  <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div>
          <a href="#">
            <img className="h-12 w-auto" src="https://www.icloudrealty.ca/files/themeManager/3868/theme6/iCloud_Logo_White_back-removebg-preview.png" alt="iCloud Realty Logo" />
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="hover:text-secondary transition-colors">Services</a>
          <a href="#about" className="hover:text-secondary transition-colors">About</a>
          <a href="#testimonials" className="hover:text-secondary transition-colors">Success Stories</a>
          <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
        </nav>
        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <a href="#contact">Book a Consultation</a>
        </Button>
      </div>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="relative text-white bg-primary">
    <div className="absolute inset-0">
      <img src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/484091661_1196336189160326_1862203589975156648_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=A45PCkniJtQQ7kNvwEliQfj&_nc_oc=Admv8Cmme2DxU63kqNiZNCUj86YnctR2_4QdJ-rzuogAEEQJ6H7POJL8gNr5Q-bec0I&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=JANA55T802KhpRgDabTtTw&oh=00_AfVdmM4HCikbhTJ-WEg3H8pHGqhWU3p-mmnVC7uROI4W2Q&oe=68B0037C" alt="Jackie McKennon professional headshot" className="w-full h-full object-cover opacity-20" />
    </div>
    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold font-heading text-white">
          List with Jackie — Your Complete Toronto Real Estate Solution
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          37 Years of Market Mastery + Cutting-Edge AI Technology = Your Real Estate Success
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
            <a href="#raffle">WIN FREE HOME STAGING ($5,000 Value)</a>
          </Button>
          <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
            <a href="#contact">Book Your Free Market Analysis</a>
          </Button>
        </div>
        <div className="mt-8 text-sm text-gray-400 flex justify-center items-center space-x-4">
          <span>37+ Years Experience</span>
          <span className="h-4 w-px bg-gray-500"></span>
          <span>1000+ Homes Sold</span>
          <span className="h-4 w-px bg-gray-500"></span>
          <span>iCloud Realty Partner</span>
        </div>
      </div>
    </div>
  </section>
);

const LeadMagnetSection = () => {
  const form = useForm<LeadMagnetForm>({
    resolver: zodResolver(leadMagnetSchema),
    defaultValues: { name: "", email: "", phone: "", address: "", propertyType: "", timeline: "" },
  });

  const onSubmit = (data: LeadMagnetForm) => {
    console.log(data);
    toast.success("Thank you for your entry!", {
      description: "We'll contact the winner monthly. Good luck!",
    });
    form.reset();
  };

  return (
    <section id="raffle" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">WIN $5,000 FREE HOME STAGING PACKAGE</h2>
            <p className="mt-4 text-lg text-muted-foreground">Enter our monthly drawing for a complete home staging service to make your property shine. No purchase necessary!</p>
            <ul className="mt-6 space-y-2 text-muted-foreground">
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-secondary mr-2" /> Professional physical & virtual staging</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-secondary mr-2" /> Premium property photography included</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-secondary mr-2" /> Open to all homeowners in the Toronto area</li>
            </ul>
          </div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Enter the Draw</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="Your Name" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem><FormLabel>Phone</FormLabel><FormControl><Input placeholder="Your Phone Number" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="propertyType" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Property Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger><SelectValue placeholder="Select property type" /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="condo">Condo/Townhouse</SelectItem>
                          <SelectItem value="detached">Detached</SelectItem>
                          <SelectItem value="investment">Investment</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">Enter to Win!</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img src="https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/468618182_18103631257456262_1127302093259011486_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=u-DQR0Mv9lgQ7kNvwGeV_ds&_nc_oc=Adm-RdeKCFOsDtnVE64F8mWyhe5JWvp7vhAl7JMTPXdLJ2p350Ln13GvXHCjTOvVd-o&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&_nc_gid=q6JaRqKGs3cAQInLc7eVJQ&oh=00_AfXFq6uByTOBAWbFttK64HBZ5zzvkD5p_xA4yZRTSfTqHA&oe=68B007D6" alt="Jackie McKennon" className="rounded-lg shadow-lg h-full object-cover" />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">Meet Toronto's Most Experienced Tech-Forward Agent</h2>
          <audio controls src="/jackie.mp3" className="w-full mt-4">
            Your browser does not support the audio element.
          </audio>
          <p className="mt-4 text-lg text-muted-foreground">
            I'm Jackie McKennon, and for 37 years, I've dedicated myself to helping Torontonians achieve their real estate dreams. I've navigated five major market shifts, giving me unparalleled insight into our city's dynamic landscape. My recent partnership with iCloud Realty enhances my service with cutting-edge technology, ensuring you get the best of both worlds: timeless experience and modern innovation.
          </p>
          <Button asChild className="mt-6" variant="secondary">
            <a href="#contact">Learn How Experience + Innovation = Your Success</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const services = [
  { image: "https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/470804554_1093622315555551_5109552227950564572_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=x4wMIlhdeFIQ7kNvwEW8BCN&_nc_oc=AdnoTcUUMDl1tWpfs92AGpZvNOTAfAT-4TyA749Vtsb00vZLghagVCWFOYEdGYLzjQQ&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&_nc_gid=c5kqqf7UfJwiEDjTxvdNeQ&oh=00_AfXepP0Cr5Li-ni5no5xw2u2kzg1Y6X3WUK3DbKc_eYrXw&oe=68AFFE75", title: "Professional Home Staging", description: "Physical & virtual staging to maximize appeal." },
  { image: "https://www.blueriverinsurancegroup.com/wp-content/uploads/sites/218/2022/12/Contractors.png", title: "General Contracting", description: "Coordination of renovations and improvements." },
  { image: "https://lh3.googleusercontent.com/proxy/e0pa0L4tQr0AAqZsCMak6s7zJFKq_05QEvYfkUBssZnX6pP4FOWx7IKJpx7zn7cWF14wnU287S0i5WUjcHLoIS6d2YKR9cvxMfCRjMhdTfWW-VVsYiT7pmc5aA", title: "Premium Photography", description: "Stunning interior, exterior, and drone shots." },
  { image: "https://cannect.ca/wp-content/uploads/2023/12/real-estate-6688945_640-1-1.jpg", title: "Mortgage Financing", description: "Integrated solutions with trusted lenders." },
  { image: "https://www.seatowncleaners.com/wp-content/uploads/2023/04/Untitled-design-7.png", title: "Deep Cleaning Services", description: "Ensuring properties are move-in ready." },
  { image: "https://www.smartdatacollective.com/wp-content/uploads/2018/09/artificial-intelligence-in-small-buisnesses-860x574.jpg", title: "AI-Powered Marketing", description: "24/7 automated social media promotion." },
  { image: "https://bigdataanalyticsnews.com/wp-content/uploads/2020/11/stock-market.jpg", title: "Predictive Market Analysis", description: "Data-driven insights for optimal pricing." },
  { image: "https://t4.ftcdn.net/jpg/10/48/21/55/360_F_1048215556_MA5bRqtkdP99fvgJXffVsmu8T5KOT3Ps.jpg", title: "Closing Coordination", description: "Seamless management of all transaction details." },
];

const ServicesSection = () => (
  <section id="services" className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">One Agent, Every Solution You Need</h2>
        <p className="mt-4 text-lg text-muted-foreground">From staging to closing, I provide a complete, integrated solution to save you time, money, and stress. No more juggling multiple vendors—just seamless, expert service.</p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service: any) => (
          <Card key={service.title} className="text-center">
            <CardHeader>
              {service.image ? (
                <div className="mx-auto h-14 w-14 rounded-full overflow-hidden">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                </div>
              ) : (
                <div className="mx-auto bg-secondary/10 text-secondary p-3 rounded-full w-fit">
                  <service.icon className="h-8 w-8" />
                </div>
              )}
              <CardTitle className="mt-4">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const PropertyActionsSection = () => (
  <section id="actions" className="py-16 md:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">Start Your Real Estate Journey</h2>
        <p className="mt-4 text-lg text-muted-foreground">Whether you're looking to buy your dream home, sell your current property, or explore the latest listings in Toronto, we have the tools and expertise to guide you.</p>
      </div>
      <div className="mt-12 grid md:grid-cols-3 gap-8">
        <Card className="overflow-hidden shadow-lg">
          <img src="https://www.icloudrealty.ca/resize/680/452?url=%2Fmodules%2Fwidgets%2Fcity_links%2Fimages%2F91.jpg" alt="Family home" className="w-full h-48 object-cover" />
          <CardHeader>
            <CardTitle>Buying a Home</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Find your perfect home in the Toronto area with expert guidance every step of the way.</p>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <a href="https://www.icloudrealty.ca/" target="_blank" rel="noopener noreferrer">Start Your Search</a>
            </Button>
          </CardContent>
        </Card>
        <Card className="overflow-hidden shadow-lg">
          <img src="https://www.icloudrealty.ca/resize/3068/3068?url=files%2Fflashbanner%2F17942%2F(2160x1400)%2520Exterior%2520-%25207.jpg" alt="Modern house for sale" className="w-full h-48 object-cover" />
          <CardHeader>
            <CardTitle>Selling Your Property</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Maximize your property's value with our proven marketing strategies and expert negotiation.</p>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <a href="https://www.icloudrealty.ca/" target="_blank" rel="noopener noreferrer">Get a Free Valuation</a>
            </Button>
          </CardContent>
        </Card>
        <Card className="overflow-hidden shadow-lg">
          <img src="https://www.icloudrealty.ca/resize/680/452?url=%2Fmodules%2Fwidgets%2Fcity_links%2Fimages%2F66.jpg" alt="Toronto city skyline" className="w-full h-48 object-cover" />
          <CardHeader>
            <CardTitle>Explore Listings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Browse the latest properties on the market and discover hidden gems across the city.</p>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <a href="https://www.icloudrealty.ca/" target="_blank" rel="noopener noreferrer">View Properties</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const VideoShowcaseSection = () => (
  <section id="case-study" className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">Case Study: Sold Above Asking</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          See how we combined home staging, drone photography, and targeted AI marketing to sell this stunning home for a record price.
        </p>
      </div>
      <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/E2fhrU3_A5U"
            title="Stunning Modern Luxury Home in Tottenham, Ontario"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h3 className="text-2xl font-bold font-heading text-primary">Stunning Modern Luxury Home in Tottenham</h3>
          <p className="mt-2 text-muted-foreground">
            Step inside one of Tottenham’s most breathtaking modern estates—a custom-designed home featuring floor-to-ceiling windows, designer lighting, and a seamless blend of indoor-outdoor living.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" /> <span><strong>Premium Ravine Lot:</strong> No rear neighbors, offering ultimate privacy.</span></li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" /> <span><strong>Sleek Modern Architecture:</strong> Flooded with natural light and clean lines.</span></li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" /> <span><strong>Gourmet Kitchen:</strong> An open-concept layout perfect for entertaining.</span></li>
            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" /> <span><strong>Spa-Inspired Primary Suite:</strong> Complete with a walk-in closet and scenic views.</span></li>
          </ul>
           <p className="mt-4 text-muted-foreground">
            Located in one of the GTA’s most exclusive neighborhoods, this home is minutes from green space, top schools, and the best of luxury country living.
          </p>
          <Button asChild className="mt-6 w-full sm:w-auto" size="lg">
            <a href="#contact">See How We Can Do This For You</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const AvaAssistantSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 flex justify-center">
          <img src="https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2024/10/confident-young-african-american-business-woman-in-2024-04-26-18-20-12-utc-scaled.jpg?ssl=1" alt="Ava Richmond, AI Assistant" className="w-48 h-48 rounded-full object-cover border-4 border-secondary" />
        </div>
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold font-heading">Meet Ava, Your Digital Client Success Specialist</h3>
          <p className="mt-2 text-lg opacity-90">"Hi! I'm Ava, Jackie's AI-powered assistant. I'm here 24/7 to help you schedule appointments, answer questions, and provide market updates. I ensure you get the information you need, instantly."</p>
          <Button variant="secondary" className="mt-6">Chat with Ava</Button>
        </div>
      </div>
    </div>
  </section>
);

const advantages = [
  "37 Years of Toronto Expertise", "Complete Solution Provider", "AI-Enhanced Service",
  "Proven Track Record: 1000+ Sales", "iCloud Realty Partnership", "Unmatched Local Knowledge",
  "Fastest Response Times", "Personal Attention from Jackie"
];

const WhyChooseSection = () => (
  <section id="why-choose" className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">The Jackie McKennon Advantage</h2>
        <p className="mt-4 text-lg text-muted-foreground">Combining decades of experience with the best modern technology gives you an unbeatable edge in the Toronto market.</p>
      </div>
      <div className="mt-12 max-w-4xl mx-auto grid sm:grid-cols-2 gap-x-8 gap-y-4">
        {advantages.map((advantage) => (
          <div key={advantage} className="flex items-center">
            <BadgeCheck className="h-6 w-6 text-secondary mr-3 flex-shrink-0" />
            <span className="text-lg">{advantage}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const testimonials = [
  { name: "The Chen Family", location: "North York", text: "Jackie's staging service was a game-changer. Our home sold in a week for over asking! Her experience is invaluable.", rating: 5 },
  { name: "David R.", location: "Downtown Toronto", text: "As a first-time buyer, I was lost. Jackie and her team guided me through everything. The AI assistant, Ava, was surprisingly helpful for quick questions!", rating: 5 },
  { name: "Priya & Sameer", location: "Etobicoke", text: "We've worked with Jackie twice now. Her knowledge of market cycles saved us from making a bad decision. She's honest, professional, and gets results.", rating: 5 },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-16 md:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">Success Stories from Happy Clients</h2>
      </div>
      <Carousel className="mt-12 max-w-3xl mx-auto" opts={{ loop: true }}>
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card className="border-2 border-secondary/50">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-secondary fill-current" />)}
                  </div>
                  <p className="text-lg italic">"{testimonial.text}"</p>
                  <p className="mt-4 font-bold font-heading">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-24 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading">Ready to Make Your Move?</h2>
        <p className="mt-4 text-lg opacity-90">Schedule a free, no-obligation consultation to discuss your real estate goals. Let's create a winning strategy together.</p>
      </div>
      <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center">
        <div className="bg-primary-foreground/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold font-heading">Book an Appointment</h3>
          <p className="mt-2 opacity-80">Choose a time that works for you.</p>
          <Button asChild variant="secondary" size="lg" className="mt-4">
            <a href="#">View My Calendar</a>
          </Button>
        </div>
        <div className="bg-primary-foreground/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold font-heading">Contact Me Directly</h3>
          <div className="mt-4 space-y-2">
            <a href="tel:416-399-7406" className="flex items-center justify-center gap-2 hover:text-secondary transition-colors"><Phone /> 416-399-7406</a>
            <a href="mailto:jackie@icloudrealty.ca" className="flex items-center justify-center gap-2 hover:text-secondary transition-colors"><Mail /> jackie@icloudrealty.ca</a>
            <p className="flex items-center justify-center gap-2"><MapPin /> 1396 Don Mills Rd, North York</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} Jacqueline McKennon | iCloud Realty Ltd., Brokerage</p>
      <p className="text-sm mt-2">Not intended to solicit properties already listed for sale.</p>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <div className="bg-background font-body">
      <Header />
      <main>
        <HeroSection />
        <LeadMagnetSection />
        <AboutSection />
        <ServicesSection />
        <PropertyActionsSection />
        <VideoShowcaseSection />
        <AvaAssistantSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FlowiseChatbot />
    </div>
  );
}