const Message = ({ message }: { message: string }) => {
  return (
    <div className="absolute bottom-0 bg-active text-bg-light z-30 w-full p-3">
      {message}
    </div>
  );
};

export default Message;
