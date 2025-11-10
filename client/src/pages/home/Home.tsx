// @ts-ignore: virtual module provided by Vite PWA plugin
import { useRegisterSW } from "virtual:pwa-register/react";
import { useEffect, useState } from "react";

import Header from "../../component/nav/header/Header";
import Category from "./Category";
import ListView from "./ListView";
import InstallPWA from "../../component/InstallButton";

const Home = () => {
  const [listType, setListType] = useState<string>("Numerical");
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  const { needRefresh, updateServiceWorker } = useRegisterSW({
    onRegistered(r: ServiceWorkerRegistration | undefined) {
      console.log("Service Worker registered:", r);
    },
    onNeedRefresh() {
      console.log("New version available!");
    },
    onOfflineReady() {
      console.log("App ready for offline use");
    },
  });

  // Listen for network status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    isOnline &&
      fetch("https://maring-hymn-of-praise-server.onrender.com/")
        .then((res) => res.json())
        .then((data) => localStorage.setItem("songData", JSON.stringify(data)));

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const activeHandler = ({ id }: { id: string | number }) => {
    setListType(String(id));
  };

  return (
    <div className="bg-bg-light h-screen flex flex-col relative">
      <Header />
      <InstallPWA />

      {/* Network Status Banner */}
      {!isOnline && (
        <div className="fixed bottom-0 left-0 w-full bg-red-500 text-white text-center py-1 text-sm z-50">
          Offline
        </div>
      )}

      {/* Category and List */}
      <Category activeHandler={activeHandler} />
      <ListView listType={listType} />

      {/* Show reload button if new version is available */}
      {needRefresh && (
        <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg animate-bounce">
          New update available!
          <button
            onClick={() => updateServiceWorker(true)}
            className="ml-3 bg-white text-blue-600 px-3 py-1 rounded-lg"
          >
            Reload
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
