import logger  from "../misc/logger";
import Success from "../domain/Success";
import UserModel from "../models/userModel";
import User from "../domain/User";

// here this will make a promise by interaction with model 
// controller  wait until the promise came 

export const getAllUsers = async (): 
Promise<Success<User[]>> => {
    logger.info("Getting All Users");
    const users = await UserModel.getAllUsers();
    return {
        data: users,
        message: "Users fetched successfully",
      };
}