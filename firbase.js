import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";

import {
getDatabase,
ref,
set,
get,
update,
child
}
from "https://www.gstatic.com/firebasejs/12.12.0/firebase-database.js";


const firebaseConfig = {

apiKey: "AIzaSyCLdqMLxR9ZKEeS6zDHv-rkbSt-PTbDtMc",

authDomain: "attendance-tracker-7256b.firebaseapp.com",

databaseURL:
"https://attendance-tracker-7256b-default-rtdb.firebaseio.com",

projectId: "attendance-tracker-7256b",

storageBucket: "attendance-tracker-7256b.appspot.com",

messagingSenderId: "512459479971",

appId: "1:512459479971:web:3e69c4b1cc84388fce9816"

};


const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db, ref, set, get, update, child };