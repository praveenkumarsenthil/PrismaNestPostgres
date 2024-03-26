import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma_service';
import { json } from 'stream/consumers';

@Injectable()
export class UsersService {
    constructor(private readonly prisma:PrismaService){}

    async findAll(){
        return this.prisma.prismaClient.user.findMany()
    }

    async findOne(id:number){
        return this.prisma.prismaClient.user.findUnique({
            where :{id},

        })
    }

    async create(data: any) {
        try {
            const createdUser = await this.prisma.prismaClient.user.create({
                data
            });
            if (!createdUser) {
                return "Data not created"
            } else {
                return createdUser; 
            }
            
        } catch (error) {
            // Handle errors appropriately
            throw error;
        }
    }

    async update(id:number,data:any){
        return this.prisma.prismaClient.user.update({
            where:{id},
            data
        })
    }

    async delData(id: number) {
        try {
            const deletedUser = await this.prisma.prismaClient.user.delete({
                where: { id },
            });
    
            if (!deletedUser) {
                
                return { status: 401, message: 'User not found or not authorized.' };
            } else {
               
                return deletedUser;
            }
        } catch (error) {
            
            return { status: 500, message: 'Internal server error.' }
        }
    }
}
