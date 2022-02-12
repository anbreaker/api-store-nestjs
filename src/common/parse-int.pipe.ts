import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const valueInt = Number(value);

    if (isNaN(valueInt))
      throw new BadRequestException(`${valueInt} is not a number!`);

    return valueInt;
  }
}
