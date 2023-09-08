import {v4 as uuid} from 'uuid'
export interface Question {
  categorie : string,
  id: typeof uuid,
  contenu : string,
  image: string
}
