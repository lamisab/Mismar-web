import { useTranslation } from "react-i18next";


function App() {

  const {t} = useTranslation();

  return (
    <div className="App">
      <header className="flex items-center flex-col gap-5">
        <img src={"assets/images/logo.png"} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold text-red-500 underline">
          {t('app.name')}
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
