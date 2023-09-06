import { Collection, Db } from "mongodb";
import clientPromise from "./client";

let client;
let db: Db;
let users: Collection<Document>;

const init = async () => {
  if (db) return
  try {
    client = await clientPromise
    db = client.db()
    users = db.collection('users')
  } catch (error) {
    throw new Error("Failed to establish connection to database");
  }
}

  ; (async () => {
    await init()
  })()


// GET users
export const getUsers = async () => {
  try {
    if (!users) await init()
    const result = await users.find({}).map(user => ({ ...user, _id: user._id.toString() })).toArray()
    return { success: true, users: result }
  } catch (error) {
    return { success: false, error: "Failed to fetch users" }
  }
}

// GET a particular user by email
export const getUserByEmail = async (email: string) => {
  try {
    if (!users) await init()
    const user = await users.findOne({ email: email })
    if (!user) {
      return { success: false, error: "User not found" }
    }
    return { success: true, user }
  } catch (error) {
    return { success: false, error: "Failed to fetch user" }
  }
}

// PUT to update user fields (name and phone number) by email
export const updateUserByEmail = async (email: string, updatedUserData: { name: string, phone: string }) => {
  try {
    if (!users) await init()
    const result = await users.updateOne(
      { email },
      { $set: updatedUserData }
    )
    if (result.matchedCount === 0) {
      return { success: false, error: "User not found" }
    }
    return { success: true, message: "User updated successfully" }
  } catch (error) {
    return { success: false, error: "Failed to update user" }
  }
}

// DELETE a user by email
export const deleteUserByEmail = async (email: string) => {
  try {
    if (!users) await init()
    const result = await users.deleteOne({ email })
    if (result.deletedCount === 0) {
      return { success: false, error: "User not found" }
    }
    return { success: true, message: "User deleted successfully" }
  } catch (error) {
    return { success: false, error: "Failed to delete user" }
  }
}
