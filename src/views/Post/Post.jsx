import {  useState } from "react";
import { postAction } from "../../redux/action";
import { useDispatch } from 'react-redux';
import { Nav } from "../../components/nav/nav";

function Post() {
    const dispatch = useDispatch();

    const [good, setGood] = useState("");
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
    });
    const [errors, setErrors] = useState({
        title: "Campo obligatorio",
        description: "Campo obligatorio",
    });

    const handleChangueInput = (event) => {
        const { name, value } = event.target;
        const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;
        if (name === "title") {
            if (regex.test(value)) {
                setInputs((prevState) => ({
                    ...prevState,
                    title: value,
                }));
                setErrors((prevState) => ({
                    ...prevState,
                    title: "",
                }));
            } else {
                setErrors((prevState) => ({
                    ...prevState,
                    title: "Solo puedes escribir letras en este campo",
                }));
            }
        } else if (name === "description") {
            setInputs((prevState) => ({
                ...prevState,
                description: value,
            }));
            setErrors((prevState) => ({
                ...prevState,
                description: "",
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: inputs.title,
            description: inputs.description,
            state: false,
        };
        setGood("Tarea creada con exito");
        setErrors({
            title: "",
            description: "",
        });
        return dispatch(postAction(data));
    };

    return (
        <>
            <Nav />
            <section className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                <div className="max-w-screen-md mx-auto">
                    {!good && <h1 className="text-2xl sm:text-3xl md:text-4xl text-center">Aquí crearás tu tarea</h1>}
                    <form className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                        {!good && (
                            <>
                                <label className="flex flex-col sm:flex-col sm:items-center gap-2">
                                    <h2 className="text-lg sm:text-xl md:text-2xl">Título :</h2>
                                    <input
                                        type="text"
                                        className="p-2 sm:p-3 md:p-4 border border-gray-300 rounded-md w-full"
                                        name="title"
                                        onChange={handleChangueInput}
                                    />
                                    {errors.title && (
                                        <span className="text-red-500 text-sm">{errors.title}</span>
                                    )}
                                </label>
                                <label className="flex flex-col sm:flex-col sm:items-center gap-2">
                                    <h2 className="text-lg sm:text-xl md:text-2xl">Descripción de la tarea :</h2>
                                    <input
                                        type="text"
                                        className="p-2 sm:p-3 md:p-4 border border-gray-300 rounded-md w-full"
                                        name="description"
                                        onChange={handleChangueInput}
                                    />
                                    {errors.description && (
                                        <span className="text-red-500 text-sm">{errors.description}</span>
                                    )}
                                </label>

                                 
                                    <button
                                        className="bg-blue-500 text-white py-2 sm:py-3 md:py-4 rounded-md w-full sm:w-auto transition duration-200 hover:bg-blue-600"
                                        onClick={handleSubmit} disabled={errors.title || errors.description}
                                    >
                                        <h2 className="text-lg sm:text-xl md:text-2xl">Crear</h2>
                                    </button>
                                
                            </>
                        )}
                        {good && <span className="text-3xl font-semibold text-green-500 ">{good}</span>}
                    </form>
                </div>
            </section>
        </>
    );
}

export default Post;
