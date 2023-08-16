import { Module } from '@nestjs/common';
import { CacheService } from './cahe.service';
import { CacheModule as CacheModuleNest } from '@nestjs/cache-manager';
@Module({
  imports: [
    CacheModuleNest.register({
      ttl: 900000000,
    }),
  ],
  providers: [CacheService],
  exports: [CacheModule, CacheService],
})
export class CacheModule {}
