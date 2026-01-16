import brypt from 'bcrypt';

export const hashPassword = async(password)=>{
    return await brypt.hash(password,10);
};

export const comparePassword = async(password,hash)=>{
    return await brypt.compare(password,hash)
}