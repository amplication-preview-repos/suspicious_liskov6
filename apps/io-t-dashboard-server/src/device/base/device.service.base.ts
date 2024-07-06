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
  Device as PrismaDevice,
  IoTData as PrismaIoTData,
  Business as PrismaBusiness,
} from "@prisma/client";

export class DeviceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.DeviceCountArgs, "select">): Promise<number> {
    return this.prisma.device.count(args);
  }

  async devices(args: Prisma.DeviceFindManyArgs): Promise<PrismaDevice[]> {
    return this.prisma.device.findMany(args);
  }
  async device(
    args: Prisma.DeviceFindUniqueArgs
  ): Promise<PrismaDevice | null> {
    return this.prisma.device.findUnique(args);
  }
  async createDevice(args: Prisma.DeviceCreateArgs): Promise<PrismaDevice> {
    return this.prisma.device.create(args);
  }
  async updateDevice(args: Prisma.DeviceUpdateArgs): Promise<PrismaDevice> {
    return this.prisma.device.update(args);
  }
  async deleteDevice(args: Prisma.DeviceDeleteArgs): Promise<PrismaDevice> {
    return this.prisma.device.delete(args);
  }

  async findIoTDataItems(
    parentId: string,
    args: Prisma.IoTDataFindManyArgs
  ): Promise<PrismaIoTData[]> {
    return this.prisma.device
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .ioTDataItems(args);
  }

  async getBusiness(parentId: string): Promise<PrismaBusiness | null> {
    return this.prisma.device
      .findUnique({
        where: { id: parentId },
      })
      .business();
  }
}
