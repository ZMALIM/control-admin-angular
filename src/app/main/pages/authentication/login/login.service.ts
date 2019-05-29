import { Injectable, NgZone, OnInit } from '@angular/core';
import { User } from './login.interface';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    public userData: any;
    public userConfigCollection: AngularFirestoreDocument<any>;
    constructor (private afs: AngularFirestore,
        private afAuth: AngularFireAuth,
        private router: Router,
        private ngZone: NgZone) {
        this.afAuth.authState.subscribe(user => {
            if (user){
                const userConfig: AngularFirestoreDocument<any> = this.afs.collection('user-config').doc(user.uid);
                userConfig.valueChanges().subscribe(config => {
                    localStorage.setItem('user', JSON.stringify({currenUser: user, config: config ? config : ''}));
                    JSON.parse(localStorage.getItem('user'));
                });
            }else{
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
        
        this.userData = JSON.parse(localStorage.getItem('user'));
        
    }

    SignIn(user): Promise<any> {
        return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
            .then(result => {
                this.ngZone.run((): void => {
                    this.router.navigate(['/apps/dashboards/analytics']);
                });
                this.SetUserData(result.user);
            })
            .catch(e => {
                throw new Error(e);
            });
    }

    SignUp(user): Promise<any> {
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .then(result => {
                this.SendVerificationMail();
                this.SetUserData(result.user);
            })
            .catch(e => {
                throw new Error(e);
            });
    }

    SendVerificationMail(): Promise<any> {
        return this.afAuth.auth.currentUser.sendEmailVerification()
            .then((): void => {
                this.router.navigate(['']);
            });
    }

    ForgotPassword(user): Promise<any> {
        return this.afAuth.auth.sendPasswordResetEmail(user.email)
            .then((): void => {
                alert('Password reset');
            })
            .catch(e => {
                throw new Error(e);
            });
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        // return (user !== null && user.emailVerified !== false) ? true : false;
        return (user) ? true : false;

    }

    GoogleAuth(): Promise<any> {
        return this.AuthLogin(new auth.GoogleAuthProvider());
    }

    FacebookAuth(): Promise<any> {
        return this.AuthLogin(new auth.FacebookAuthProvider());
    }

    AuthLogin(provider: auth.AuthProvider): Promise<any> {
        return this.afAuth.auth.signInWithPopup(provider)
            .then(result => {
                this.ngZone.run((): void => {
                    this.router.navigate(['/apps/dashboards/analytics']);
                });
                this.SetUserData(result.user);
            })
            .catch(e => {
                console.log(e);
            });
    }

    SetUserData(user): Promise<any> {
        const userRef: AngularFirestoreDocument<any> = this.afs.collection('users').doc(user.uid);
        const userData: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
            merge: true
        });
    }

    SignOut(): Promise<any> {
        return this.afAuth.auth.signOut().then((): void => {
            localStorage.removeItem('user');
            this.userData = null;
            this.router.navigate(['pages/auth/login']);
        }).catch(e => {
            throw new Error(e);
        });
    }
}
