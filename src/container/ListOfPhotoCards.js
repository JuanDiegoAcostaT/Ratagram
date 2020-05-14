import { withPhotos } from '../components/Hoc(HighOrderComponent)/WithPhotos'
import { ListOfPhotoCardComponent } from '../components/ListOfPhotoCard/index'

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardComponent)
