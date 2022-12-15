import * as mongoose from 'mongoose';
import ticketModel from '../models/daomodels/ticket';
import { CustomLogger } from '../config/Logger'


export class ticketDao {
    private ticket = ticketModel;
    constructor() { }
    
    public async GpDelete(ticketId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpDelete');

    

    
    
    
    this.ticket.findByIdAndRemove(ticketId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(ticketData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(ticketData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.ticket.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(ticketData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpSearchForUpdate');

    

    
    
    
    this.ticket.findOneAndUpdate({ _id: ticketData._id }, ticketData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(ticketData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpUpdate');

    

    
    
    
    this.ticket.findOneAndUpdate({ _id: ticketData._id }, ticketData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(ticketId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpGetNounById');

    

    
    
    
    this.ticket.findById(ticketId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpGetAllValues');

    

    
    
    
    this.ticket.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(ticketData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpCreate');

    let temp = new ticketModel(ticketData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(ticketData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.ticket.aggregate(([
                        { $match: { $and: [{ created_by: ticketData.created_by }] } }
                    ])).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpGetNounCreatedBy');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}