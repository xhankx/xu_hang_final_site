declare module 'xu_hang_ui_garden_build_checks' {
    import React from 'react';
  
    export const Label: React.FC<{ text: string }>;
    export const Button: React.FC<{ label: string; onClick?: () => void }>;
    export const Img: React.FC<{ src: string; alt: string }>;
  }
  