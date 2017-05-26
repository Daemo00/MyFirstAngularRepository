import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import * as firebase from "firebase";

export class FirebaseResolver implements Resolve<firebase.app.App>{
    static config = {
        apiKey: "AIzaSyAd1yV2Uql8vs6rbcASSA-Q0OXR3AuXOTw",
        authDomain: "myfirstapp-3e880.firebaseapp.com",
        databaseURL: "https://myfirstapp-3e880.firebaseio.com",
        projectId: "myfirstapp-3e880",
        storageBucket: "myfirstapp-3e880.appspot.com",
        messagingSenderId: "513852456302"
    };

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): firebase.app.App | Observable<firebase.app.App> | Promise<firebase.app.App> {
        if (!firebase.apps.length) {
            console.log("Initializing Firebase...");
            // Initialize Firebase
            return firebase.initializeApp(FirebaseResolver.config);
        }
    }
}