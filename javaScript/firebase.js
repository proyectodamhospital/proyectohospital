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
      query,
      where,
  } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";
  import {
      getAuth,
      createUserWithEmailAndPassword,
      sendEmailVerification,
      onAuthStateChanged,
      signInWithEmailAndPassword,
      sendPasswordResetEmail,
      updatePassword
  } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";



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
  //Initialize authdireccion
  const auth = getAuth(app);
  //
  export const user = auth.currentUser;



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

  export const getTask = async() => getDocs(collection(db, "clientes"));
  export const getTaskroot = async() => getDocs(collection(db, "root"));
  export const getTaskRecep = async() => getDocs(collection(db, "recepcionistas"));
  export const getTaskDoct = async() => getDocs(collection(db, "doctores"));
  export const getTaskCitas = async() => getDocs(collection(db, "citas"));



  //guarda en una coleccion
  export const saveTask = async(nombre, apellido, direccion, poblacion, provincia, pais, dni, telefono, correo, login, contraseña) => {
      var x = Boolean(false);
      const querySnapshot = await getDocs(collection(db, "clientes"));
      querySnapshot.forEach((doc) => {
              if (doc.id == dni) {
                  x = true;
              } else {}
          })
          // size == 0 
      if (x == false) {
          setDoc(doc(db, "clientes", dni), {
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

          EntrarConAuth(correo, contraseña);


          alert(nombre + " tu usuario se ha guardado correctamente")
      }
  }

  export const saveDoctor = async(nombre, provincia, poblacion, correo, telefono, dni, pais, direccion, especialidad, despacho, hora) => {
      var x = Boolean(false);
      const querySnapshot = await getDocs(collection(db, "doctores"));
      querySnapshot.forEach((doc) => {
          if (doc.id == dni) {
              x = true;
          } else {}
      })

      if (x == false) {
          setDoc(doc(db, "doctores", dni), {
              nombre: nombre,
              provincia: provincia,
              poblacion: poblacion,
              correo: correo,
              telefono: telefono,
              dni: dni,
              pais: pais,
              direccion: direccion,
              especialidad: especialidad,
              despacho: despacho,
              contraseña: generatePassword(),
              usuario: dni,
              hora: hora,
              tipo: "doctor",
          })
      } else {
          alert("YA EXISTE EL DOCUMENTO");
      }

  }

  export const formatDate = (date) => {
      let formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart(2, "0") + "-" + date.getDate().toString().padStart(2, "0");
      return formatted_date;
  }
  export const changePassword = async(contrseñaViej, contrseñaNueva) => {
      var x = Boolean(false);
      var correo;
      var despacho;
      var direccion;
      var dni;
      var especialidad;
      var hora;
      var nombre;
      var pais;
      var poblacion;
      var provincia;
      var telefono;
      var tipo;
      var usuario;
      var especialidad;

      const querySnapshot = await getDocs(collection(db, "doctores"));
      querySnapshot.forEach((doc) => {

          if (doc.data().contraseña == contrseñaViej) {
              x = true;
              dni = doc.data().dni
              correo = doc.data().correo
              despacho = doc.data().despacho
              direccion = doc.data().direccion
              especialidad = doc.data().especialidad
              hora = doc.data().hora
              nombre = doc.data().nombre
              pais = doc.data().pais
              provincia = doc.data().provincia
              poblacion = doc.data().poblacion
              telefono = doc.data().telefono
              tipo = doc.data().tipo
              usuario = doc.data().usuario
          } else {}
      })

      if (x == true) {
          setDoc(doc(db, "doctores", dni), {
              nombre: nombre,
              provincia: provincia,
              poblacion: poblacion,
              correo: correo,
              telefono: telefono,
              dni: dni,
              pais: pais,
              direccion: direccion,
              especialidad: especialidad,
              despacho: despacho,
              usuario: dni,
              hora: hora,
              tipo: "doctor",
              contraseña: contrseñaNueva
          })
      } else {
          alert("No se pudo cambiar la contraseña");
      }

  }

  export const saveComment = async(comentario, doctor, fecha, hora) => {
      var x = Boolean(false);
      var hora;
      var especialidad;
      var correo;
      var doctor;
      var fecha;
      var dni;

      const querySnapshot = await getDocs(collection(db, "doctores"));
      querySnapshot.forEach((doc) => {
          //console.log(doc.id)
          if (doc.data().nombre == doctor) {
              x = true;
          }
      })
      if (x = false) {
          alert("no existe el doctor")

      }

      const querySnapshot2 = await getDocs(collection(db, "citas"));
      querySnapshot2.forEach((doc) => {
          console.log("DOCTORbbdd: " + doc.data().doctor)
          console.log("doctor: " + doctor)

          console.log("horabbdd: " + doc.data().hora)
          console.log("hora: " + hora)

          console.log("fechabbdd: " + doc.data().fecha)
          console.log("fecha: " + fecha)

          if (doc.data().doctor == doctor && doc.data().hora == hora && doc.data().fecha == fecha) {
              console.log("hola")
              x = true;
              fecha = doc.data().fecha
              hora = doc.data().hora
              correo = doc.data().correo
              dni = doc.data().dni
              especialidad = doc.data().especialidad
              doctor = doc.data().doctor


          }
          /*else {
                       console.log("adios")

                   }*/
      })
      if (x == true) {
          setDoc(doc(db, "citas", fecha), {
              correo: correo,
              dni: dni,
              doctor: doctor,
              especialidad: especialidad,
              hora: hora,
              fecha: fecha,
              comentario: comentario

          })
      } else {

          alert("No se pudo añadir el comentario");


      }
  }


  export const changePasswordAuth = async(contrseñaNueva) => {

      const user = auth.currentUser;
      const newPassword = contrseñaNueva;

      updatePassword(user, newPassword).then(() => {
          // Update successful.
      }).catch((error) => {
          // An error ocurred
          // ...
      });


  }


  export const saveDoctAuth = async(correo) => {

      const querySnapshot = await getDocs(collection(db, "doctores"));
      querySnapshot.forEach((doc) => {

          if (doc.data().correo == correo) {
              CrearAuthUser(doc.data().correo, doc.data().contraseña);

          }
      })
  }
  export const saveSecret = async(nombre, provincia, poblacion, correo, telefono, dni, pais, direccion) => {
      var x = Boolean(false);
      const querySnapshot = await getDocs(collection(db, "recepcionistas"));
      querySnapshot.forEach((doc) => {
              if (doc.id == dni) {
                  x = true;
              } else {}
          })
          // size == 0 
      if (x == false) {
          setDoc(doc(db, 'recepcionistas', dni), {
              nombre: nombre,
              provincia: provincia,
              poblacion: poblacion,
              correo: correo,
              telefono: telefono,
              dni: dni,
              pais: pais,
              direccion: direccion,
              contraseña: generatePassword(),
              usuario: dni,
              tipo: "recepcionista"

          })
      } else {
          alert("YA EXISTE EL DOCUMENTO");

      }

  }



  export const saveCita = async(fecha, hora, doctor, especialidad, dni) => {
      var x = Boolean(false);

      var correo2
      const querySnapshot = await getDocs(collection(db, "citas"));
      querySnapshot.forEach((doc) => {
          if (doc.data().doctor == doctor && doc.data().hora == hora && doc.id == fecha) {
              x = true;
              alert("Esta hora ya esta ocupada");
          }
      })

      var y = Boolean(false);

      const querySnapshot2 = await getDocs(collection(db, "clientes"));
      querySnapshot2.forEach((doc) => {
          if (dni == doc.data().dni) {
              y = true;
              correo2 = doc.data().correo
          }

      })


      if (x == false) {
          setDoc(doc(db, "citas", fecha), {
              fecha: fecha,
              hora: hora,
              doctor: doctor,
              especialidad: especialidad,
              dni: dni,
              correo: correo2

          })
      }
  }



  export const deleteDoco = async(dni) => {
      deleteDoc(doc(db, "doctores", dni));
      deleteDoc(doc(db, "recepcionistas", dni));
  }

  export const CrearAuthUser = async(email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              const user = userCredential.user;
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              alert("El email ya esta registrado ó ya existe el documento")
          });

  }

  export const CerrarSess = async() => {

      signOut(auth).then(() => {
          // Sign-out successful.
      }).catch((error) => {
          // An error happened.
      });
  }



  export const EnviarEmail = async() => {
      sendEmailVerification(auth.currentUser)
          .then(() => {
              // Email verification sent!
              // ...
              alert("Correo enviado")
          });

  }




  export const EntrarConAuth = async(email, password) => {

      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              //
              // ...
          })
          .catch((error) => {
              alert("Error")

              const errorCode = error.code;
              const errorMessage = error.message;
          });
  }


  export const conseguirAuth = async(email, password) => {

      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              //
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
          });
  }

  export const sessionActiva = async() => {

      onAuthStateChanged(auth, (user) => {
          if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              const uid2 = user.email
                  // ...
          } else {
              // User is signed out
              // ...
          }
      });
  }



  export const infoUSu = async() => {

      if (user !== null) {
          // The user object has basic properties such as display name, email, etc.
          const displayName = user.displayName;
          const email = user.email;
          // The user's ID, unique to the Firebase project. Do NOT use
          // this value to authenticate with your backend server, if
          // you have one. Use User.getToken() instead.
          const uid = user.uid;
      }
  }



  export const verReservas = async() => {
      var citas = new Array();
      var q = query(collection(db, 'citas'), where("dni", "==", localStorage.dni));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(cita => {

          citas.push(cita.data());

      });

      return citas;
  }

  export const verCitas = async() => {
      var citas = new Array();
      var q = query(collection(db, 'citas'), where("dni", "==", localStorage.dni));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(cita => {

          citas.push(cita.data());

      });

      return citas;
  }