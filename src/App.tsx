import { useReducer } from 'react';
import './App.css';

// initial image count
const imgCount: number[] = [];

for (let i = 1; i <= 10; i++) {
  imgCount.push(i);
}

// declare action type
type ACTIONTYPE = { type: 'pre' } | { type: 'next' };

// all action
function reducer(state: number, action: ACTIONTYPE) {
  switch (action.type) {
    case 'pre':
      return state - 1;
    case 'next':
      return state + 1;
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, 1);

  const handlePreBtn = () => {
    if (state === 1) {
      return;
    }
    dispatch({ type: 'pre' });
  };

  const handleNextBtn = () => {
    if (state === imgCount.length) {
      return;
    }
    dispatch({ type: 'next' });
  };

  return (
    <>
      <section className="w-[500px] m-auto">
        <section className="flex justify-between gap-1">
          <button className="w-[80px] scale-150" onClick={handlePreBtn}>
            ⬅
          </button>
          {imgCount.map((img) => {
            return (
              <img
                key={img}
                src={`https://dummyimage.com/600x400/000/fff&text=${img}`}
                alt="random"
                className={`w-[500px] h-[300px] rounded-lg transition-all duration-500 ${state === img ? 'block' : 'hidden'}`}
              />
            );
          })}
          <button className="w-[80px] scale-150" onClick={handleNextBtn}>
            ➡
          </button>
        </section>
      </section>
    </>
  );
}

export default App;
