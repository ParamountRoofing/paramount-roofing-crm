import { Client, Job, CrewMember, DashboardStats } from '../types';
import { mockClients, mockJobs, mockCrewMembers } from '../data/mockData';

// Service Layer Mock Functions
export class MockJobberService {
  static async getClients(): Promise<Client[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockClients;
  }

  static async getClient(id: string): Promise<Client | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockClients.find(client => client.id === id) || null;
  }

  static async getJobs(): Promise<Job[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    return mockJobs;
  }

  static async getJob(id: string): Promise<Job | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockJobs.find(job => job.id === id) || null;
  }

  static async getCrewMembers(): Promise<CrewMember[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockCrewMembers;
  }

  static async updateJobStatus(jobId: string, status: Job['status']): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const job = mockJobs.find(j => j.id === jobId);
    if (job) {
      job.status = status;
      job.updatedAt = new Date();
      return true;
    }
    return false;
  }

  static async searchJobs(query: string): Promise<Job[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockJobs.filter(job => 
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.description.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Dashboard Analytics
  static async getDashboardStats(): Promise<DashboardStats> {
    await new Promise(resolve => setTimeout(resolve, 400));
    return {
      totalClients: mockClients.length,
      activeJobs: mockJobs.filter(j => j.status === 'in_progress').length,
      scheduledJobs: mockJobs.filter(j => j.status === 'scheduled').length,
      completedThisMonth: mockJobs.filter(j => 
        j.status === 'completed' && 
        j.actualEndDate && 
        j.actualEndDate.getMonth() === new Date().getMonth()
      ).length,
      totalRevenue: mockJobs
        .filter(j => j.status === 'completed')
        .reduce((sum, j) => sum + (j.actualCost || j.quotedPrice), 0),
      averageJobValue: mockJobs.reduce((sum, j) => sum + j.quotedPrice, 0) / mockJobs.length
    };
  }
}