import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    toast.success("Your response Succesfully submited", data);
  });

  return (
    <div className="flex items-center justify-center w-full p-14  bg-gray-300">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-2 w-[50vw] shadow-md p-5 border-4"
      >
        <label>Name</label>
        <input
          {...register("name", { required: true })}
          placeholder="Your Name"
          className="border p-2"
        />
        {errors.name && <span className="text-red-500">Name is required</span>}

        <label>Email</label>
        <input
          {...register("email", { required: true })}
          placeholder="Your Email"
          type="email"
          className="border p-2"
        />
        {errors.email && (
          <span className="text-red-500">Email is required</span>
        )}

        <label>Your Message</label>
        <textarea
          {...register("message", { required: true })}
          placeholder="Your Message"
          className="border p-2"
        ></textarea>
        {errors.message && (
          <span className="text-red-500">Message is required</span>
        )}

        <button type="submit" className="bg-slate-500 text-white p-2 mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
