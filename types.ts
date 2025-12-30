import React from 'react';

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  features: string[];
  checkoutUrl: string;
  recommended?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface DocSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export enum ActivationStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export enum ApplicationStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  SUBMITTED = 'SUBMITTED'
}

export interface ActivationResponse {
  ok: boolean;
  token?: string;
  message?: string;
}