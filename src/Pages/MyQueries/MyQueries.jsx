import { Helmet } from "react-helmet-async";
import AllMyQueries from "./AllMyQueries";
import Banner from "./Banner";

const MyQueries = () => {
  return (


    <div className="container mx-auto lg:px-20 lg:py-8">
        <Helmet>
        <title>ProdSwap | My Queries</title>
      </Helmet>
      {/* BANNER */}
      <div className="">
        <Banner> </Banner>
      </div>

    

      <section className="py-8">
        <AllMyQueries></AllMyQueries>
      </section>
    </div>
  );
};

export default MyQueries;
