import { makeAutoObservable } from "mobx"

class DonutOptions{

	fontFamily: string = 'Montserrat'
	fontSize: number = 14
	animation: string = 'Rotate'

	images: string[] = ['https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1']
	selectedImage: string = this.images[0]

	constructor(){
		makeAutoObservable(this)
	}

}

export default new DonutOptions()