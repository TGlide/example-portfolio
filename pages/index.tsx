import { useEffect, useState } from "react";
import { getPortfolioInfo, PortfolioInfo } from "../api/portfolio";
import Spinner from "../components/Spinner";

export default function Home() {
  const [portfolioInfo, setPortfolioInfo] = useState<PortfolioInfo | undefined>(
    undefined
  );
  useEffect(() => {
    getPortfolioInfo().then((res) => {
      if (res.status === 200) setPortfolioInfo(res.data);
    });
  }, []);

  if (!portfolioInfo) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <Spinner size={16} />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      {portfolioInfo.basics.username}
    </div>
  );
}
