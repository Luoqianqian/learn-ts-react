
type baseType = {
  type: string,
  name: string
}

type advancedType = baseType & {
  email: string
}

type propsType = baseType | advancedType;

function Component(props: propsType) {
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>{props.name}</h2>
    </div>
  );
}
export default Component;
