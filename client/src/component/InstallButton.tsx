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

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setPromptEvent(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!promptEvent) return;

    await promptEvent.prompt();

    const result = await promptEvent.userChoice;
    if (result.outcome === "accepted") {
      console.log("User accepted the install");
    } else {
      console.log("User dismissed the install");
    }

    setPromptEvent(null);
  };

  return (
    <>
      {promptEvent && (
        <button
          onClick={handleInstallClick}
          className="text-sm bg-active text-white w-fit  px-4 rounded-full py-2 absolute flex gap-2 justify-center items-center cursor-pointer bottom-10 z-20 right-10"
        >
          <DownloadIcon width={24} height={24} />
          Install App
        </button>
      )}
    </>
  );
};

export default InstallButton;
