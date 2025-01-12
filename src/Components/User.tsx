interface User {
    id: number;
    name: string;
    age: number;
    email: string;
}

interface UserProps {  
    user: User;  // The `user` prop contains the `User` object
}

const User = ({ user }: UserProps) => {
    const { id, name, age, email } = user;  // Destructure the user object

    return (
        <div>
            <h5>ID: {id}</h5>
            <h5>Name: {name}</h5>
            <h5>Age: {age}</h5>
            <h5>Email: {email}</h5>
        </div>
    );
};

export default User;
