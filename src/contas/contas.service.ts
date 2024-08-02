import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contas } from './schemas/contas.schema';
import { CreateContaDto } from './dto/create-conta-dto';
import { UpdateContaDto } from './dto/update-user-dto';

@Injectable()
export class ContasService {
  constructor(@InjectModel(Contas.name) private contaModel: Model<Contas>) {}

  create(conta: CreateContaDto)  {
    const createdConta = new this.contaModel(conta);
    return createdConta.save();
  }

  findAll()  {
    return this.contaModel.find().exec();
  }

  findOne(numero: number)  {
    return this.contaModel.findOne({ numero: numero }).exec();
  }

  async update(numero: number, contaDto: UpdateContaDto)  {
    const conta = await this.contaModel.findOneAndUpdate({numero: numero}, contaDto).exec();
    return conta;
  }

  async remove(numero: number)  {
    const conta = await this.contaModel.findOneAndDelete({ numero: numero }).exec();
    return conta
  }
}
