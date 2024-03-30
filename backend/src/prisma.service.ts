import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    console.log('Initializing PrismaService...');
    try {
      await this.$connect();
      console.log('PrismaService connected to database');
    } catch (error) {
      console.error('Failed to connect to database:', error);
    }
  }
}
