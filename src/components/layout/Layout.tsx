import { Outlet } from "react-router-dom";
import Header from "../common/Header";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark relative overflow-hidden transition-colors duration-300">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-primary/40 to-secondary/40 dark:from-primary-dark/20 dark:to-secondary-dark/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-secondary/40 to-neutral/40 dark:from-secondary-dark/20 dark:to-neutral-dark/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-primary/40 to-neutral/40 dark:from-primary-dark/20 dark:to-neutral-dark/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-secondary/40 to-primary/40 dark:from-secondary-dark/20 dark:to-primary-dark/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-6 py-20 max-w-4xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
