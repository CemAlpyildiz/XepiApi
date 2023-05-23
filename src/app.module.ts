import { Module } from '@nestjs/common';
import { AssociationsModule } from './associations/associations.module';

@Module({
  imports: [AssociationsModule],
})
export class AppModule {}
