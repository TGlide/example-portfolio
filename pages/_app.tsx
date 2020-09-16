import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
