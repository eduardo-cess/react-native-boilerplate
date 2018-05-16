import Firebase from 'firebase'
import 'firebase/firestore'

declare var global: any;

const config = {
  apiKey: "AIzaSyBR4QGsdrUvRaLPMlHOTUNw20a29aYYdIo",
  authDomain: "appagriculturafamiliar.firebaseapp.com",
  databaseURL: "https://appagriculturafamiliar.firebaseio.com",
  projectId: "appagriculturafamiliar",
  storageBucket: "appagriculturafamiliar.appspot.com",
  messagingSenderId: "703635634619"
};

class FakeImage {
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

Firebase.initializeApp(config)

export const db = Firebase.firestore()
export const auth = Firebase.auth()
export const storage = Firebase.storage()
