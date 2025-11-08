import { ArrowRight, ShoppingBag, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.businesslist.co.ke/img/cats/wholesalers.jpg" 
          alt="Samwest Distributors" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 rounded-full shadow-lg animate-fade-in">
              <Award className="h-5 w-5" />
              <span className="font-semibold text-sm">Trusted FMCG Distributor</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Your One-Stop Shop
                </span>
                <br />
                <span className="text-white">for FMCG & Retail</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl leading-relaxed">
                <span className="font-semibold text-orange-400">Reliable.</span>{" "}
                <span className="font-semibold text-blue-400">Accessible.</span>{" "}
                <span className="font-semibold text-green-400">Affordable.</span>
              </p>

              <p className="text-lg text-gray-400 max-w-xl">
                Quality products delivered with excellence. From household essentials to industrial supplies, 
                we've got everything your business needs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/shop">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/products">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Browse Products
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-gray-400">Products</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-orange-400">1000+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Wide Selection</h3>
                <p className="text-sm text-gray-300">Extensive range of FMCG and retail products</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer mt-8">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Best Prices</h3>
                <p className="text-sm text-gray-300">Competitive wholesale and retail pricing</p>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Quality Assured</h3>
                <p className="text-sm text-gray-300">Only the best products for your business</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-2xl border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                <h3 className="text-xl font-bold text-white mb-2">Special Offer!</h3>
                <p className="text-sm text-white/90 mb-4">Get up to 25% off on bulk orders</p>
                <Link to="/bulk-orders">
                  <Button size="sm" className="bg-white text-blue-600 hover:bg-gray-100">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;