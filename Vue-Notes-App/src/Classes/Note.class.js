export class Note {
    id = "";
	mainText = "";
	title = "";

	constructor(_maintext, _title) {
		this.id=Math.floor(Math.random() * 10001);
		this.mainText = _maintext;
        this.title = _title;
	}

	editMainText(newText) {
		this.mainText = newText;
	}
}