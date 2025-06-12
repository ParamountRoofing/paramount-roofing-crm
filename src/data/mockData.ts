import { Client, CrewMember, Job, DashboardStats } from '../types';

// Sample Mock Data
export const mockClients: Client[] = [
  {
    id: 'client-1',
    name: 'Johnson Family',
    contacts: [
      { name: 'Mike Johnson', email: 'mike@email.com', phone: '(555) 123-4567', role: 'primary' },
      { name: 'Sarah Johnson', email: 'sarah@email.com', phone: '(555) 123-4568', role: 'secondary' }
    ],
    property: {
      address: {
        street: '123 Oak Street',
        city: 'Springfield',
        state: 'IL',
        zipCode: '62701',
        coordinates: { lat: 39.7817, lng: -89.6501 }
      },
      type: 'residential',
      roofType: 'asphalt_shingle',
      roofAge: 15,
      squareFootage: 2800,
      stories: 2,
      hasGutters: true,
      notes: 'Corner lot, easy access'
    },
    serviceHistory: ['job-1', 'job-2'],
    totalJobValue: 18500,
    status: 'active',
    source: 'referral',
    tags: ['premium-client', 'repeat-customer'],
    notes: 'Great customer, always pays on time',
    createdAt: new Date('2023-03-15'),
    lastContactDate: new Date('2024-05-20')
  },
  {
    id: 'client-2',
    name: 'Downtown Office Complex',
    contacts: [
      { name: 'Property Manager', email: 'pm@downtown.com', phone: '(555) 987-6543', role: 'primary' }
    ],
    property: {
      address: {
        street: '456 Business Ave',
        city: 'Springfield',
        state: 'IL',
        zipCode: '62702'
      },
      type: 'commercial',
      roofType: 'flat',
      squareFootage: 15000,
      stories: 1,
      hasGutters: false,
      notes: 'Large commercial building, requires crane access'
    },
    serviceHistory: ['job-3'],
    totalJobValue: 45000,
    status: 'active',
    source: 'online',
    tags: ['commercial', 'high-value'],
    notes: 'Annual maintenance contract',
    createdAt: new Date('2023-01-10'),
    lastContactDate: new Date('2024-06-01')
  }
];

export const mockCrewMembers: CrewMember[] = [
  {
    id: 'crew-1',
    name: 'Tom Rodriguez',
    role: 'foreman',
    phone: '(555) 111-2222',
    skills: ['leadership', 'safety', 'quality_control', 'customer_service'],
    hourlyRate: 35,
    isAvailable: true
  },
  {
    id: 'crew-2',
    name: 'Jake Williams',
    role: 'roofer',
    phone: '(555) 333-4444',
    skills: ['shingle_installation', 'metal_roofing', 'repairs'],
    hourlyRate: 28,
    isAvailable: true
  },
  {
    id: 'crew-3',
    name: 'Carlos Martinez',
    role: 'roofer',
    phone: '(555) 555-6666',
    skills: ['tile_installation', 'flat_roofing', 'waterproofing'],
    hourlyRate: 30,
    isAvailable: false
  }
];

export const mockJobs: Job[] = [
  {
    id: 'job-1',
    clientId: 'client-1',
    type: 'replacement',
    status: 'in_progress',
    priority: 'medium',
    title: 'Complete Roof Replacement',
    description: 'Replace old asphalt shingles with new architectural shingles',
    estimatedStartDate: new Date('2024-06-15'),
    estimatedEndDate: new Date('2024-06-18'),
    actualStartDate: new Date('2024-06-15'),
    estimatedDuration: 32,
    quotedPrice: 15500,
    materials: [
      {
        id: 'mat-1',
        name: 'Architectural Shingles',
        unit: 'bundle',
        unitCost: 45,
        quantityNeeded: 85,
        supplier: 'ABC Roofing Supply',
        inStock: true
      },
      {
        id: 'mat-2',
        name: 'Underlayment',
        unit: 'roll',
        unitCost: 120,
        quantityNeeded: 12,
        supplier: 'ABC Roofing Supply',
        inStock: true
      }
    ],
    laborHours: 32,
    assignedCrew: [mockCrewMembers[0], mockCrewMembers[1]],
    photos: [
      {
        id: 'photo-1',
        url: '/api/placeholder/400/300',
        caption: 'Before - old shingles showing wear',
        type: 'before',
        takenAt: new Date('2024-06-14')
      }
    ],
    notes: ['Customer requested specific color match', 'Need to coordinate with gutter cleaning'],
    weatherConditions: [
      {
        date: new Date('2024-06-15'),
        temperature: 75,
        condition: 'sunny',
        windSpeed: 8,
        chanceOfRain: 10,
        suitable: true
      }
    ],
    progressPercentage: 60,
    milestones: [
      { name: 'Materials delivered', completed: true, completedAt: new Date('2024-06-14') },
      { name: 'Old shingles removed', completed: true, completedAt: new Date('2024-06-15') },
      { name: 'New shingles installed', completed: false },
      { name: 'Cleanup completed', completed: false }
    ],
    createdAt: new Date('2024-05-20'),
    updatedAt: new Date('2024-06-15')
  },
  {
    id: 'job-2',
    clientId: 'client-1',
    type: 'repair',
    status: 'completed',
    priority: 'high',
    title: 'Storm Damage Repair',
    description: 'Repair damage from recent hailstorm',
    estimatedStartDate: new Date('2024-04-10'),
    estimatedEndDate: new Date('2024-04-10'),
    actualStartDate: new Date('2024-04-10'),
    actualEndDate: new Date('2024-04-10'),
    estimatedDuration: 8,
    quotedPrice: 3000,
    actualCost: 2800,
    materials: [
      {
        id: 'mat-3',
        name: 'Replacement Shingles',
        unit: 'bundle',
        unitCost: 45,
        quantityNeeded: 8,
        supplier: 'ABC Roofing Supply',
        inStock: true
      }
    ],
    laborHours: 8,
    assignedCrew: [mockCrewMembers[1]],
    photos: [
      {
        id: 'photo-2',
        url: '/api/placeholder/400/300',
        caption: 'Hail damage on south-facing slope',
        type: 'damage',
        takenAt: new Date('2024-04-08')
      },
      {
        id: 'photo-3',
        url: '/api/placeholder/400/300',
        caption: 'Completed repair',
        type: 'after',
        takenAt: new Date('2024-04-10')
      }
    ],
    notes: ['Insurance claim approved', 'Customer very satisfied'],
    progressPercentage: 100,
    milestones: [
      { name: 'Damage assessment', completed: true, completedAt: new Date('2024-04-08') },
      { name: 'Insurance approval', completed: true, completedAt: new Date('2024-04-09') },
      { name: 'Repair completed', completed: true, completedAt: new Date('2024-04-10') }
    ],
    createdAt: new Date('2024-04-08'),
    updatedAt: new Date('2024-04-10')
  }
];