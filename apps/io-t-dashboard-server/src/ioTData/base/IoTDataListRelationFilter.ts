/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IoTDataWhereInput } from "./IoTDataWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class IoTDataListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => IoTDataWhereInput,
  })
  @ValidateNested()
  @Type(() => IoTDataWhereInput)
  @IsOptional()
  @Field(() => IoTDataWhereInput, {
    nullable: true,
  })
  every?: IoTDataWhereInput;

  @ApiProperty({
    required: false,
    type: () => IoTDataWhereInput,
  })
  @ValidateNested()
  @Type(() => IoTDataWhereInput)
  @IsOptional()
  @Field(() => IoTDataWhereInput, {
    nullable: true,
  })
  some?: IoTDataWhereInput;

  @ApiProperty({
    required: false,
    type: () => IoTDataWhereInput,
  })
  @ValidateNested()
  @Type(() => IoTDataWhereInput)
  @IsOptional()
  @Field(() => IoTDataWhereInput, {
    nullable: true,
  })
  none?: IoTDataWhereInput;
}
export { IoTDataListRelationFilter as IoTDataListRelationFilter };
