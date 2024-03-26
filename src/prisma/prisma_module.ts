import {Module} from '@nestjs/common'
import { PrismaService } from './prisma_service'


@Module({
   providers:[PrismaService],
   exports:[PrismaService]
})

export class PrismaModule{}