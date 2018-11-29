import * as firebase from "firebase";
import { prodConfig } from "./config";

!firebase.apps.length && firebase.initializeApp(prodConfig);

const auth = firebase.auth();

export { auth };
