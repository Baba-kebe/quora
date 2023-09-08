import { v4 as uuid } from 'uuid'
export interface User {
  id : typeof uuid,
  nom :  string,
  prenom : string,
  username : string,
  password : string

}
