const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
        throw new Error(response.status);
    } else {
        const users = await response.json();
        return users;
    };
};

const doStuff = async () => {
    try {
        const users = await fetchUsers();
        console.log('Работает');
        console.log(users);
    } catch (error) {
        console.log('Ошибка');
        console.log(error.message);
    };
};

doStuff();
