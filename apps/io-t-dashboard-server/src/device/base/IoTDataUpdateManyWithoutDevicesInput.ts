/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { IoTDataWhereUniqueInput } from "../../ioTData/base/IoTDataWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class IoTDataUpdateManyWithoutDevicesInput {
  @Field(() => [IoTDataWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [IoTDataWhereUniqueInput],
  })
  connect?: Array<IoTDataWhereUniqueInput>;

  @Field(() => [IoTDataWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [IoTDataWhereUniqueInput],
  })
  disconnect?: Array<IoTDataWhereUniqueInput>;

  @Field(() => [IoTDataWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [IoTDataWhereUniqueInput],
  })
  set?: Array<IoTDataWhereUniqueInput>;
}

export { IoTDataUpdateManyWithoutDevicesInput as IoTDataUpdateManyWithoutDevicesInput };
