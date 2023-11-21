export class Note {
    id = "";
	mainText = "";
	title = "";

	constructor(_id, _maintext, _title) {
		this.id=_id;
		this._maintext
        this.title = _title;
	}


	editMainText(newText) {
		this.mainText = newText;
	}
}