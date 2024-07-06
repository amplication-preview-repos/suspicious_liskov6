/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  IoTData as PrismaIoTData,
  Device as PrismaDevice,
} from "@prisma/client";

export class IoTDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.IoTDataCountArgs, "select">): Promise<number> {
    return this.prisma.ioTData.count(args);
  }

  async ioTDataItems(
    args: Prisma.IoTDataFindManyArgs
  ): Promise<PrismaIoTData[]> {
    return this.prisma.ioTData.findMany(args);
  }
  async ioTData(
    args: Prisma.IoTDataFindUniqueArgs
  ): Promise<PrismaIoTData | null> {
    return this.prisma.ioTData.findUnique(args);
  }
  async createIoTData(args: Prisma.IoTDataCreateArgs): Promise<PrismaIoTData> {
    return this.prisma.ioTData.create(args);
  }
  async updateIoTData(args: Prisma.IoTDataUpdateArgs): Promise<PrismaIoTData> {
    return this.prisma.ioTData.update(args);
  }
  async deleteIoTData(args: Prisma.IoTDataDeleteArgs): Promise<PrismaIoTData> {
    return this.prisma.ioTData.delete(args);
  }

  async getDevice(parentId: string): Promise<PrismaDevice | null> {
    return this.prisma.ioTData
      .findUnique({
        where: { id: parentId },
      })
      .device();
  }
}
