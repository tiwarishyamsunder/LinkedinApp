import React ,{useEffect,useState} from 'react'
import ArticleComponent from "../components/ArticleComponent"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from '../components/common/Loader';


export default function Article({currentUser}) {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
       onAuthStateChanged(auth, (res) => {
        if (!res?.accessToken) {
          navigate("/");
        }else {
          setLoading(false);
        }
      });
    }, []);
    return loading ? <Loader /> : <ArticleComponent currentUser={currentUser} />;
}
