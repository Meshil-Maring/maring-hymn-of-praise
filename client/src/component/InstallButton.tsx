import { useEffect, useState } from "react";
import DownloadIcon from "../assets/animation_icons/download";

declare global {
  interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{
      outcome: "accepted" | "dismissed";
      platform: string;
    }>;
  }
}

const InstallButton: React.FC = () => {
  const [promptEvent, setPromptEvent] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Detect if already installed
    const checkIfInstalled = () => {
      if (
        window.matchMedia("(display-mode: standalone)").matches ||
        (navigator as any).standalone
      ) {
        setIsInstalled(true);
      } else {
        setIsInstalled(false);
      }
    };

    // Run once on load
    checkIfInstalled();

    // Listen for install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setPromptEvent(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      setPromptEvent(null);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!promptEvent) return;

    await promptEvent.prompt();

    const result = await promptEvent.userChoice;
    if (result.outcome === "accepted") {
      console.log("User accepted the install");

      // Save latest index.json to localStorage
      fetch("/index.json")
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("index", JSON.stringify(data));
          console.log("Index data saved to localStorage");
        });

      // Save latest all the song data
      fetch("https://maring-hymn-of-praise.onrender.com/")
        .then((res) => res.json())
        .then((data) => localStorage.setItem("songData", JSON.stringify(data)));
    } else {
      console.log("User dismissed the install");
    }

    setPromptEvent(null);
  };

  if (isInstalled || !promptEvent) return null;

  return (
    <button
      onClick={handleInstallClick}
      className="text-sm bg-active text-white w-fit px-4 rounded-full py-2 absolute flex gap-2 justify-center items-center cursor-pointer bottom-20 z-20 right-10"
    >
      <DownloadIcon width={24} height={24} />
      Install App
    </button>
  );
};

export default InstallButton;
