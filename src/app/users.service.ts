import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   user0 :User = {
    id: "0",
    firstName: "Deepak",
    lastName: "arora",
    age: 20,
    login: "pizza.boi",
    password: "giveMePizza",
    isDeleted: false
  }
  user1 :User = {
    id: "1",
    firstName: "Debuttam",
    lastName: "Banerjee",
    age: 20,
    login: "party.boi",
    password: "letsParty",
    isDeleted: true
  }
  user2 :User = {
    id: "2",
    firstName: "Rahul",
    lastName: "Bhatia",
    age: 20,
    login: "sleep.boi",
    password: "IdontWanttoSleep",
    isDeleted: true
  }
  user4 :User = {
    id: "4",
    firstName: "Mrinal",
    lastName: "Gosh",
    age: 20,
    login: "boi.boi",
    password: "HtmlInHeart",
    isDeleted: false
  }
}
export interface User {
  id: string,
  firstName: string,
  lastName: string,
  age: number,
  login: string,
  password: string,
  isDeleted: boolean
}
