import { useEffect } from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import Login from "../pages/Login/index";

export default function Home() {
  const router = useRouter();

  const fetchExpenses = async () => {
    try {
      const headers = {
        authorization: cookie.get("jwt_token"),
      };

      const response = await axios.get(`${process.env.SERVER_URL}/forms`, {
        headers,
      });
    } catch (err) {
      // @ts-ignore
      if (err.response.status === 401) {
        router.push("/login");
      }
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
     <Login/>
  );
}
