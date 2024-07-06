import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IoTDataModuleBase } from "./base/ioTData.module.base";
import { IoTDataService } from "./ioTData.service";
import { IoTDataController } from "./ioTData.controller";
import { IoTDataResolver } from "./ioTData.resolver";

@Module({
  imports: [IoTDataModuleBase, forwardRef(() => AuthModule)],
  controllers: [IoTDataController],
  providers: [IoTDataService, IoTDataResolver],
  exports: [IoTDataService],
})
export class IoTDataModule {}
