import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export enum CompatibilityType {
  IPHONE = 'iPhone',
  TYPE_C = 'Type-C',
  ANDROID = 'Android'
}