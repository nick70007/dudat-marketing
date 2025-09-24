import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'motion/react';
import squareLogo from 'figma:asset/551290197c7d8f736bf98797787e866203fd26d9.png';
import heroLogo from '../assets/images/hero.mp4';
import { CALENDLY_30MIN } from '../lib/constants';

export function Hero() {
  return (
    <section id="home" className="pt-16 pb-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero-main lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Section */}
          <div className="lg:col-span-6 hero-left">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Grow Your Business with{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                  Digital Marketing
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-lg">
                We help businesses stand out with social media management and
                content creation that drives <b>REAL</b> results.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 hero-btn">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-500 hover:to-yellow-400 text-black shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <a
                    href={CALENDLY_30MIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Start Your Project
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <a href="#portfolio" className="flex items-center gap-2">
                    <Play className="h-4 w-4" />
                    View Our Work
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Section (Animated Logo) */}
          {/* <div className="mt-12 lg:mt-0 lg:col-span-6 hero-right">
            <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
              <motion.div
                className="w-[26rem] h-[26rem] lg:w-[32rem] lg:h-[32rem]"
                initial={{ x: "-100%", y: "100%", opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 4 }}
              >
                <img
                  src={squareLogo}
                  alt="DUDAT Sales & Marketing"
                  className="w-full h-full object-contain rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div> */}
          <div className="mt-12 lg:mt-0 lg:col-span-6 hero-right">
            <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
              <div className="w-[26rem] h-[26rem] lg:w-[32rem] lg:h-[32rem] flex w-full">
                {/* <img 
                  src="src/assets/images/hero.gif"
                  alt="DUDAT Sales & Marketing" 
                  className="w-full h-full object-contain rounded-2xl shadow-2xl"
                /> */}
                <video
                  autoPlay
                  muted
                  playsInline
                >
                    <source src={heroLogo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
