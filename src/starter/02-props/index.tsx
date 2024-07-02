import { type PropsWithChildren } from "react";

type propsType = PropsWithChildren<{name: string, age: number}>

// type propsType = {
//   name: string, 
//   age: number,
//   children?: React.ReactNode
// }
function Component({name, age, children}: propsType) {
  return (
    <div>
      <h2>name: {name}</h2>
      <h2>age: {age}</h2>
      {children}
    </div>
  );
}
export default Component;
