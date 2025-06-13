import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

const Page404 = () => {
  return (
    <main className="py-5">
      <section className="py-5 container">
        <h1 className="text-center">404 pagina non trovata</h1>
        <div className="text-center">
          <Link className="btn btn-primary" to="/personaggi">
            Dai un occhiata invece ai nostri personaggi ;){" "}
          </Link>
          <BackButton />
        </div>
      </section>
    </main>
  );
};

export default Page404;
