import React, { useState } from 'react';
import { 
  Activity, 
  Calendar, 
  ChevronDown, 
  DollarSign, 
  Download, 
  LineChart, 
  ShoppingCart, 
  Star, 
  Dumbbell,
  Utensils,
  Target,
  CheckCircle2,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Menu,
  X,
  Camera
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-rich-black text-platinum">
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : 'closed'} z-50 lg:hidden`}>
        <div className="container mx-auto px-4 py-8">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-platinum hover:text-golden-accent"
          >
            <X className="w-8 h-8" />
          </button>
          <nav className="flex flex-col space-y-6 mt-16">
            {['Home', 'Features', 'Pricing', 'FAQ', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-bold hover:text-golden-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-rich-black/80 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <h1 className="text-2xl font-bold premium-text">FitTracker</h1>
            <nav className="hidden lg:flex items-center space-x-8">
              {['Home', 'Features', 'Pricing', 'FAQ', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-platinum hover:text-golden-accent transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
            <button 
              className="lg:hidden text-platinum hover:text-golden-accent"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen pt-20 flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-premium-dark opacity-90"></div>
          <div className="absolute top-0 -left-4 w-72 h-72 bg-golden-accent rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-sapphire rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-rose-gold rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 space-y-8">
            <div className="inline-block animate-float">
              <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-golden-accent/10 border border-golden-accent/20 backdrop-blur-sm text-golden-accent">
                🚀 Transform Your Body, Transform Your Life
              </span>
            </div>
            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="premium-text animate-gradient">
                Exceed Your Weight Loss Goals
              </span>
              <br />
              <span className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl mt-4 block">
                with the Ultimate Fitness Tracker!
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-platinum/80 max-w-3xl mx-auto">
              Plan. Track. Succeed. A complete solution to achieve your fitness transformation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://superprofile.bio/vp/66bec527fb72df001378c55d"
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button group animate-glow"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="https://superprofile.bio/vp/66bec527fb72df001378c55d"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-bold text-lg border border-golden-accent/20 hover:border-golden-accent/50 hover:bg-golden-accent/5 transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16 relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-transparent to-transparent z-10"></div>
            <img 
              src="https://cdn.dribbble.com/users/2253180/screenshots/15521087/weight_loss_program_dashboard_ui_4x.jpg" 
              alt="Fitness Tracker Preview" 
              className="rounded-2xl shadow-2xl mx-auto transform hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "95%", label: "Success Rate" },
              { number: "50K+", label: "Pounds Lost" },
              { number: "4.9/5", label: "User Rating" }
            ].map((stat, i) => (
              <div key={i} className="premium-card p-6 backdrop-blur-lg border border-golden-accent/20">
                <div className="text-3xl md:text-4xl font-bold premium-text">
                  {stat.number}
                </div>
                <div className="text-platinum/60 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <span className="text-golden-accent font-medium">Features</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              Everything You Need to
              <br />
              <span className="premium-text">
                Achieve Your Fitness Goals
              </span>
            </h2>
          </div>
          <div className="responsive-grid">
            {[
              { icon: <LineChart />, title: "Weight Loss Tracker", desc: "Track progress with beautiful graphs" },
              { icon: <Activity />, title: "Calorie Counter", desc: "Personal macro & calorie calculations" },
              { icon: <Dumbbell />, title: "Workout Planner", desc: "Track sets, reps, and progress" },
              { icon: <Calendar />, title: "Habit Builder", desc: "Stay consistent with daily habits" },
              { icon: <ShoppingCart />, title: "Meal & Grocery Planner", desc: "Plan smart, eat smart" },
              { icon: <Target />, title: "Goal Setting", desc: "Set and achieve your fitness goals" },
              { icon: <LineChart />, title: "Body Measurement Tracker", desc: "Track all your body measurements" },
              { icon: <Camera />, title: "Progress Pictures", desc: "Organize and compare your transformation photos" }
            ].map((feature, i) => (
              <div key={i} className="premium-card group p-8">
                <div className="text-golden-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-platinum/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <span className="text-golden-accent font-medium">Pricing</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              Get Instant Access
              <br />
              <span className="premium-text">
                One-Time Purchase, Lifetime Benefits
              </span>
            </h2>
          </div>
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-0 bg-premium-gradient rounded-3xl blur-xl opacity-50"></div>
            <div className="premium-card p-8 relative border border-golden-accent/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-premium-gradient px-6 py-2 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <div className="text-5xl font-bold mb-4 mt-4 premium-text">
                <span className="text-2xl">₹</span>499
              </div>
              <div className="text-platinum/60 mb-8">One-time payment, lifetime access</div>
              <ul className="space-y-4 mb-8">
                {[
                  "Lifetime Access",
                  "All Premium Features",
                  "Free Updates",
                  "Priority Support",
                  "Mobile & Desktop Access"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-golden-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://superprofile.bio/vp/66bec527fb72df001378c55d"
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button group w-full"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Download Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 relative">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="text-center mb-16">
            <span className="text-golden-accent font-medium">FAQ</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              Frequently Asked
              <br />
              <span className="premium-text">
                Questions
              </span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "How do I access the tracker?",
                a: "After purchase, you'll receive instant access to download the tracker. It works on all devices and platforms."
              },
              {
                q: "Is this beginner-friendly?",
                a: "Absolutely! We've designed the tracker to be intuitive and easy to use, with helpful guides included."
              },
              {
                q: "Q: Can I use the tracker for both fitness and meal planning?",
                a: "Definitely! The tracker is equipped with sections for workout planning, meal tracking, and grocery shopping. It’s an all-in-one tool to keep you on track with your workouts, nutrition, and overall fitness."
              },
              {
                q: "Can I set fitness goals with the tracker?",
                a: "Yes! You can set personalized fitness goals such as weight loss targets, workout frequency, and step count. The tracker helps you stay motivated by showing your progress toward these goals."
              },
              {
                q: "Can I customize it?",
                a: "Yes! The tracker is fully customizable to match your specific fitness goals and preferences."
              }
            ].map((faq, i) => (
              <details key={i} className="premium-card group">
                <summary className="px-6 py-4 cursor-pointer flex items-center justify-between">
                  <span className="font-semibold">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 transform group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 py-4 text-platinum/60 border-t border-golden-accent/20">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative pt-20 pb-10">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold premium-text">
                FitTracker
              </h3>
              <p className="text-platinum/60">
                Transform your fitness journey with the ultimate tracking solution.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Instagram className="w-5 h-5" />, href: "#" },
                  { icon: <Twitter className="w-5 h-5" />, href: "#" },
                  { icon: <Facebook className="w-5 h-5" />, href: "#" },
                  { icon: <Youtube className="w-5 h-5" />, href: "#" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="premium-card p-2 hover:bg-golden-accent/10 transition-colors duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  "Home",
                  "Features",
                  "Pricing",
                  "About Us",
                  "Contact"
                ].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-platinum/60 hover:text-golden-accent transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                {[
                  "Help Center",
                  "Documentation",
                  "Privacy Policy",
                  "Terms of Service",
                  "FAQ"
                ].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-platinum/60 hover:text-golden-accent transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <ul className="space-y-4">
                {[
                  { icon: <Mail className="w-5 h-5" />, text: "support@fittracker.com" },
                  { icon: <Phone className="w-5 h-5" />, text: "+1 (555) 123-4567" },
                  { icon: <MapPin className="w-5 h-5" />, text: "123 Fitness Street, Health City, FC 12345" }
                ].map((contact, i) => (
                  <li key={i} className="flex items-center gap-2 text-platinum/60">
                    <span className="text-golden-accent">{contact.icon}</span>
                    {contact.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-golden-accent/20 text-center text-platinum/60">
            <p>© 2024 FitTracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;