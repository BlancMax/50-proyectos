import { SVGProps } from "react"
import "./Licuadora.css";
import {Howl} from 'howler';
import { useState, useRef } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
  const [press, setPress] = useState<boolean>(false)
  const SvgRef = useRef<SVGSVGElement | null>(null);
  const handleClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
  
    const evtTarget=event.target as SVGSVGElement  
    if (SvgRef.current && SvgRef.current.contains(evtTarget) && evtTarget.id==="licuadora"){
      
      const sound = new Howl({
        src: ["./blender-mixer-smoothie-33026.mp3"],
        html5: true
      });
      if (!press) {
        sound.play();
        setPress(true);
        setTimeout(() => {
          setPress(false);
          sound.stop();
        }, 2000);
  
      }
    } 
  }
  

  

  return (
    <svg
      onClick={handleClick} style={{ cursor: "pointer" }}
      className={press ? 'shake' : ''}
      ref={SvgRef}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={800}
      height={800}
      viewBox="0 0 494.4 494.4"
      {...props}
    >
      <path
        d="M347.2 254.4v-24c2.4 0 4-1.6 4-4V89.6c0-2.4-1.6-4-4-4h-44c-2.4 0-4 1.6-4 4h-24c0-15.2 12.8-28 28-28h44c15.2 0 28 12.8 28 28v136.8c0 15.2-12.8 28-28 28z"
        style={{
          fill: "#4b6f7a",
        }}
      />
      <path
        d="M347.2 84h-44c-6.4 0-12 1.6-16 5.6h12c0-2.4 1.6-4 4-4h44c2.4 0 4 1.6 4 4V248.8c0 2.4-1.6 4-4 4v1.6c15.2 0 28-12.8 28-28V112c0-15.2-12.8-28-28-28z"
        style={{
          fill: "#405963",
        }}
      />
      <ellipse
        cx={241.6}
        cy={40.8}
        rx={87.2}
        ry={40.8}
        style={{
          fill: "#118dea",
        }}
      />
      <path
        d="M334.4 51.2H148.8v7.2h-25.6c-.8 0-2.4.8-2.4 1.6-1.6.8-1.6 2.4-1.6 3.2l28.8 64c3.2 79.2 15.2 149.6 32.8 198.4h120.8c20.8-56.8 33.6-141.6 33.6-236.8 0-12.8 0-24.8-.8-37.6z"
        style={{
          fill: "#b7d8d9",
        }}
      />
      <path
        d="M290.4 346.4c0 4.8-4 8.8-8.8 8.8h-80c-4.8 0-8.8-4-8.8-8.8v-48c0-4.8 4-8.8 8.8-8.8h80c4.8 0 8.8 4 8.8 8.8v48zM148.8 51.2v7.2H144l180 180c7.2-44 11.2-95.2 11.2-149.6 0-12.8 0-25.6-.8-37.6H148.8z"
        style={{
          fill: "#9ecccc",
        }}
      />
      <path
        d="M154.4 40.8c0-22.4 39.2-40.8 87.2-40.8"
        style={{
          fill: "#2eafff",
        }}
      />
      <path
        d="M348 48c0 5.6-4.8 10.4-10.4 10.4h-192c-5.6 0-10.4-4.8-10.4-10.4 0-5.6 4.8-10.4 10.4-10.4h192c5.6-.8 10.4 4 10.4 10.4zM330.4 464c0 16.8 1.6 30.4-15.2 30.4H168.8c-16.8 0-15.2-13.6-15.2-30.4l15.2-76.8c0-16.8 13.6-30.4 30.4-30.4h85.6c16.8 0 30.4 13.6 30.4 30.4l15.2 76.8z"
        style={{
          fill: "#118dea",
        }}
      />
      <path
        d="M168.8 386.4c0-16.8 13.6-30.4 30.4-30.4h85.6c16.8 0 30.4 13.6 30.4 30.4l15.2 76.8c0 16.8 1.6 30.4-15.2 30.4"
        style={{
          fill: "#0074dd",
        }}
      />
      <path
        d="M312.8 368c0 3.2-2.4 5.6-5.6 5.6H176c-3.2 0-5.6-2.4-5.6-5.6v-54.4c0-3.2 2.4-5.6 5.6-5.6h131.2c3.2 0 5.6 2.4 5.6 5.6V368z"
        style={{
          fill: "#496972",
        }}
      />
      <path
        d="M170.4 313.6c0-3.2 2.4-5.6 5.6-5.6h131.2c3.2 0 5.6 2.4 5.6 5.6V368c0 3.2-2.4 5.6-5.6 5.6"
        style={{
          fill: "#405963",
        }}
      />
      <path
        d="M170.4 313.6c0-3.2 2.4-5.6 5.6-5.6h131.2c3.2 0 5.6 2.4 5.6 5.6"
        style={{
          fill: "#4b6f7a",
        }}
      />
      
      <path
        id="licuadora"
       
               
        d="M273.6 429.6c0 17.6-14.4 32-32 32s-32-14.4-32-32 14.4-34.4 32-34.4 32 16.8 32 34.4z"
        style={{
          fill: "#cbe8ef",
        }}
      />
      <path
        d="M273.6 429.6c0 17.6-14.4 46.4-32 46.4s-32-28.8-32-46.4 14.4-29.6 32-29.6 32 12 32 29.6z"
        style={{
          fill: "#0074dd",
        }}
      />
      <circle
        id="licuadora"
        cx={241.6}
        cy={429.6}
        r={32}
        style={{
          fill: "#b8d7e0",
        }}
      />
      <path
        id="licuadora"
        d="M264 407.2c12.8 12.8 12.8 32.8 0 45.6-12.8 12.8-32.8 12.8-45.6 0"
        style={{
          fill: "#a7cbd3",
        }}
      />
      <circle
        id="licuadora"
        cx={257.6}
        cy={413.6}
        r={2.4}
        style={{
          fill: "#169908",
        }}
      />
    </svg>
  )
}
export default SvgComponent
