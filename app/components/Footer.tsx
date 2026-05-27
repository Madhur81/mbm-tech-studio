import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonColorful } from "@/components/ui/button-colorful";

export default function Footer() {
  return (
    <footer className="bg-primary text-surface pt-24 pb-12 px-6 border-t-[8px] border-accent">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-6">
            <h2 className="display-lg-mobile md:display-lg text-surface mb-8">
              Let's build <br />
              <span className="text-accent">something great.</span>
            </h2>
            <Link href="/contact" className="inline-block">
              <ButtonColorful 
                label="Start Your Project" 
                className="font-bold text-base h-12 px-6" 
              />
            </Link>
          </div>
          <div className="md:col-span-6 grid grid-cols-2 gap-8 pt-4">
            <div>
              <h4 className="label-sm text-surface/50 mb-6">Company</h4>
              <ul className="space-y-4 font-body text-surface/80">
                <li>
                  <Link href="/about" className="hover:text-accent transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-accent transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-accent transition-colors">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-accent transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="label-sm text-surface/50 mb-6">Social</h4>
              <ul className="space-y-4 font-body text-surface/80">
                <li>
                  <a 
                    href="https://www.instagram.com/mbm_tech_studio?igsh=cDZkNzBtb2JqOXF2" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-accent transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-surface/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 label-sm text-surface/50">
          <p>&copy; {new Date().getFullYear()} MBM Tech Studio. All rights reserved.</p>
          <div className="flex items-center gap-2 text-surface/80 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Available for new projects
          </div>
        </div>
      </div>
    </footer>
  );
}
