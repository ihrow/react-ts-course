import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const clickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
    console.log(inputRef.current?.value)
  }

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("DRAG");
  }

  const dragOverHandler =(e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  }
  const dropHandler =(e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("Drop");
  }
  const leaveHandler =(e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false)
  }

  return (
    <div>
      <input value={value} type="text" onChange={changeHandler} placeholder="controlled"/>
      <input ref={inputRef} type="text" placeholder="uncontrolled"/>
      <button onClick={clickHandler}>Button</button>
      <div onDrag={dragHandler}  draggable style={{width: 200, height: 200, background: 'red'}}></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragOverHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? 'green' : 'red',
          marginTop: 15
      }}></div>
    </div>
  );
};

export default EventsExample;