import "./Welcome.css";

const Welcome = (): React.ReactNode => {
  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-4">
      <h1 className="h1 pop-in-header">Hi, I'm Tom</h1>
      <div className="pop-in-content">
        <p>Test!</p>
      </div>
    </main>
  );
};

export default Welcome;
