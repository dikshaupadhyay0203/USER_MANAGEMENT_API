import { users } from "../data/user.js";
export const deleteUserService = (id)=>{
    const index= users.findIndex(u=> u.id ===id);

    if(index===-1){
        return false;
    }
    users.splice(index,1);
    return true;
};

export const createUserService=(email,name)=>{
    console.log("processing data in service");

    const newUser={
        id: Date.now().toString(),
        email:email,
        name:name,
    };
    users.push(newUser);
    return newUser;
}
let user= createUserService("diksha@gmail.com", "diksha")
console.log(user);