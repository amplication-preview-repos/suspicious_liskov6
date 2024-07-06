import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IoTDataServiceBase } from "./base/ioTData.service.base";

@Injectable()
export class IoTDataService extends IoTDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
