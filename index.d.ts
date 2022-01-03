/// <reference types="react" />

import * as React from 'react';

export interface IBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  anchor?: 'inline' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  animated?: boolean;
  children?: React.ReactNode | React.ReactNode[];
  color?: string;
  offset?: number | string | Array<number | string>;
  shadow?: boolean;
  size?: number;
  visible?: boolean;
}

export type BadgeProps = IBadgeProps;

export declare const Badge: React.SFC<IBadgeProps>;

export default Badge;
