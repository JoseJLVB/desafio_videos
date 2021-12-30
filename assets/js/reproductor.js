import Multimedia from './multimedia.js';
export default class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        let _id = id;

    this.getId = () => {
        return _id;
    };
}
    get id() {
        return this.getId();
    }

    playMultimedia(func) {
        func(this.url, this.id);
    }

    setInicio(time) {
        return this.setUrl(`${this.url}?start=${time}`);
    }
}
