import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const [buttonActive, setButtonActive] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Basılan tuşun kodunu kontrol et (K harfi 75)
      if (event.keyCode === 107) {
        // Tuşa basıldığında butonu aktif hale getir
        setButtonActive(true);
        setCount(count + 1);
      } else if(event.keyCode === 109) {
        setButtonActive(true);
        setCount(count - 1);
      }
    };

    const handleKeyUp = (event) => {
      // Tuşa basılmadığında butonu pasif hale getir
      if (event.keyCode === 107) {
        setButtonActive(false);
      }
    };

    // Event listener'ları ekleyin
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    // Component unmount edildiğinde event listener'ları kaldırın
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }); // Boş bağımlılık dizisi, yalnızca component mount olduğunda bir kere çalışmasını sağlar


  return (
    <div className='App'>
      <button className='button' onClick={() => setCount(count + 1)}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      +
      </button>
      <h1>{count}</h1>
      <button className='button' onClick={() => setCount(count - 1)}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      -
      </button>
    </div>
  );
}

export default App;
