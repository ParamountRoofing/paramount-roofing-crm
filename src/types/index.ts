// Enhanced Mock Data Structure for Paramount Roofing CRM

// Core Type Definitions
export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  coordinates?: { lat: number; lng: number };
}

export interface Contact {
  name: string;
  email?: string;
  phone: string;
  role: 'primary' | 'secondary' | 'emergency';
}

export interface Property {
  address: Address;
  type: 'residential' | 'commercial';
  roofType: 'asphalt_shingle' | 'metal' | 'tile' | 'slate' | 'flat' | 'other';
  roofAge?: number;
  squareFootage?: number;
  stories: number;
  hasGutters: boolean;
  notes?: string;
}

export interface Client {
  id: string;
  name: string;
  contacts: Contact[];
  property: Property;
  serviceHistory: string[]; // Job IDs
  totalJobValue: number;
  status: 'active' | 'inactive' | 'potential';
  source: 'referral' | 'online' | 'advertising' | 'repeat' | 'other';
  tags: string[];
  notes: string;
  createdAt: Date;
  lastContactDate?: Date;
}

export interface CrewMember {
  id: string;
  name: string;
  role: 'foreman' | 'roofer' | 'helper' | 'inspector';
  phone: string;
  skills: string[];
  hourlyRate: number;
  isAvailable: boolean;
}

export interface Material {
  id: string;
  name: string;
  unit: 'bundle' | 'roll' | 'piece' | 'linear_foot' | 'square';
  unitCost: number;
  quantityNeeded: number;
  supplier: string;
  inStock: boolean;
}

export interface Photo {
  id: string;
  url: string;
  caption: string;
  type: 'before' | 'during' | 'after' | 'damage' | 'inspection';
  takenAt: Date;
}

export interface WeatherCondition {
  date: Date;
  temperature: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'stormy' | 'snowy' | 'windy';
  windSpeed: number;
  chanceOfRain: number;
  suitable: boolean;
}

export interface Job {
  id: string;
  clientId: string;
  type: 'repair' | 'replacement' | 'inspection' | 'maintenance' | 'emergency';
  status: 'quoted' | 'approved' | 'scheduled' | 'in_progress' | 'completed' | 'cancelled' | 'on_hold';
  priority: 'low' | 'medium' | 'high' | 'emergency';
  title: string;
  description: string;
  
  // Scheduling
  estimatedStartDate?: Date;
  estimatedEndDate?: Date;
  actualStartDate?: Date;
  actualEndDate?: Date;
  estimatedDuration: number; // hours
  
  // Financial
  quotedPrice: number;
  actualCost?: number;
  materials: Material[];
  laborHours: number;
  
  // Assignment
  assignedCrew: CrewMember[];
  
  // Documentation
  photos: Photo[];
  notes: string[];
  
  // Weather
  weatherConditions?: WeatherCondition[];
  
  // Progress
  progressPercentage: number;
  milestones: {
    name: string;
    completed: boolean;
    completedAt?: Date;
  }[];
  
  createdAt: Date;
  updatedAt: Date;
}

export interface Quote {
  id: string;
  jobId: string;
  clientId: string;
  version: number;
  status: 'draft' | 'sent' | 'approved' | 'rejected' | 'expired';
  
  // Line Items
  lineItems: {
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
  }[];
  
  // Totals
  subtotal: number;
  tax: number;
  total: number;
  
  // Terms
  validUntil: Date;
  terms: string;
  warranty: string;
  
  // Tracking
  sentAt?: Date;
  viewedAt?: Date;
  approvedAt?: Date;
  createdAt: Date;
}

export interface Invoice {
  id: string;
  jobId: string;
  clientId: string;
  invoiceNumber: string;
  status: 'draft' | 'sent' | 'viewed' | 'paid' | 'overdue' | 'cancelled';
  
  // Line Items (similar to Quote)
  lineItems: {
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
  }[];
  
  // Financial
  subtotal: number;
  tax: number;
  total: number;
  amountPaid: number;
  amountDue: number;
  
  // Dates
  issueDate: Date;
  dueDate: Date;
  paidDate?: Date;
  
  // Payment
  paymentMethod?: 'cash' | 'check' | 'credit_card' | 'bank_transfer';
  paymentNotes?: string;
}

// Dashboard Analytics Types
export interface DashboardStats {
  totalClients: number;
  activeJobs: number;
  scheduledJobs: number;
  completedThisMonth: number;
  totalRevenue: number;
  averageJobValue: number;
  weatherAlerts?: WeatherAlert[];
}

export interface WeatherAlert {
  id: string;
  type: 'storm' | 'rain' | 'wind' | 'snow';
  severity: 'low' | 'medium' | 'high';
  message: string;
  affectedJobs: string[]; // Job IDs
  startDate: Date;
  endDate: Date;
}

// Search and Filter Types
export interface SearchFilters {
  query?: string;
  clientStatus?: Client['status'][];
  jobStatus?: Job['status'][];
  jobType?: Job['type'][];
  priority?: Job['priority'][];
  dateRange?: {
    start: Date;
    end: Date;
  };
  revenueRange?: {
    min: number;
    max: number;
  };
  assignedCrew?: string[];
  location?: {
    city?: string;
    state?: string;
    zipCode?: string;
  };
}

export interface SearchResult<T> {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}