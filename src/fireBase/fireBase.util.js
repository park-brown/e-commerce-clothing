import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyA9SEUHrW8g_3MadAn8nI-Gy97-ncaTpCc',
	authDomain: 'crown-ecommerce-a74fe.firebaseapp.com',
	projectId: 'crown-ecommerce-a74fe',
	storageBucket: 'crown-ecommerce-a74fe.appspot.com',
	messagingSenderId: '655302452432',
	appId: '1:655302452432:web:1ea3a526df6d34f38a2ad5',
	measurementId: 'G-PDG993R1H9',
};
// export const createUserProfile = async (userAuth, additionalData) => {
// 	if (!userAuth) return;

// 	const userRef = fireStore.doc(`users/${userAuth.uid}`);
// 	const snapShot = await userRef.get();
// 	if (!snapShot.exists) {
// 		const { displayName, email } = userAuth;
// 		const createAt = new Date();
// 		try {
// 			await userRef.set({
// 				displayName,
// 				email,
// 				createAt,
// 				...additionalData,
// 			});
// 		} catch (error) {
// 			console.log('error creating user', error.message);
// 		}
// 	}
// 	return userRef;
// };
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = fireStore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};
export const addCollectionsAndDocs = async (collectionKey, objectsToAdd) => {
	const collectionRef = fireStore.collection(collectionKey);
	const batch = fireStore.batch();
	objectsToAdd.forEach((obj) => {
		//let firestore set an unique ID for each of our shop data array//
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});
	return await batch.commit();
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
