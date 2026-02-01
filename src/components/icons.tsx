import type * as React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & { title?: string };

type BaseIconProps = IconProps & { children: React.ReactNode };

function BaseIcon({ title, children, ...props }: BaseIconProps) {
  const ariaHidden = title ? undefined : true;
  const role = title ? 'img' : 'presentation';

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      aria-hidden={ariaHidden}
      role={role}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function IconPool(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6c2.5 2 4.5 2 7 0s4.5-2 7 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 10c2.5 2 4.5 2 7 0s4.5-2 7 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 14c2.5 2 4.5 2 7 0s4.5-2 7 0" />
    </BaseIcon>
  );
}

export function IconHotTub(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 14h16" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 14v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 5c-1 1-1 2 0 3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5c-1 1-1 2 0 3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 5c-1 1-1 2 0 3" />
    </BaseIcon>
  );
}

export function IconKitchen(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 10v9" />
      <circle cx="7.5" cy="8" r="0.8" />
      <circle cx="10.5" cy="8" r="0.8" />
    </BaseIcon>
  );
}

export function IconWasher(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="9" cy="7.5" r="0.8" />
      <circle cx="12" cy="7.5" r="0.8" />
    </BaseIcon>
  );
}

export function IconDryer(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12c1.5-2 4.5-2 6 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 15c1 1 5 1 6 0" />
      <circle cx="9" cy="7.5" r="0.8" />
    </BaseIcon>
  );
}

export function IconPet(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 15c0-2 2-4 5-4s5 2 5 4-2.5 4-5 4-5-2-5-4z"
      />
      <circle cx="7" cy="9" r="1.4" />
      <circle cx="17" cy="9" r="1.4" />
      <circle cx="9" cy="7" r="1" />
      <circle cx="15" cy="7" r="1" />
    </BaseIcon>
  );
}

export function IconFirePit(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4c2 2 2 4 0 6-2-2-2-4 0-6z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 11c0-2.2 1.8-4 4-4s4 1.8 4 4c0 3-2 5-4 5s-4-2-4-5z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 19h12" />
    </BaseIcon>
  );
}

export function IconWifi(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10a11 11 0 0 1 14 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 13a7 7 0 0 1 8 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 16a3 3 0 0 1 2 0" />
      <circle cx="12" cy="18" r="1" />
    </BaseIcon>
  );
}

export function IconEV(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 4h7a2 2 0 0 1 2 2v6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h10a2 2 0 0 1 2 2v5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20h6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 6v4l2-1" />
    </BaseIcon>
  );
}

export function IconDeck(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="4" y="5" width="16" height="8" rx="1" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 13v6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 13v6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6" />
    </BaseIcon>
  );
}

export function IconBalcony(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="5" y="4" width="14" height="6" rx="1" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 10v8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 10v8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 10v8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 10v8" />
    </BaseIcon>
  );
}

export function IconDining(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="9" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 19l2-6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 19l-2-6" />
    </BaseIcon>
  );
}

export function IconGarden(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20v-7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 12c2-4 6-4 8 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9c-2-3 0-5 3-5" />
    </BaseIcon>
  );
}

export function IconPlay(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 18V6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 18V6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 8v5a4 4 0 0 0 8 0V8" />
    </BaseIcon>
  );
}

export function IconBath(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12v4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-4"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h3a2 2 0 0 1 2 2v3" />
      <circle cx="9" cy="5" r="1" />
    </BaseIcon>
  );
}
