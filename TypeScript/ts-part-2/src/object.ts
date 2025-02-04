console.log("Hello World");

type objectType = {
  name: string,
  age: number,
  gender?: boolean,
  greet(name: string): void,
}

// @ts-ignore
function sayHello(object: objectType): number {
  console.log("Heloooo... " + object.name);
  object.greet("ANshu");
}

sayHello({
  name: "Anshu",
  age: 21,
  greet: (name: string) => {
    console.log("Good Morning");
  }
});

interface User {
  id: string;
  name: string;
  age: string;
  email: string;
  password: string;
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdateProps) {
  // hit the database tp update the user
}
updateUser({ name: "Anshu", age: "21", email: "abc" })
