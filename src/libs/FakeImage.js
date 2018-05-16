import * as firebase from 'firebase';
// Required for Side Effects
import 'firebase/firestore';
import 'firebase/auth';

declare var global: any;

export default class FakeImage {
    static ensureImageExists() {
        if (!global.Image) {
            global.Image = FakeImage;
        }
    }

    _isLoaded = false;
    _callbacks: (() => void)[] = [];

    set src(url: string) {
        this._isLoaded = false;
        this.load(url);
    }

    load = async (url: string) => {
        await fetch(url);
        this._callbacks.forEach(x => x());
        this._isLoaded = true;
    };

    onload(callback: () => void) {
        if (this._isLoaded) { callback(); }
        this._callbacks.push(callback);
    }
}

FakeImage.ensureImageExists();

const app = firebase.initializeApp({
    // INSERT SETTINGS
});

firebase.firestore.setLogLevel('debug');
const firestore = firebase.firestore(app);
const auth = firebase.auth(app);