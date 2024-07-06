/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DeviceWhereUniqueInput } from "../../device/base/DeviceWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DeviceCreateNestedManyWithoutBusinessesInput {
  @Field(() => [DeviceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DeviceWhereUniqueInput],
  })
  connect?: Array<DeviceWhereUniqueInput>;
}

export { DeviceCreateNestedManyWithoutBusinessesInput as DeviceCreateNestedManyWithoutBusinessesInput };
