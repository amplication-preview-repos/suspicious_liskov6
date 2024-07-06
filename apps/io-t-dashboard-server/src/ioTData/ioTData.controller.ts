import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IoTDataService } from "./ioTData.service";
import { IoTDataControllerBase } from "./base/ioTData.controller.base";

@swagger.ApiTags("ioTData")
@common.Controller("ioTData")
export class IoTDataController extends IoTDataControllerBase {
  constructor(
    protected readonly service: IoTDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
