import { ReactNode } from "react";

interface HorizontalScrollLayoutProps {
  children: ReactNode;
}

const HorizontalScrollLayout = ({ children }: HorizontalScrollLayoutProps) => {
  return (
    <div className="flex h-screen overflow-x-auto overflow-y-hidden pt-16 lg:pt-20 scroll-smooth">
      <div className="flex flex-nowrap">
        {children}
      </div>
    </div>
  );
};

interface HorizontalSectionProps {
  children: ReactNode;
  allowScroll?: boolean;
  className?: string;
}

export const HorizontalSection = ({ children, allowScroll = true, className = "" }: HorizontalSectionProps) => {
  return (
    <section 
      className={`min-w-screen h-full flex-shrink-0 scroll-snap-align-start ${allowScroll ? 'overflow-y-auto' : 'overflow-y-hidden'} ${className}`}
    >
      {children}
    </section>
  );
};

export default HorizontalScrollLayout;
