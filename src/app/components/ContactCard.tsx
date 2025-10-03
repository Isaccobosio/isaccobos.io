import Icon from './Icon';
import { CONTACT_INFO, ContactType } from '../constants/contacts';

interface ContactCardProps {
  type: ContactType;
}

export default function ContactCard({ type }: ContactCardProps) {
  const { href, iconType, label, description, isExternal = false } = CONTACT_INFO[type];
  
  const linkProps = isExternal ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {};

  return (
    <a
      href={href}
      {...linkProps}
      className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 rounded-2xl transition-all duration-300 font-onest hover:scale-105 active:scale-95 group backdrop-blur-xl border bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-white/20 shadow-2xl hover:shadow-purple-500/10 min-h-[60px] touch-manipulation"
    >
      <div className="flex-shrink-0">
        <Icon type={iconType} />
      </div>
      <div className="flex flex-col min-w-0 flex-1">
        <span className="text-xs md:text-sm text-gray-400">{label}</span>
        <span className="text-sm md:text-base truncate text-white font-medium">{description}</span>
      </div>
    </a>
  );
}