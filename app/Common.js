//import { doc, getDoc } from "firebase/firestore"
//import { auth,db } from "./firebaseConfig"

import { useRouter } from "next/navigation"

export const grabPro=async({user, setisPro})=>{

    let ref=doc(db,'Users',user)

   

    await getDoc(ref).then((snap)=>{
        if (snap.data().paid){
            setisPro(true)
        }
    })

  

}


export const withAuth=(WrappedComponent)=>{
    const WithAuth= (props) => {
      const [user, setUser] = useState(null);
      const router = useRouter()
  
      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            // User is logged in
            setUser(authUser);
          } else {
            // User is not logged in
            setUser(null);
            router.push('/auth?state=Login')
  
          }
        });
  
        // Unsubscribe when the component unmounts
        return () => unsubscribe();
      }, []);
  
      return <WrappedComponent user={user} {...props} />;
    };
  
    return WithAuth
  }
