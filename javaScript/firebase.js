  // Import the functions you need from the SDKs you need
  import {
      initializeApp
  } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
  import {
      getAnalytics
  } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
  import {
      getFirestore,
      getDoc,
      getDocs,
      setDoc,
      doc,
      query,
      where,
      collection
  } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
      apiKey: "AIzaSyCg_NTT47DshxkF176TekB82Zc9wgtITBw",
      authDomain: "proyectohospital-558f9.firebaseapp.com",
      projectId: "proyectohospital-558f9",
      storageBucket: "proyectohospital-558f9.appspot.com",
      messagingSenderId: "789206506905",
      appId: "1:789206506905:web:103cc3cb48c3690083c708",
      measurementId: "G-T59Z08QL7T"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize GoogleAnalytics
  const analytics = getAnalytics(app);
  // Initialize service
  const db = getFirestore();
  //Collecion
  //const dniRef = collection(db, 'clientes')
  //query
  //const querydni = query(dniRef, where("dni", "==", "123"))


//export const checkUser = async


  //guarda en una coleccion
  export const saveTask = async(nombre, apellido, dni, telefono, correo, login, contraseña) => {

    const querySnapshot = await getDocs(collection(db, "clientes"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      if(doc.id == dni){
       console.log("YA EXISTE EL DOCUMENTO")
       
      }else{

     
        setDoc(doc(db, 'clientes', dni), {
            nombre: nombre,
            apellido: apellido,
            dni: dni,
            telefono: telefono,
            correo: correo,
            login: login,
            contraseña: contraseña,
    
            
        })
        break;

      }

    });
    
      // console.log(title,descripcion)
  }

  // 12 espacios bootstrap