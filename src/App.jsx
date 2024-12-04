import { useState } from "react";
import { InputBox } from "./components";
import UseCurrencyInfo from "./hooks/UseCurrencyInfo";
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = UseCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    const tempAmount = amount * currencyInfo[to];
    setAmount(convertedAmount);
    setConvertedAmount(tempAmount);
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="min-h-screen flex items-start justify-start bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full max-w-md ml-10 mt-10 bg-white/30 backdrop-blur-lg rounded-lg p-6 shadow-lg border border-white/20 hover:shadow-2xl transition-all">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-6"
        >
          <h1 className="text-3xl font-semibold text-white text-left mb-4">Currency Converter</h1>
          
          <div className="w-full">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
              className="border border-gray-300 rounded-full p-4 bg-white/40 backdrop-blur-md text-gray-900"
            />
          </div>
          
          <div className="flex justify-center my-4">
            <button
              type="button"
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          
          <div className="w-full">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
              className="border border-gray-300 rounded-full p-4 bg-white/40 backdrop-blur-md text-gray-900"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white font-bold py-3 rounded-md shadow-md hover:bg-green-800 transition-transform transform hover:scale-105"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
