  // Import the functions you need from the SDKs you need
  import {
      initializeApp
  } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
  import {
      getAnalytics
  } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
  import {
      getFirestore,
      getDocs,
      setDoc,
      doc,
      collection,
      deleteDoc,




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

  export const getTask = async () => getDocs(collection(db, "clientes"));
  export const getTaskroot = async () => getDocs(collection(db, "root"));
  export const getTaskDoctor = async () => deleteDoc(doc(db, "doctores", "qwed"));



  function generatePassword() {
      var pass = '';
      var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
          'abcdefghijklmnopqrstuvwxyz' + '0123456789' + '!"·$%&/()=?¿';

      var i;
      for (i = 0; i <= 7; i++) {
          var char = Math.floor(Math.random() *
              str.length + 3);

          pass += str.charAt(char)
      }

      return pass;
  }



  //guarda en una coleccion
  export const saveCli = async (nombre, apellido, direccion, poblacion, provincia, pais, dni, telefono, correo, login, contraseña) => {
      var x = Boolean(false);
      const querySnapshot = await getDocs(collection(db, "clientes"));
      querySnapshot.forEach((doc) => {
          if (doc.id == dni) {
              alert("YA EXISTE EL DOCUMENTO");
              x = false;
          } else {
              x = true;
          }
      })
      // size == 0 
      if (x == true) {
          setDoc(doc(db, 'clientes', dni), {
              nombre: nombre,
              apellido: apellido,
              direccion: direccion,
              poblacion: poblacion,
              provincia: provincia,
              pais: pais,
              dni: dni,
              telefono: telefono,
              correo: correo,
              usuario: login,
              contraseña: contraseña,

          })
      }

  }


  export const saveDoctor = async (nombre, correo, telefono, dni) => {
      var x = Boolean(false);

      const querySnapshot = await getDocs(collection(db, "doctores"));
      querySnapshot.forEach((doc) => {

          if (doc.id == dni) {
              alert("YA EXISTE EL DOCUMENTO");
              x = false;
          } else {
              x = true;
          }
      })

      console.log(x)

      if (x == true) {
          setDoc(doc(db, "doctores", dni), {
              nombre: nombre,
              correo: correo,
              telefono: telefono,
              dni: dni,
              contraseña: generatePassword(),
              usuario: dni,
              tipo: "doctor",


          })
      }

      console.log(x)

  }

  export const saveSecret = async (nombre, correo, telefono, dni, contraseña) => {
      var x = Boolean(false);
      const querySnapshot = await getDocs(collection(db, "recepcionistas"));
      querySnapshot.forEach((doc) => {
          if (doc.id == dni) {
              alert("YA EXISTE EL DOCUMENTO");

              x = false;
          } else {
              x = true;
          }
      })
      // size == 0 
      if (x == true) {
          setDoc(doc(db, 'recepcionistas', dni), {
              nombre: nombre,
              correo: correo,
              telefono: telefono,
              dni: dni,
              usuario: dni,
              contraseña: generatePassword(),
              tipo: "recepcionista"

          })
      }

  }

  //  export const deleteDoc = (doc) => deleteDoc(doc(db, "doctores"), doc.id);

  export const deleteDoco = async (dni) => {
      deleteDoc(doc(db, "doctores", dni));
      deleteDoc(doc(db, "recepcionistas", dni));
  }