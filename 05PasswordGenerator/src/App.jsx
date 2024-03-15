import { useState, useCallback, useEffect ,useRef} from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPassword] = useState("");

  const passref=useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*()[]{}";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, num, char]);

  const copypass=useCallback(()=>{
    passref.current?.select();
    passref.current?.setSelectionRange(0,length);
   window.navigator.clipboard.writeText(pass)
  },[pass])
  useEffect(() => {
    passwordGenerator();
  }, [length, char, num, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-sm rounded-lg px-4 py-8 text-orange-800 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={pass}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passref}
          />
          <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'
          onClick={copypass}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range" min={6} max={100} value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label htmlFor="">length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" name="" id="numberInput" defaultChecked={num}
              onChange={() => {
                setNum((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <input type="checkbox" name="" id="charInput" defaultChecked={char}
            onChange={() => {
              setChar((prev) => !prev);
            }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App;
