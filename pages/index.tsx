import { InferGetStaticPropsType } from "next";
import { getPortfolioInfo, PortfolioInfo } from "../api/portfolio";

export const getStaticProps = async () => {
  const res = await getPortfolioInfo();
  const portfolioInfo: PortfolioInfo = res.data;

  return {
    props: {
      portfolioInfo: portfolioInfo,
    },
    revalidate: 1,
  };
};

export default function Home({
  portfolioInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="container mx-auto pt-8">
      <div className="text-center">
        <div className="inline-flex items-center bg-gray-800 shadow-lg rounded-lg mx-auto px-8 py-8">
          <img
            src={portfolioInfo.basics.picture}
            alt="Profile photo"
            className="w-40"
          />
          <div className="text-left ml-6">
            <h1 className="font-semibold text-3xl">
              {portfolioInfo.basics.name}
            </h1>
            <h2 className="font-semibold text-lg">
              <a
                className="text-blue-400 hover:text-blue-300 transition ease-in duration-100"
                href={`https://github.com/${portfolioInfo.basics.username}`}
                target="_blank"
              >
                {portfolioInfo.basics.username}
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
