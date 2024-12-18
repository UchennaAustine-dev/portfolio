import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { Menu, X } from "lucide-react";
  import { Link } from "react-router-dom";
  import { useState } from "react";
  
  const MenuDialog = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button className="text-darkText hover:text-accent transition-colors">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] bg-softBg/95 backdrop-blur-sm border-none">
          <nav className="flex flex-col gap-8 py-8">
            <div className="space-y-6">
              <Link to="/" className="flex items-center gap-4 text-4xl font-light text-darkText hover:text-accent transition-colors">
                <span className="opacity-50 text-base">01</span>
                HOME
              </Link>
              <Link to="/work" className="flex items-center gap-4 text-4xl font-light text-darkText hover:text-accent transition-colors">
                <span className="opacity-50 text-base">02</span>
                WORK
              </Link>
              <Link to="/about" className="flex items-center gap-4 text-4xl font-light text-darkText hover:text-accent transition-colors">
                <span className="opacity-50 text-base">03</span>
                ABOUT
              </Link>
              <Link to="/contact" className="flex items-center gap-4 text-4xl font-light text-darkText hover:text-accent transition-colors">
                <span className="opacity-50 text-base">04</span>
                CONTACT
              </Link>
            </div>
            
            <div className="flex gap-4 text-sm text-neutral">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                instagram
              </a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                behance
              </a>
            </div>
          </nav>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default MenuDialog;